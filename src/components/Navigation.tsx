import { Link, useLocation } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const simpleLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const reportLinks = [
    { href: "/report-lost", label: "Report Lost Item" },
    { href: "/report-found", label: "Report Found Item" },
  ];

  const itemsLinks = [
    { href: "/lost-items", label: "Lost Items" },
    { href: "/found-items", label: "Found Items" },
  ];


  const NavLinks = ({ mobile = false }) => {
    if (mobile) {
      return (
        <>
          {simpleLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={`${
                location.pathname === link.href
                  ? "text-primary font-semibold"
                  : "text-foreground/80 hover:text-primary"
              } transition-colors block py-2`}
            >
              {link.label}
            </Link>
          ))}
          <div className="py-2">
            <div className="text-sm font-medium text-foreground/60 mb-2">Report</div>
            {reportLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`${
                  location.pathname === link.href
                    ? "text-primary font-semibold"
                    : "text-foreground/80 hover:text-primary"
                } transition-colors block py-2 pl-4`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="py-2">
            <div className="text-sm font-medium text-foreground/60 mb-2">Browse</div>
            {itemsLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`${
                  location.pathname === link.href
                    ? "text-primary font-semibold"
                    : "text-foreground/80 hover:text-primary"
                } transition-colors block py-2 pl-4`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </>
      );
    }

    return (
      <>
        {simpleLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className={`${
              location.pathname === link.href
                ? "text-primary font-semibold"
                : "text-foreground/80 hover:text-primary"
            } transition-colors`}
          >
            {link.label}
          </Link>
        ))}
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors">
              Report
              <ChevronDown className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="bg-card">
            {reportLinks.map((link) => (
              <DropdownMenuItem key={link.href} asChild>
                <Link
                  to={link.href}
                  className={`${
                    location.pathname === link.href
                      ? "text-primary font-semibold"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors">
              Browse Items
              <ChevronDown className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="bg-card">
            {itemsLinks.map((link) => (
              <DropdownMenuItem key={link.href} asChild>
                <Link
                  to={link.href}
                  className={`${
                    location.pathname === link.href
                      ? "text-primary font-semibold"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    );
  };

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl shadow-md">
              B
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-primary leading-tight">BatStateU</div>
              <div className="text-xs text-muted-foreground leading-tight">Lost & Found</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <NavLinks />
          </div>


          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-4 mt-8">
                <NavLinks mobile />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
