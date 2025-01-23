import { Save } from "lucide-react";

interface ItemUpdateProps {
  // id: string
  item: string;
  qty: number;
}

export default function ItemUpdate({ item, qty }: ItemUpdateProps) {
  return (
    <div className="flex justify-between items-center gap-2 mb-4 bg-primary/30 py-2 px-4 rounded-md shadow-lg h-[50px]">
      <div className="flex items-center justify-center gap-4">
        <input
          type="checkbox"
          //   defaultChecked={}
          //   onClick={}
        />
        <div className="text-lg space-x-2">
          <span>{qty}</span>
          <span>{item}</span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3">
        <button type="button">
          <Save size={18} />
        </button>
      </div>
    </div>
  );
}
