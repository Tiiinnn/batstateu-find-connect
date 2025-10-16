import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">BatStateU Lost & Found</h3>
            <p className="text-sm text-primary-foreground/80">
              Helping the BatStateU community recover lost belongings responsibly and efficiently.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="/lost-items" className="hover:text-primary-foreground transition-colors">Lost Items</a></li>
              <li><a href="/found-items" className="hover:text-primary-foreground transition-colors">Found Items</a></li>
              <li><a href="/about" className="hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Batangas State University</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+63 123 456 7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>lostandfound@batstateu.edu.ph</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm text-primary-foreground/80">
          © {new Date().getFullYear()} Batangas State University. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
