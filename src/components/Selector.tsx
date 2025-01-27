import { Dispatch, SetStateAction, ChangeEvent } from "react";

interface SelectorProps {
  selectValue: number | string;
  setValue: Dispatch<SetStateAction<number | string>>;
  size: "md" | "lg";
  optionValue: number[] | string[];
}

export default function Selector({
  selectValue,
  setValue,
  size,
  optionValue,
}: SelectorProps) {
  function onSelectHandler(e: ChangeEvent<HTMLSelectElement>) {
    setValue(e.target.value);
  }

  return (
    <div>
      <select
        name=""
        id=""
        value={selectValue}
        onChange={onSelectHandler}
        className={`bg-inputColor uppercase text-dark font-semibold rounded-2xl h-full px-${
          size === "md" ? "2" : "4"
        }`}
      >
        {optionValue.map((el) => (
          <option value={el} key={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
}
