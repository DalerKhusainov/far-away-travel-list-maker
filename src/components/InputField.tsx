import { useState, ChangeEvent } from "react";
import { createListObj } from "../utils/helpers";

export default function InputField() {
  const [countValue, setCountValue] = useState<number>(1);
  const [inputValue, setInputValue] = useState<string>("Items...");

  function onSelectHandler(e: ChangeEvent<HTMLSelectElement>) {
    setCountValue(Number(e.target.value));
  }

  function addItemHandler() {
    const data = createListObj(inputValue, countValue);
    console.log(data);
  }

  return (
    <div className="bg-secondary sm:flex-row flex flex-col justify-center gap-x-4 items-center py-4">
      <h3 className="text-lg font-medium mb-4 sm:mb-0 text-dark">
        What do you need for your trip?
      </h3>
      <div className="flex gap-2">
        <select
          name=""
          id=""
          value={countValue}
          onChange={onSelectHandler}
          className="bg-inputColor rounded-2xl px-4"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <input
          type="text"
          placeholder="Items..."
          onChange={(e) => setInputValue(e.target.value)}
          className="bg-inputColor py-1 pl-6 rounded-2xl focus:outline-none focus:border-accent focus:ring focus:ring-accent placeholder:text-accent"
        />
        <button
          type="button"
          disabled={!inputValue}
          onClick={addItemHandler}
          className="bg-tertiary py-1 px-4 rounded-2xl uppercase font-medium text-dark disabled:bg-tertiary/70"
        >
          Add
        </button>
      </div>
    </div>
  );
}
