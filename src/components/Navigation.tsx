import { NavLink } from "@/components/NavLink";
import { Menu, X, Music } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Startseite" },
    { to: "/biografie", label: "Biografie" },
    { to: "/discografie", label: "Discografie" },
    { to: "/kontakt", label: "Kontakt" },
    { to: "/impressum", label: "Impressum" },
    { to: "/admin", label: "Admin" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
              <Music className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-playfair font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Steven Petersen
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className="text-foreground hover:text-primary transition-colors relative group"
                activeClassName="text-primary font-medium"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300"></span>
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-slide-up">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className="block py-3 text-foreground hover:text-primary transition-colors"
                activeClassName="text-primary font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
