import { useState, createContext, ReactNode } from "react";
import { ListType, ListsType } from "../types/listType";
import { createListObj } from "../utils/helpers";

interface ListContextType {
  items: ListsType;
  addItem: (item: string, qty: number) => void;
  deleteItem: (id: string) => void;
  toggleCheckbox: (id: string) => void;
}

export const ListContext = createContext<ListContextType | undefined>(
  undefined
);

interface ListProviderType {
  children: ReactNode;
}

export default function ListProvider({ children }: ListProviderType) {
  const [items, setItems] = useState<ListsType>([]);

  function addItem(item: string, qty: number) {
    const newItem = createListObj(item, qty);
    setItems([...items, newItem]);
  }

  function deleteItem(id: string) {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems([...filteredItems]);
  }

  function toggleCheckbox(id: string) {
    const copyItems = [...items];
    const selectedItem = copyItems.find((item) => item.id === id);
    if (selectedItem) {
      selectedItem.completed = !selectedItem;
      setItems([...copyItems]);
    }
  }

  return (
    <ListContext.Provider
      value={{ items, addItem, deleteItem, toggleCheckbox }}
    >
      {children}
    </ListContext.Provider>
  );
}
