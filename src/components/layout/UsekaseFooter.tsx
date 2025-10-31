import { Mail, Linkedin, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function UsekaseFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <img src="/uk-logo.png" alt="Usekase" className="h-12" />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Building AI capabilities you can own, not just rent.
            </p>
            <div className="text-sm text-muted-foreground">
              <p className="font-semibold mb-2">Usekase Pte Ltd</p>
            </div>
          </div>

          {/* Locations */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-4">Locations</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Singapore</li>
              <li>Copenhagen</li>
              <li>Remote Worldwide</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:hello@usekase.ai"
                  className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  hello@usekase.ai
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/case-studies" className="hover:text-foreground transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/platform" className="hover:text-foreground transition-colors">
                  Platform
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Usekase Pte Ltd. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="http://linkedin.com/company/usekase"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61566987854004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="http://instagram.com/usekase.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
