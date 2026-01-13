"use client";

import { useState, useEffect } from "react";
import Container from "../ui/Container";
import Logo from "../ui/Logo";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Defer client-side logic until after mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "/?product_cat=bedroom-furniture", label: "Bedroom" },
    { href: "/product-category/living-room", label: "Living Room" },
    { href: "/?product_cat=dining-room-furniture", label: "Dining" },
    { href: "/?product_cat=electronics", label: "Electronics" },
    { href: "/?product_cat=kitchen-appliances", label: "Kitchen" },
    { href: "/?product_cat=office-furniture", label: "Office" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/98 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <nav className="hidden items-center space-x-6 lg:space-x-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleClick}
                className="nav-link-uppercase relative text-foreground/80 transition-all duration-500 ease-out hover:text-[#DC2626] hover:scale-105 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#DC2626] after:transition-all after:duration-500 after:ease-out hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center space-x-4 md:flex">
            <a
              href="/my-account"
              onClick={handleClick}
              className="nav-link relative text-foreground/70 transition-all duration-500 ease-out hover:text-[#DC2626] hover:scale-105 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#DC2626] after:transition-all after:duration-500 after:ease-out hover:after:w-full"
            >
              My Account
            </a>
            <a
              href="https://creditfacility.teecherz.com"
              onClick={handleClick}
              className="nav-link relative text-foreground/70 transition-all duration-500 ease-out hover:text-[#DC2626] hover:scale-105 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#DC2626] after:transition-all after:duration-500 after:ease-out hover:after:w-full"
            >
              Credit Facility
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 -mr-2 touch-manipulation"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              type="button"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="border-t border-foreground/10 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleClick}
                className="block px-4 py-3 text-base font-medium text-foreground/80 hover:text-[#DC2626] hover:bg-foreground/5 transition-colors duration-200 touch-manipulation"
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-foreground/10 mt-2 pt-2 space-y-1">
              <a
                href="/my-account"
                onClick={handleClick}
                className="block px-4 py-3 text-base font-medium text-foreground/70 hover:text-[#DC2626] hover:bg-foreground/5 transition-colors duration-200 touch-manipulation"
              >
                My Account
              </a>
              <a
                href="https://creditfacility.teecherz.com"
                onClick={handleClick}
                className="block px-4 py-3 text-base font-medium text-foreground/70 hover:text-[#DC2626] hover:bg-foreground/5 transition-colors duration-200 touch-manipulation"
              >
                Credit Facility
              </a>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
