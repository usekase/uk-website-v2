import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function UsekaseNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Case Studies", href: "/case-studies", type: "route" },
    { label: "Platform", href: "/platform", type: "route" },
    { label: "Company", href: "/company", type: "route" },
    { label: "Careers", href: "/careers", type: "route" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src="/uk-logo.png" alt="Usekase" className="h-16" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = link.type === "route" && location.pathname === link.href;

              return link.type === "route" ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`relative group px-4 py-2 rounded-md transition-all duration-200 ${
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-primary/10'
                  }`}
                >
                  {/* Show corners only on hover when NOT active */}
                  {!isActive && (
                    <>
                      {/* Top-left corner */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-2.5 absolute -top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-sm pointer-events-none" />

                      {/* Top-right corner */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-2.5 absolute -top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-sm pointer-events-none" />

                      {/* Bottom-left corner */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-2.5 absolute -bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-sm pointer-events-none" />

                      {/* Bottom-right corner */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-2.5 absolute -bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-sm pointer-events-none" />
                    </>
                  )}

                  <span className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-primary-foreground'
                      : 'text-foreground/80 group-hover:text-foreground'
                  }`}>
                    {link.label}
                  </span>
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="relative group px-2.5 py-1.5"
                >
                  {/* All 4 corners on hover */}
                  {/* Top-left corner */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-2.5 absolute -top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-sm pointer-events-none" />

                  {/* Top-right corner */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-2.5 absolute -top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-sm pointer-events-none" />

                  {/* Bottom-left corner */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-2.5 absolute -bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-sm pointer-events-none" />

                  {/* Bottom-right corner */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-2.5 absolute -bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-sm pointer-events-none" />

                  <span className="text-sm font-medium transition-colors duration-300 text-foreground/80 group-hover:text-foreground">
                    {link.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              size="default"
              onClick={() => {
                window.location.href = "/contact-us";
              }}
            >
              Book Discovery Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md transition-colors hover:bg-muted text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t bg-white"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-2 items-center">
                {navLinks.map((link) => {
                  const isActive = link.type === "route" && location.pathname === link.href;

                  return link.type === "route" ? (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`relative group px-4 py-2 text-center rounded-md transition-all duration-200 w-full max-w-xs ${
                        isActive
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-primary/10'
                      }`}
                    >
                      {/* Show corners only on hover when NOT active */}
                      {!isActive && (
                        <>
                          {/* Top-left corner */}
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-2.5 absolute -top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-sm pointer-events-none" />

                          {/* Top-right corner */}
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-2.5 absolute -top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-sm pointer-events-none" />

                          {/* Bottom-left corner */}
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-2.5 absolute -bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-sm pointer-events-none" />

                          {/* Bottom-right corner */}
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-2.5 absolute -bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-sm pointer-events-none" />
                        </>
                      )}

                      <span className={`text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? 'text-primary-foreground'
                          : 'text-foreground/80 group-hover:text-foreground'
                      }`}>
                        {link.label}
                      </span>
                    </Link>
                  ) : (
                    <button
                      key={link.label}
                      onClick={() => scrollToSection(link.href)}
                      className="relative group px-3 py-2 text-center w-full max-w-xs"
                    >
                      {/* All 4 corners on hover */}
                      {/* Top-left corner */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-2.5 absolute -top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-sm pointer-events-none" />

                      {/* Top-right corner */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-2.5 absolute -top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-sm pointer-events-none" />

                      {/* Bottom-left corner */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-2.5 absolute -bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-sm pointer-events-none" />

                      {/* Bottom-right corner */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-2.5 absolute -bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-sm pointer-events-none" />

                      <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                        {link.label}
                      </span>
                    </button>
                  );
                })}

                {/* Divider */}
                <div className="w-full max-w-xs border-t border-border my-2"></div>

                <div className="pt-2 w-full flex justify-center">
                  <Button
                    className="w-full max-w-xs"
                    size="lg"
                    onClick={() => {
                      window.location.href = "/contact-us";
                    }}
                  >
                    Book Discovery Call
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
