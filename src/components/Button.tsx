import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  bgColor: "dark" | "light";
  onClickHandler?: () => void;
}

export default function Button({
  children,
  bgColor,
  onClickHandler,
}: ButtonProps) {
  return (
    <button
      className={`bg-${bgColor} px-4 rounded-full uppercase font-semibold`}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}
