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
  countValue: number | string;
  setCountValue: Dispatch<SetStateAction<number | string>>;
  sortBy: string | number;
  setSortBy: Dispatch<SetStateAction<number | string>>;
  sortedItems: ListsType | undefined;
  addItem: (item: string) => void;
  deleteItem: (id: string) => void;
  toggleCheckbox: (id: string) => void;
  updateItem: (id: string, item: string, qty: number) => void;
  clearAllItems: () => void;
}

export const ListContext = createContext<ListContextType | undefined>(
  undefined
);

const ItemListKey =  "MY_TRAVEL_LIST"

interface ListProviderType {
  children: ReactNode;
}

export default function ListProvider({ children }: ListProviderType) {
  const [items, setItems] = useState<ListsType>([]);
  const [countValue, setCountValue] = useState<number | string>(1);
  const [sortBy, setSortBy] = useState<string | number>("sort by input order");

  function setToLocaleStorage(items: ListsType) {
    localStorage.setItem(ItemListKey, JSON.stringify(items))
  }

  function getFromLocaleStorage() {
    const items = localStorage.getItem(ItemListKey)
    if (items === null) return null

    try {
      return JSON.parse(items)
    } catch (error) {
      return items
    }
  }

  let sortedItems;

  const sortedByInput = items;

  const sortedByDescription = items
    .slice()
    .sort((a, b) => a.item.localeCompare(b.item));

  const sortedByPacked = items
    .slice()
    .sort((a, b) => Number(a.completed) - Number(b.completed));

  if (sortBy === "sort by input order") {
    sortedItems = sortedByInput;
  }

  if (sortBy === "sort by description") {
    sortedItems = sortedByDescription;
  }

  if (sortBy === "sort by packed status") {
    sortedItems = sortedByPacked;
  }

  function addItem(item: string) {
    // OR
    // const newItem = { item, qty: countValue, completed: false, id: nanoid() }
    ////////////////////////////////////////
    const newItem = createListObj(item, Number(countValue));
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

  function clearAllItems() {
    setItems([]);
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
        setSortBy,
        sortBy,
        sortedItems,
        clearAllItems,
      }}
    >
      {children}
    </ListContext.Provider>
  );
}
