import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { ItemFormData, Item } from "@/types/item";
import { saveItem } from "@/utils/storage";


interface ItemFormProps {
  type: "lost" | "found";
}

const ItemForm = ({ type }: ItemFormProps) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ItemFormData>({
    fullName: "",
    srCode: "",
    contactInfo: "",
    description: "",
    category: "",
    brand: "",
    color: "",
    date: "",
    location: "",
  });

  const categories = [
    "Electronics",
    "Documents/IDs",
    "Bags/Wallets",
    "Clothing",
    "Keys",
    "Books/Notebooks",
    "Accessories",
    "Others"
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.srCode || !formData.contactInfo || !formData.description || 
        !formData.category || !formData.date || !formData.location) {
      toast.error("Please fill in all required fields");
      return;
    }

    const newItem: Item = {
      id: Date.now().toString(),
      type,
      fullName: formData.fullName,
      srCode: formData.srCode,
      contactInfo: formData.contactInfo,
      description: formData.description,
      category: formData.category,
      brand: formData.brand,
      color: formData.color,
      date: formData.date,
      location: formData.location,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    try {
      saveItem(newItem);
      toast.success(`${type === "lost" ? "Lost" : "Found"} item reported successfully!`);
      navigate(type === "lost" ? "/lost-items" : "/found-items");
    } catch (error) {
      toast.error("Failed to submit report. Please try again.");
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">
          Report {type === "lost" ? "Lost" : "Found"} Item
        </CardTitle>
        <CardDescription>
          Please provide as much detail as possible to help {type === "lost" ? "recover" : "return"} the item
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="srCode">SR-Code (Student ID Number) *</Label>
            <Input
              id="srCode"
              name="srCode"
              value={formData.srCode}
              onChange={handleInputChange}
              placeholder="e.g., 20-12345"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactInfo">Email Address / Contact Number *</Label>
            <Input
              id="contactInfo"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleInputChange}
              placeholder="email@example.com or +63 123 456 7890"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Item Category *</Label>
            <Select
              value={formData.category}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, category: value }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="brand">Brand (Optional)</Label>
              <Input
                id="brand"
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
                placeholder="e.g., Samsung, Nike"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="color">Color (Optional)</Label>
              <Input
                id="color"
                name="color"
                value={formData.color}
                onChange={handleInputChange}
                placeholder="e.g., Black, Red"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Provide detailed description including identifying marks, scratches, engravings, etc."
              rows={4}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date {type === "lost" ? "Lost" : "Found"} *</Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleInputChange}
                max={new Date().toISOString().split('T')[0]}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location *</Label>
              <Input
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="e.g., Library, Cafeteria"
                required
              />
            </div>
          </div>


          <Button type="submit" className="w-full" size="lg">
            Submit Report
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ItemForm;
