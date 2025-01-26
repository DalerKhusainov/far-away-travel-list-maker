import {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { ListsType } from "../types/listType";
import { createListObj } from "../utils/helpers";

interface ListContextType {
  items: ListsType;
  countValue: number;
  setCountValue: Dispatch<SetStateAction<number>>;
  addItem: (item: string) => void;
  deleteItem: (id: string) => void;
  toggleCheckbox: (id: string) => void;
  updateItem: (id: string, item: string, qty: number) => void;
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
    setItems((items) => [...items, newItem]);
  }

  function deleteItem(id: string) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function toggleCheckbox(id: string) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  function updateItem(id: string, item: string, qty: number) {
    setItems((items) =>
      items.map((el) => (el.id === id ? { ...el, item, qty } : el))
    );
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
