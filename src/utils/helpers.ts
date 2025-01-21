import { ListType } from "../types/listType";
import { nanoid } from "nanoid";

export function createListObj(item: string, qty: number): ListType {
  return {
    id: nanoid(),
    item,
    qty,
    completed: false,
    createdAt: new Date().toDateString(),
  };
}
