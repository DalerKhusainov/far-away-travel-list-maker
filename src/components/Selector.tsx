import { Dispatch, SetStateAction, ChangeEvent } from "react";

interface SelectorProps {
  countValue: number;
  setCountValue: Dispatch<SetStateAction<number>>;
  size: "md" | "lg";
}

export default function Selector({
  countValue,
  setCountValue,
  size,
}: SelectorProps) {
  function onSelectHandler(e: ChangeEvent<HTMLSelectElement>) {
    setCountValue(Number(e.target.value));
  }

  return (
    <div>
      <select
        name=""
        id=""
        value={countValue}
        onChange={onSelectHandler}
        className={`bg-inputColor text-dark rounded-2xl h-full px-${
          size === "md" ? "2" : "4"
        }`}
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
    </div>
  );
}
