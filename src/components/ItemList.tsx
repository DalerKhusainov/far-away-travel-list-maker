import React, { useContext } from "react";
import { ListContext } from "../context/listContext";

export default function ItemList() {
  const listContext = useContext(ListContext);
  if (!listContext) return;
  console.log(listContext);

  return <div>ItemList</div>;
}
