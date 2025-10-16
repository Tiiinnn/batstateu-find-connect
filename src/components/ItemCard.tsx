import { Item } from "@/types/item";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, User, Tag } from "lucide-react";

interface ItemCardProps {
  item: Item;
}

const ItemCard = ({ item }: ItemCardProps) => {
  const statusColors = {
    pending: "bg-yellow-500",
    claimed: "bg-blue-500",
    returned: "bg-green-500",
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{item.category}</CardTitle>
          <Badge className={statusColors[item.status]}>
            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground line-clamp-2">
            {item.description}
          </p>
          
          <div className="grid grid-cols-1 gap-2 text-sm">
            {item.brand && (
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4 text-muted-foreground" />
                <span><strong>Brand:</strong> {item.brand}</span>
              </div>
            )}
            
            {item.color && (
              <div className="flex items-center gap-2">
                <div 
                  className="h-4 w-4 rounded-full border border-border" 
                  style={{ backgroundColor: item.color }}
                />
                <span><strong>Color:</strong> {item.color}</span>
              </div>
            )}
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{new Date(item.date).toLocaleDateString()}</span>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{item.location}</span>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <User className="h-4 w-4" />
              <span>{item.fullName}</span>
            </div>
          </div>
          
          <div className="pt-2 border-t">
            <p className="text-xs text-muted-foreground">
              Contact: {item.contactInfo}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
