"use client";

import Container from "../ui/Container";
import Logo from "../ui/Logo";

export default function Header() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <nav className="hidden items-center space-x-6 lg:space-x-8 md:flex">
            <a
              href="/?product_cat=bedroom-furniture"
              onClick={handleClick}
              className="nav-link-uppercase relative text-foreground/80 transition-all duration-500 ease-out hover:text-[#DC2626] hover:scale-105 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#DC2626] after:transition-all after:duration-500 after:ease-out hover:after:w-full"
            >
              Bedroom
            </a>
            <a
              href="/product-category/living-room"
              onClick={handleClick}
              className="nav-link-uppercase relative text-foreground/80 transition-all duration-500 ease-out hover:text-[#DC2626] hover:scale-105 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#DC2626] after:transition-all after:duration-500 after:ease-out hover:after:w-full"
            >
              Living Room
            </a>
            <a
              href="/?product_cat=dining-room-furniture"
              onClick={handleClick}
              className="nav-link-uppercase relative text-foreground/80 transition-all duration-500 ease-out hover:text-[#DC2626] hover:scale-105 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#DC2626] after:transition-all after:duration-500 after:ease-out hover:after:w-full"
            >
              Dining
            </a>
            <a
              href="/?product_cat=electronics"
              onClick={handleClick}
              className="nav-link-uppercase relative text-foreground/80 transition-all duration-500 ease-out hover:text-[#DC2626] hover:scale-105 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#DC2626] after:transition-all after:duration-500 after:ease-out hover:after:w-full"
            >
              Electronics
            </a>
            <a
              href="/?product_cat=kitchen-appliances"
              onClick={handleClick}
              className="nav-link-uppercase relative text-foreground/80 transition-all duration-500 ease-out hover:text-[#DC2626] hover:scale-105 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#DC2626] after:transition-all after:duration-500 after:ease-out hover:after:w-full"
            >
              Kitchen
            </a>
            <a
              href="/?product_cat=office-furniture"
              onClick={handleClick}
              className="nav-link-uppercase relative text-foreground/80 transition-all duration-500 ease-out hover:text-[#DC2626] hover:scale-105 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#DC2626] after:transition-all after:duration-500 after:ease-out hover:after:w-full"
            >
              Office
            </a>
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
              className="md:hidden"
              aria-label="Toggle menu"
              type="button"
            >
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
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
