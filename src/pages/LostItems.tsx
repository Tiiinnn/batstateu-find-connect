import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ItemCard from "@/components/ItemCard";
import { getLostItems } from "@/utils/storage";
import { Item } from "@/types/item";
import { Package } from "lucide-react";

const LostItems = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const lostItems = getLostItems();
    setItems(lostItems);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-12 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto">
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Lost Items
            </h1>
            <p className="text-muted-foreground text-lg">
              Browse through items reported as lost by our community members
            </p>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No lost items reported yet</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                When someone reports a lost item, it will appear here
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

export default LostItems;
