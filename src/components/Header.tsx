import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Golf & Wellness Lounge" className="h-12 w-auto" />
        </Link>
        
        <ul className="hidden md:flex items-center gap-8 font-montserrat font-medium">
          <li>
            <Link 
              to="/" 
              className={`transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`transition-colors hover:text-primary ${
                isActive('/about') ? 'text-primary' : 'text-foreground'
              }`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              to="/treatments" 
              className={`transition-colors hover:text-primary ${
                isActive('/treatments') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Treatments
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`transition-colors hover:text-primary ${
                isActive('/contact') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Contact & Book
            </Link>
          </li>
        </ul>
        
        <Link to="/contact">
          <Button className="font-montserrat font-semibold">
            Book Now
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
