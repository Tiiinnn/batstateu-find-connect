export interface Item {
  id: string;
  type: "lost" | "found";
  fullName: string;
  contactInfo: string;
  description: string;
  category: string;
  brand?: string;
  color?: string;
  date: string;
  location: string;
  idPhoto: string;
  status: "pending" | "claimed" | "returned";
  createdAt: string;
}

export interface ItemFormData {
  fullName: string;
  contactInfo: string;
  description: string;
  category: string;
  brand?: string;
  color?: string;
  date: string;
  location: string;
  idPhoto: File | null;
}
