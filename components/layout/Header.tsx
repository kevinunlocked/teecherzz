import Link from "next/link";
import Container from "../ui/Container";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-foreground">Teecherz</span>
          </Link>

          <nav className="hidden items-center space-x-8 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/courses"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              Courses
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </nav>

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
