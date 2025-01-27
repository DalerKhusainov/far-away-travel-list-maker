import { useContext } from "react";
import { ListContext } from "../context/listContext";

export default function Footer() {
  const listContext = useContext(ListContext);
  if (!listContext) return;
  const { items } = listContext;

  if (!items) {
    return (
      <p>
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }

  const numItems = items.length;
  const numCompleted = items.filter((item) => item.completed).length;
  const percentage = Math.round((numCompleted / numItems) * 100);

  return (
    <footer className="flex items-center justify-center text-xl bg-tertiary h-[60px] fixed bottom-0 left-0 w-full">
      <em className="text-light">
        {percentage === 100
          ? "You got everything! Ready to go ✈"
          : `You have ${numItems} items on your list, and you already packed ${numCompleted} (${
              !percentage ? "0" : percentage
            }%)`}
      </em>
    </footer>
  );
}
