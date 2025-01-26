import { useContext, Fragment } from "react";
import { ListContext } from "../context/listContext";
import Item from "./Item";

export default function PackingList() {
  const listContext = useContext(ListContext);
  if (!listContext) return;
  const { items } = listContext;

  return (
    <div className="bg-accent text-light py-16 px-0 flex justify-between flex-col gap-12 items-center">
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 justify-center content-start w-[80%]">
        {items.map((item) => (
          <Fragment key={item.id}>
            <Item item={item} />
          </Fragment>
        ))}
      </ul>
    </div>
  );
}
