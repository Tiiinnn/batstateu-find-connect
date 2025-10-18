import { useState } from "react";
import { Item } from "@/types/item";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Tag, Package, Building2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ItemCardProps {
  item: Item;
}

const ItemCard = ({ item }: ItemCardProps) => {
  const [showClaimDialog, setShowClaimDialog] = useState(false);
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

          {item.type === "lost" && item.designatedOffice && (
            <div className="flex items-start gap-2 pt-2 border-t border-border/50">
              <Building2 className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-xs font-medium text-muted-foreground">Return To:</span>
                <p className="text-sm font-medium">{item.designatedOffice}</p>
              </div>
            </div>
          )}

          {item.type === "found" && (
            <div className="pt-4">
              <Button 
                onClick={() => setShowClaimDialog(true)}
                className="w-full"
                size="sm"
              >
                Claim This Item
              </Button>
            </div>
          )}
        </div>
      </CardContent>

      {item.type === "found" && (
        <Dialog open={showClaimDialog} onOpenChange={setShowClaimDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Claim Item Instructions</DialogTitle>
              <DialogDescription>
                To claim this item, please follow these steps:
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <div className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Claim Location</h4>
                    <p className="text-sm text-muted-foreground">
                      [Admin will specify the office location]
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">What to Bring:</h4>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Valid Student ID</li>
                  <li>Proof of ownership (photos, receipts, etc.)</li>
                  <li>Be prepared to describe the item in detail</li>
                </ul>
              </div>

              <Button onClick={() => setShowClaimDialog(false)} className="w-full">
                Got it
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </Card>
  );
};

export default ItemCard;
