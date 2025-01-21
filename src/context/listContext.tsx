import { useState, createContext, ReactNode } from "react";
import { ListType, ListsType } from "../types/listType";
import { createListObj } from "../utils/helpers";

interface ListContextType {
  items: ListType;
}

export const ListContext = createContext<ListContextType | undefined>(
  undefined
);

interface ListProviderType {
  children: ReactNode;
}

export default function ListProvider({ children }: ListProviderType) {
  const items = createListObj("List 1", 2);

  return (
    <ListContext.Provider value={{ items }}>{children}</ListContext.Provider>
  );
}
