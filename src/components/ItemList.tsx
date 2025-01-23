import { useContext, useState, Fragment } from "react";
import { ListContext } from "../context/listContext";
import Item from "./Item";

export default function ItemList() {
  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  const listContext = useContext(ListContext);
  if (!listContext) return;
  const { items } = listContext;

  return (
    <div className="sm:px-20 px-5 py-5 grid sm:grid-cols-3 grid-cols-1 gap-8 min-h-screen bg-accent text-light">
      <>
        {items.map((item) => (
          <Fragment key={item.id}>
            <Item item={item} />
          </Fragment>
        ))}
      </>
    </div>
  );
}
