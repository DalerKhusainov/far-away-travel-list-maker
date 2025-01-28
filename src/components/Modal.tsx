import { ReactNode } from "react";
import { X } from "lucide-react";

interface ModalProps {
  children: ReactNode;
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ setToggleModal, children }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000] bg-opacity-25 backdrop-blur-sm">
      <div className="min-w-[400px] relative bg-light flex rounded-md shadow-lg p-10 flex-col items-center justify-center">
        <button
          type="button"
          className="absolute p-1 transition-colors ease-in-out rounded-full -top-10 text-slate-100 -right-10 hover:text-slate-300"
          onClick={() => setToggleModal(false)}
        >
          <X />
        </button>
        <div className="space-y-4">{children}</div>
      </div>
    </div>
  );
}
