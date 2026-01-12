import Link from "next/link";
import Container from "../ui/Container";
import Logo from "../ui/Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <nav className="hidden items-center space-x-6 lg:space-x-8 md:flex">
            <Link
              href="/?product_cat=bedroom-furniture"
              className="nav-link-uppercase text-foreground/80 transition-colors hover:text-[#DC2626]"
            >
              Bedroom
            </Link>
            <Link
              href="/product-category/living-room"
              className="nav-link-uppercase text-foreground/80 transition-colors hover:text-[#DC2626]"
            >
              Living Room
            </Link>
            <Link
              href="/?product_cat=dining-room-furniture"
              className="nav-link-uppercase text-foreground/80 transition-colors hover:text-[#DC2626]"
            >
              Dining
            </Link>
            <Link
              href="/?product_cat=electronics"
              className="nav-link-uppercase text-foreground/80 transition-colors hover:text-[#DC2626]"
            >
              Electronics
            </Link>
            <Link
              href="/?product_cat=kitchen-appliances"
              className="nav-link-uppercase text-foreground/80 transition-colors hover:text-[#DC2626]"
            >
              Kitchen
            </Link>
            <Link
              href="/?product_cat=office-furniture"
              className="nav-link-uppercase text-foreground/80 transition-colors hover:text-[#DC2626]"
            >
              Office
            </Link>
          </nav>

          <div className="hidden items-center space-x-4 md:flex">
            <Link
              href="/my-account"
              className="nav-link text-foreground/70 transition-colors hover:text-[#DC2626]"
            >
              My Account
            </Link>
            <Link
              href="https://creditfacility.teecherz.com"
              className="nav-link text-foreground/70 transition-colors hover:text-[#DC2626]"
            >
              Credit Facility
            </Link>
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
