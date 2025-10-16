import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ItemCard from "@/components/ItemCard";
import { Input } from "@/components/ui/input";
import { getFoundItems, searchItems } from "@/utils/storage";
import { Item } from "@/types/item";
import { Search } from "lucide-react";

const FoundItems = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = () => {
    const foundItems = getFoundItems();
    setItems(foundItems);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = searchItems(query, "found");
      setItems(results);
    } else {
      loadItems();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation onSearch={handleSearch} />
      
      <main className="flex-1 py-12 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto">
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Found Items
            </h1>
            <p className="text-muted-foreground text-lg">
              Check if someone has found and reported your lost item
            </p>
          </div>

          <div className="mb-8">
            <div className="relative max-w-2xl">
              <Input
                type="text"
                placeholder="Search by description, category, brand, color, or location..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-12 h-12 text-base shadow-sm"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
            {searchQuery && (
              <p className="mt-3 text-sm text-muted-foreground">
                Showing results for: <span className="font-semibold text-foreground">"{searchQuery}"</span>
              </p>
            )}
          </div>

          {items.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {searchQuery ? "No matching items found" : "No found items reported yet"}
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                {searchQuery 
                  ? "Try adjusting your search terms or browse all items" 
                  : "When someone reports a found item, it will appear here"}
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <p className="text-sm text-muted-foreground">
                  Found <span className="font-semibold text-foreground">{items.length}</span> {items.length === 1 ? 'item' : 'items'}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                  <ItemCard key={item.id} item={item} />
                ))}
              </div>
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FoundItems;
