import { Mail, Phone, Linkedin, Twitter, Github } from "lucide-react";

export default function UsekaseFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
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
          <div>
            <h3 className="font-semibold mb-4">Locations</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Singapore</li>
              <li>Copenhagen</li>
              <li>Remote Worldwide</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:hello@usekase.ai"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  hello@usekase.ai
                </a>
              </li>
              <li>
                <a
                  href="tel:+6512345678"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +65 1234 5678
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#solutions" className="hover:text-foreground transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#model" className="hover:text-foreground transition-colors">
                  Our Model
                </a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-foreground transition-colors">
                  Sectors
                </a>
              </li>
              <li>
                <a href="#investors" className="hover:text-foreground transition-colors">
                  For Investors
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Usekase Pte Ltd. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Github"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
