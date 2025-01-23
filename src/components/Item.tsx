import { useContext, Dispatch, SetStateAction, useState } from "react";
import { Trash2, Pencil, Save } from "lucide-react";
import { ListContext } from "../context/listContext";
import { ListType } from "../types/listType";
import Selector from "./Selector";
interface ItemProps {
  item: ListType;
}

export default function Item({ item }: ItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  console.log(isOpen);

  const listContext = useContext(ListContext);
  if (!listContext) return;
  const { deleteItem, toggleCheckbox } = listContext;

  return (
    <>
      {!isOpen && (
        <ItemCard
          itemObj={item}
          toggleCheckbox={toggleCheckbox}
          deleteItem={deleteItem}
          setIsOpen={setIsOpen}
        />
      )}
      {isOpen && <ItemUpdate itemObj={item} setIsOpen={setIsOpen} />}
    </>
  );
}

interface ItemUpdateProps {
  itemObj: ListType;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  // setCountValue: Dispatch<SetStateAction<number>>;
}

function ItemUpdate({ itemObj, setIsOpen }: ItemUpdateProps) {
  const { qty, item } = itemObj;
  const [updatedItem, setUpdatedItem] = useState<string>(item);
  const [updatedCountValue, setUpdatedCountValue] = useState<number>(qty);

  return (
    <div className="flex justify-between items-center gap-2 mb-4 bg-primary/30 py-2 px-4 rounded-md shadow-lg h-[50px]">
      <div className="flex items-center justify-center text-lg space-x-4">
        <Selector
          countValue={qty}
          setCountValue={setUpdatedCountValue}
          size={"md"}
        />
        <input
          type="text"
          defaultValue={updatedItem}
          className="bg-primary/20 text-light w-full"
        />
      </div>
      <div className="flex justify-center items-center">
        <button type="button" onClick={() => setIsOpen((prev) => !prev)}>
          <Save size={18} />
        </button>
      </div>
    </div>
  );
}

interface ItemCardProps {
  itemObj: ListType;
  toggleCheckbox: (id: string) => void;
  deleteItem: (id: string) => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function ItemCard({
  itemObj,
  toggleCheckbox,
  deleteItem,
  setIsOpen,
}: ItemCardProps) {
  const { completed, qty, item, id } = itemObj;

  return (
    <div className="flex justify-between items-center gap-2 mb-4 bg-primary/30 py-2 px-4 rounded-md shadow-lg h-[50px]">
      <div className="flex items-center justify-center gap-4">
        <input
          type="checkbox"
          defaultChecked={completed}
          onClick={() => toggleCheckbox(id)}
        />
        <div className="text-lg space-x-2">
          <span>{qty}</span>
          <span>{item}</span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3">
        <button type="button" onClick={() => deleteItem(id)}>
          <Trash2 size={18} />
        </button>
        <button type="button" onClick={() => setIsOpen((prev) => !prev)}>
          <Pencil size={18} />
        </button>
      </div>
    </div>
  );
}
