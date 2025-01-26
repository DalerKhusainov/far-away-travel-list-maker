import { Dispatch, SetStateAction, ChangeEvent } from "react";

interface SelectorProps {
  countValue: number;
  setCountValue: Dispatch<SetStateAction<number>>;
  size: "md" | "lg";
  optionValue: number[] | string[];
}

export default function Selector({
  countValue,
  setCountValue,
  size,
  optionValue,
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
        {optionValue.map((el) => (
          <option value={el} key={el}>
            {el}
          </option>
        ))}
        {/* {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))} */}
      </select>
    </div>
  );
}
