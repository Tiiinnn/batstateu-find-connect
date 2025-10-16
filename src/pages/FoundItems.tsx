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
      
      <main className="flex-1 py-12 px-4 bg-background">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Found Items</h1>
            <p className="text-muted-foreground">
              Check if someone has found and reported your lost item
            </p>
          </div>

          <div className="mb-6">
            <div className="relative max-w-md">
              <Input
                type="text"
                placeholder="Search found items..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {searchQuery ? "No items found matching your search" : "No found items reported yet"}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FoundItems;
