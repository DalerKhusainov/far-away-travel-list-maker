import { useState, useContext, FormEvent } from "react";
import { ListContext } from "../context/listContext";
import Selector from "./Selector";

export default function InputField() {
  const [inputValue, setInputValue] = useState<string>("");

  const listContext = useContext(ListContext);
  if (!listContext) return;
  const { addItem, countValue, setCountValue } = listContext;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      addItem(inputValue);
      setInputValue("");
      setCountValue(1);
    }
  }

  return (
    <div className="bg-secondary sm:flex-row flex flex-col justify-center gap-x-4 items-center py-4">
      <h3 className="text-lg font-medium mb-4 sm:mb-0 text-dark">
        What do you need for your trip?
      </h3>
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <Selector
          countValue={countValue}
          setCountValue={setCountValue}
          size={"lg"}
        />
        <input
          type="text"
          placeholder={"Item..."}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="bg-inputColor py-1 pl-6 rounded-2xl focus:outline-none focus:border-accent focus:ring focus:ring-accent placeholder:text-accent"
        />
        <button
          type="button"
          disabled={!inputValue}
          className="bg-tertiary py-1 px-4 rounded-2xl uppercase font-medium text-dark disabled:bg-tertiary/70"
        >
          Add
        </button>
      </form>
    </div>
  );
}
