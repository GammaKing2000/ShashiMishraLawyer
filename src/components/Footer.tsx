import { Link } from "react-router-dom";
import { Scale, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="h-8 w-8 text-secondary" />
              <span className="text-lg font-bold">Shashi Mishra And Associates</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Professional legal excellence committed to justice, equality, and client advocacy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/practice-areas" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-semibold mb-4">Practice Areas</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Civil & Criminal Law</li>
              <li>Family Law</li>
              <li>Property Law</li>
              <li>Company Law</li>
              <li>MACT Cases</li>
              <li>Service Matters</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-secondary mt-1" />
                <div className="text-sm text-primary-foreground/80">
                  <p>+91 98997 96839</p>
                  <p>83685 79322</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-secondary mt-1" />
                <span className="text-sm text-primary-foreground/80">sm200803@gmail.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-secondary mt-1" />
                <span className="text-sm text-primary-foreground/80">
                  Chamber No 134, 1st Floor, Sector 12, Faridabad, Haryana 121007
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <p className="text-xs text-primary-foreground/70 mb-4">
            <strong>Legal Disclaimer:</strong> In compliance with Bar Council of India rules, 
            advocates are prohibited from soliciting work or advertising directly or indirectly. 
            This website is meant solely for informational purposes and does not constitute 
            solicitation or legal advice. By accessing this website, you acknowledge that there 
            has been no advertisement, personal communication, solicitation, invitation or 
            inducement of any sort whatsoever from us or any of our members to solicit any work. 
            The information provided on this website is solely available at your request for 
            informational purposes only and should not be interpreted as soliciting or advertisement.
          </p>
          <div className="text-center text-sm text-primary-foreground/70">
            <p>&copy; {currentYear} Shashi Mishra And Associates. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
