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
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
    </div>
  );
}
