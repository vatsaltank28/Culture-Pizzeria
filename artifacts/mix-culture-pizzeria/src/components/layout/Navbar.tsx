import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import logoImg from "@assets/image_1773667179411.png";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/visit", label: "Visit" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md shadow-sm py-3"
            : "bg-background/50 backdrop-blur-sm py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <img
                src={logoImg}
                alt="Mix Culture Pizzeria"
                className="h-12 sm:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 lg:px-4 py-2 rounded-full text-sm font-medium transition-colors hover-elevate ${
                    location === link.href
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right side: Theme toggle + CTA + Hamburger */}
            <div className="flex items-center gap-2 sm:gap-3">

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                className="relative w-14 h-7 rounded-full bg-muted border border-border transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 shrink-0"
              >
                {/* Track fill */}
                <span
                  className={`absolute inset-0 rounded-full transition-colors duration-300 ${
                    theme === "dark" ? "bg-foreground/20" : "bg-secondary/30"
                  }`}
                />
                {/* Sliding thumb */}
                <motion.span
                  layout
                  animate={{ x: theme === "dark" ? 28 : 2 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className={`absolute top-1 w-5 h-5 rounded-full flex items-center justify-center shadow-md transition-colors duration-300 ${
                    theme === "dark"
                      ? "bg-foreground text-background"
                      : "bg-secondary text-foreground"
                  }`}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {theme === "dark" ? (
                      <motion.span
                        key="moon"
                        initial={{ opacity: 0, rotate: -30, scale: 0.6 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 30, scale: 0.6 }}
                        transition={{ duration: 0.2 }}
                        className="absolute"
                      >
                        <Moon className="w-3 h-3" />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="sun"
                        initial={{ opacity: 0, rotate: 30, scale: 0.6 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: -30, scale: 0.6 }}
                        transition={{ duration: 0.2 }}
                        className="absolute"
                      >
                        <Sun className="w-3 h-3" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.span>
              </button>

              {/* Order Now CTA */}
              <Button
                asChild
                className="hidden sm:inline-flex rounded-full px-6 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover-elevate"
              >
                <Link href="/#order">Order Now</Link>
              </Button>

              {/* Hamburger (mobile) */}
              <button
                className="md:hidden p-2 text-foreground"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 20 }}
            className="fixed inset-0 z-[100] bg-background flex flex-col md:hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-border/50">
              <div className="flex items-center">
                <img
                  src={logoImg}
                  alt="Mix Culture Pizzeria"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="flex items-center gap-3">
                {/* Theme toggle inside mobile menu header */}
                <button
                  onClick={toggleTheme}
                  aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                  className="p-2 bg-muted rounded-full text-foreground hover:bg-muted/80 transition-colors"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {theme === "dark" ? (
                      <motion.span
                        key="moon-mob"
                        initial={{ opacity: 0, rotate: -30 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 30 }}
                        transition={{ duration: 0.2 }}
                        className="block"
                      >
                        <Moon className="w-5 h-5" />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="sun-mob"
                        initial={{ opacity: 0, rotate: 30 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: -30 }}
                        transition={{ duration: 0.2 }}
                        className="block"
                      >
                        <Sun className="w-5 h-5" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 bg-muted rounded-full text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <nav className="flex-1 flex flex-col justify-center px-6 py-8 gap-6 overflow-y-auto">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`block text-3xl font-display font-bold tracking-tight transition-colors ${
                      location === link.href ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="p-6 border-t border-border/50">
              <Button asChild size="lg" className="w-full rounded-xl text-lg h-14">
                <Link href="/#order">Order Now</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
