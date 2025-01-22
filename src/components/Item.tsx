import { useContext } from "react";
import { Trash2, Pencil } from "lucide-react";
import { ListContext } from "../context/listContext";

interface ItemProps {
  id: string;
  item: string;
  qty: number;
  completed: boolean;
  createdAt: string;
}

export default function Item({
  item,
  completed,
  qty,
  createdAt,
  id,
}: ItemProps) {
  const listContext = useContext(ListContext);
  if (!listContext) return;
  const { deleteItem, toggleCheckbox } = listContext;

  console.log(completed);

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
        <button type="button">
          <Pencil size={18} />
        </button>
      </div>
    </div>
  );
}
