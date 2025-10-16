import { Item } from "@/types/item";

const STORAGE_KEY = "batstateu_lostandfound_items";

export const getItems = (): Item[] => {
  try {
    const items = localStorage.getItem(STORAGE_KEY);
    return items ? JSON.parse(items) : [];
  } catch (error) {
    console.error("Error reading items from storage:", error);
    return [];
  }
};

export const saveItem = (item: Item): void => {
  try {
    const items = getItems();
    items.push(item);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    console.error("Error saving item to storage:", error);
    throw new Error("Failed to save item");
  }
};

export const updateItemStatus = (id: string, status: Item["status"]): void => {
  try {
    const items = getItems();
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, status } : item
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedItems));
  } catch (error) {
    console.error("Error updating item status:", error);
    throw new Error("Failed to update item status");
  }
};

export const getLostItems = (): Item[] => {
  return getItems().filter((item) => item.type === "lost");
};

export const getFoundItems = (): Item[] => {
  return getItems().filter((item) => item.type === "found");
};

export const searchItems = (query: string, type?: "lost" | "found"): Item[] => {
  const items = type ? (type === "lost" ? getLostItems() : getFoundItems()) : getItems();
  const lowerQuery = query.toLowerCase();
  
  return items.filter(
    (item) =>
      item.description.toLowerCase().includes(lowerQuery) ||
      item.category.toLowerCase().includes(lowerQuery) ||
      item.brand?.toLowerCase().includes(lowerQuery) ||
      item.color?.toLowerCase().includes(lowerQuery) ||
      item.location.toLowerCase().includes(lowerQuery)
  );
};
