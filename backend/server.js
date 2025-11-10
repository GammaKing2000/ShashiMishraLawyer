/**
 * Node.js Backend Server for Contact Form with Google Sheets Integration
 * 
 * Setup Instructions:
 * 1. Run: npm install express cors googleapis dotenv
 * 2. Create a .env file with:
 *    - PORT=3001
 *    - GOOGLE_SHEET_ID=your_google_sheet_id
 *    - FRONTEND_URL=http://localhost:8080
 * 3. Place your Google service account JSON key as 'google-credentials.json' in this directory
 * 4. Run: node server.js
 */

const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  methods: ['POST', 'OPTIONS'],
  credentials: true
}));
app.use(express.json());

// Google Sheets Authentication
let sheets;
try {
  const auth = new google.auth.GoogleAuth({
    keyFile: './google-credentials.json', // Service account JSON file
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  sheets = google.sheets({ version: 'v4', auth });
  console.log('✅ Google Sheets API authenticated successfully');
} catch (error) {
  console.error('❌ Failed to authenticate with Google Sheets API:', error.message);
  process.exit(1);
}

/**
 * Appends form data to Google Sheet
 * @param {Object} formData - The contact form data
 * @returns {Promise} - Result of the append operation
 */
async function appendToSheet(formData) {
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  const range = 'Sheet1!A:F'; // Adjust sheet name if needed

  // Prepare row data with timestamp
  const timestamp = new Date().toISOString();
  const values = [[
    timestamp,
    formData.name,
    formData.email,
    formData.phone,
    formData.subject,
    formData.message
  ]];

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: { values }
    });

    return response.data;
  } catch (error) {
    console.error('Error appending to sheet:', error);
    throw error;
  }
}

/**
 * POST endpoint to receive contact form submissions
 */
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format'
      });
    }

    // Append to Google Sheet
    await appendToSheet({ name, email, phone, subject, message });

    console.log(`✅ Form submission saved: ${name} (${email})`);

    // Send success response
    res.status(200).json({
      success: true,
      message: 'Form submitted successfully'
    });

  } catch (error) {
    console.error('❌ Error processing form submission:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to process form submission'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Google Sheet ID: ${process.env.GOOGLE_SHEET_ID}`);
  console.log(`🌐 CORS enabled for: ${process.env.FRONTEND_URL || '*'}`);
});
