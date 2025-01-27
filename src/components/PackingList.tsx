import { useContext, Fragment } from "react";
import { ListContext } from "../context/listContext";
import Item from "./Item";
import Selector from "./Selector";
import Button from "./Button";

export default function PackingList() {
  const listContext = useContext(ListContext);
  if (!listContext) return;
  const { setSortBy, sortBy, sortedItems, clearAllItems } = listContext;

  const selectOption = [
    "sort by input order",
    "sort by description",
    "sort by packed status",
  ];

  return (
    <div className="bg-accent text-light py-16 px-0 flex justify-between flex-col gap-12 items-center">
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 justify-center content-start w-[80%]">
        {sortedItems?.map((item) => (
          <Fragment key={item.id}>
            <Item item={item} />
          </Fragment>
        ))}
      </ul>
      <div className="text-dark flex items-center gap-4 mb-4">
        <Selector
          selectValue={sortBy}
          setValue={setSortBy}
          size={"lg"}
          optionValue={selectOption}
        />
        <Button bgColor={"light"} onClickHandler={clearAllItems}>
          Clear
        </Button>
      </div>
    </div>
  );
}
