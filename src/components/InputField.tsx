import { useState, useContext } from "react";
import { ListContext } from "../context/listContext";
import Selector from "./Selector";

export default function InputField() {
  const [inputValue, setInputValue] = useState<string>("Items...");

  const listContext = useContext(ListContext);
  if (!listContext) return;
  const { addItem, countValue, setCountValue } = listContext;

  return (
    <div className="bg-secondary sm:flex-row flex flex-col justify-center gap-x-4 items-center py-4">
      <h3 className="text-lg font-medium mb-4 sm:mb-0 text-dark">
        What do you need for your trip?
      </h3>
      <div className="flex gap-2">
        <Selector
          countValue={countValue}
          setCountValue={setCountValue}
          size={"lg"}
        />
        <input
          type="text"
          placeholder="Items..."
          onChange={(e) => setInputValue(e.target.value)}
          className="bg-inputColor py-1 pl-6 rounded-2xl focus:outline-none focus:border-accent focus:ring focus:ring-accent placeholder:text-accent"
        />
        <button
          type="button"
          disabled={!inputValue}
          onClick={() => addItem(inputValue)}
          className="bg-tertiary py-1 px-4 rounded-2xl uppercase font-medium text-dark disabled:bg-tertiary/70"
        >
          Add
        </button>
      </div>
    </div>
  );
}
