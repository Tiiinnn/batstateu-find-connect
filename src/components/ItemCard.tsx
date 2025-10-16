import { Item } from "@/types/item";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Tag, Package } from "lucide-react";
import ContactDialog from "./ContactDialog";

interface ItemCardProps {
  item: Item;
}

const ItemCard = ({ item }: ItemCardProps) => {
  const statusColors = {
    pending: "default",
    claimed: "secondary",
    returned: "outline",
  };

  const statusVariant = statusColors[item.status] as "default" | "secondary" | "outline";

  return (
    <Card className="hover:shadow-lg hover:border-primary/50 transition-all duration-300 overflow-hidden group">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start gap-3">
          <div className="flex items-start gap-2 flex-1">
            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Package className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-lg leading-tight">{item.category}</CardTitle>
              <p className="text-xs text-muted-foreground mt-1">
                {item.type === "lost" ? "Lost Item" : "Found Item"}
              </p>
            </div>
          </div>
          <Badge variant={statusVariant} className="shrink-0">
            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-foreground/80 line-clamp-2 min-h-[2.5rem]">
          {item.description}
        </p>
        
        <div className="grid grid-cols-1 gap-2.5 text-sm">
          {item.brand && (
            <div className="flex items-center gap-2.5 p-2 rounded-md bg-muted/50">
              <Tag className="h-4 w-4 text-muted-foreground shrink-0" />
              <div className="flex-1 min-w-0">
                <span className="text-xs text-muted-foreground block">Brand</span>
                <span className="font-medium truncate block">{item.brand}</span>
              </div>
            </div>
          )}
          
          {item.color && (
            <div className="flex items-center gap-2.5 p-2 rounded-md bg-muted/50">
              <div 
                className="h-4 w-4 rounded-full border-2 border-border shrink-0" 
                style={{ backgroundColor: item.color }}
              />
              <div className="flex-1 min-w-0">
                <span className="text-xs text-muted-foreground block">Color</span>
                <span className="font-medium truncate block">{item.color}</span>
              </div>
            </div>
          )}
          
          <div className="flex items-center gap-2.5 p-2 rounded-md bg-muted/50">
            <Calendar className="h-4 w-4 text-muted-foreground shrink-0" />
            <div className="flex-1 min-w-0">
              <span className="text-xs text-muted-foreground block">Date</span>
              <span className="font-medium truncate block">{new Date(item.date).toLocaleDateString()}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2.5 p-2 rounded-md bg-muted/50">
            <MapPin className="h-4 w-4 text-muted-foreground shrink-0" />
            <div className="flex-1 min-w-0">
              <span className="text-xs text-muted-foreground block">Location</span>
              <span className="font-medium truncate block">{item.location}</span>
            </div>
          </div>
        </div>
        
        <div className="pt-3 border-t">
          <ContactDialog item={item} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
