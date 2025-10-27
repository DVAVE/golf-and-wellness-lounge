import { Link } from "react-router-dom";
import { Phone, MapPin, Instagram } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src={logo} alt="Golf & Wellness Lounge" className="h-16 w-auto mb-4" />
            <p className="font-montserrat text-sm text-muted-foreground">
              Specialized body treatments for athletes at Chapman Golf Club, Harare.
            </p>
          </div>
          
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 font-montserrat">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/treatments" className="text-muted-foreground hover:text-primary transition-colors">
                  Treatments
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact & Book
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 font-montserrat">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+263787028681" className="hover:text-primary transition-colors">
                  0787 028 681
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>Chapman Golf Club, Harare</span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-5 h-5 text-primary cursor-pointer hover:scale-110 transition-transform" />
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="font-montserrat text-sm text-muted-foreground">
            © {new Date().getFullYear()} Golf & Wellness Lounge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
