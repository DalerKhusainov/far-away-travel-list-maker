import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  btnColor: "dark" | "light";
  isDisabled?: boolean;
  onClickHandler?: () => void;
}

export default function Button({
  children,
  btnColor,
  onClickHandler,
  isDisabled,
}: ButtonProps) {
  return (
    <button
      className={`px-4 rounded-full uppercase font-semibold ${
        btnColor === "light" ? "bg-light text-dark" : "bg-tertiary text-light"
      } ${
        btnColor === "light"
          ? "disabled:bg-light/75"
          : "disabled:bg-tertiary/75"
      }`}
      onClick={onClickHandler}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
