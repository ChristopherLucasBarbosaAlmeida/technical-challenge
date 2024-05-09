import { DialogHTMLAttributes, forwardRef } from "react";
import { X } from "lucide-react";
import { gray } from "tailwindcss/colors";

type ModalProps = {
  title?: string;
  handleClickCloseModal: () => void;
} & DialogHTMLAttributes<HTMLDialogElement>;

export const Modal = forwardRef<HTMLDialogElement, ModalProps>(
  ({ title, handleClickCloseModal, children, open = false, ...rest }, ref) => {
    return (
      <dialog
        className="w-1/2 p-4 rounded-lg bg-white backdrop:bg-[#00000075]"
        ref={ref}
        {...rest}
        open={open}
      >
        <header className="mb-4 flex items-center justify-between">
          {title && <strong className="text-indigo-900 text-xl">{title}</strong>}{" "}
          <X
            className="cursor-pointer"
            color={gray["400"]}
            onClick={handleClickCloseModal}
          />
        </header>
        {children}
      </dialog>
    );
  }
);
