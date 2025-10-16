import { Link, useLocation } from "react-router-dom";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

interface NavigationProps {
  onSearch?: (query: string) => void;
}

const Navigation = ({ onSearch }: NavigationProps) => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/lost-items", label: "Lost Items" },
    { href: "/found-items", label: "Found Items" },
    { href: "/report-lost", label: "Report Lost" },
    { href: "/report-found", label: "Report Found" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  const NavLinks = ({ mobile = false }) => (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          onClick={() => mobile && setIsOpen(false)}
          className={`${
            location.pathname === link.href
              ? "text-primary font-semibold"
              : "text-foreground/80 hover:text-primary"
          } transition-colors ${mobile ? "block py-2" : ""}`}
        >
          {link.label}
        </Link>
      ))}
    </>
  );

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

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center gap-2">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </form>

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
                <form onSubmit={handleSearch} className="mt-4">
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Search items..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                </form>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
