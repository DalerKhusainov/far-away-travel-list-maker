import {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { ListType, ListsType } from "../types/listType";
import { createListObj } from "../utils/helpers";

interface ListContextType {
  items: ListsType;
  countValue: number;
  setCountValue: Dispatch<SetStateAction<number>>;
  addItem: (item: string) => void;
  deleteItem: (id: string) => void;
  toggleCheckbox: (id: string) => void;
  updateItem: (id: string, item: string) => void;
}

export const ListContext = createContext<ListContextType | undefined>(
  undefined
);

interface ListProviderType {
  children: ReactNode;
}

export default function ListProvider({ children }: ListProviderType) {
  const [items, setItems] = useState<ListsType>([]);
  const [countValue, setCountValue] = useState<number>(1);

  function addItem(item: string) {
    const newItem = createListObj(item, countValue);
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
      selectedItem.completed = !selectedItem.completed;
      setItems([...copyItems]);
    }
  }

  function updateItem(id: string, item: string) {
    const copyItems = [...items];
    const selectedItem = copyItems.find((item) => item.id === id);
    if (selectedItem) {
      selectedItem.item = item;
      setItems([...copyItems]);
    }
  }

  return (
    <ListContext.Provider
      value={{
        items,
        countValue,
        addItem,
        deleteItem,
        toggleCheckbox,
        setCountValue,
        updateItem,
      }}
    >
      {children}
    </ListContext.Provider>
  );
}
