# Contact Form Backend Server

Node.js/Express backend that receives contact form submissions and writes them to Google Sheets.

## Setup Instructions

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Google Cloud Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the **Google Sheets API**
4. Create a **Service Account**:
   - Go to "IAM & Admin" > "Service Accounts"
   - Click "Create Service Account"
   - Give it a name (e.g., "sheets-writer")
   - Click "Create and Continue"
   - Grant role: "Editor" or "Owner"
   - Click "Done"
5. Create a **JSON Key**:
   - Click on the service account you just created
   - Go to "Keys" tab
   - Click "Add Key" > "Create New Key"
   - Choose "JSON" format
   - Download the file and save it as `google-credentials.json` in the `backend` folder

### 3. Google Sheets Setup

1. Create a new Google Sheet or open an existing one
2. Copy the Sheet ID from the URL:
   ```
   https://docs.google.com/spreadsheets/d/[SHEET_ID]/edit
   ```
3. Share the sheet with the service account email:
   - Open your Google Sheet
   - Click "Share"
   - Paste the service account email (found in `google-credentials.json` under `client_email`)
   - Give "Editor" permission
   - Uncheck "Notify people"
   - Click "Share"

4. Add headers to your sheet (Row 1):
   ```
   Timestamp | Name | Email | Phone | Subject | Message
   ```

### 4. Environment Configuration

Create a `.env` file in the `backend` folder:
```bash
cp .env.example .env
```

Edit `.env` with your values:
```
PORT=3001
GOOGLE_SHEET_ID=your_actual_sheet_id
FRONTEND_URL=http://localhost:8080
```

### 5. Start the Server

Development mode with auto-reload:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## Deployment Options

### Option 1: Railway
1. Push code to GitHub
2. Go to [Railway.app](https://railway.app)
3. Click "New Project" > "Deploy from GitHub repo"
4. Add environment variables in Railway dashboard
5. Upload `google-credentials.json` as a file in Railway

### Option 2: Render
1. Push code to GitHub
2. Go to [Render.com](https://render.com)
3. Create new "Web Service"
4. Connect your GitHub repo
5. Add environment variables
6. Upload service account JSON in Render dashboard

### Option 3: Heroku
```bash
heroku create your-app-name
heroku config:set GOOGLE_SHEET_ID=your_sheet_id
heroku config:set FRONTEND_URL=https://your-frontend-url.com
# Upload google-credentials.json separately via Heroku dashboard
git push heroku main
```

### Option 4: VPS (DigitalOcean, Linode, AWS EC2)
1. SSH into your server
2. Install Node.js and npm
3. Clone your repository
4. Run `npm install`
5. Set up environment variables
6. Use PM2 to keep server running:
   ```bash
   npm install -g pm2
   pm2 start server.js
   pm2 startup
   pm2 save
   ```

## API Endpoints

### POST /api/contact
Receives contact form data and saves to Google Sheets.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "subject": "Legal Consultation",
  "message": "I need help with a contract."
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Form submitted successfully"
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "error": "Error message"
}
```

### GET /api/health
Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

## Security Notes

- Never commit `google-credentials.json` to version control
- Never commit `.env` file
- Add both to `.gitignore`
- Use environment variables for sensitive data
- Enable CORS only for your frontend domain in production
- Consider adding rate limiting for production use

## Troubleshooting

**Error: "Failed to authenticate with Google Sheets API"**
- Check that `google-credentials.json` exists in the backend folder
- Verify the file has valid JSON format

**Error: "The caller does not have permission"**
- Make sure you shared the Google Sheet with the service account email
- Verify the service account has Editor permissions

**CORS Error in Frontend**
- Update `FRONTEND_URL` in `.env` to match your frontend URL
- Make sure the backend server is running
