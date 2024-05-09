import { InputHTMLAttributes, TextareaHTMLAttributes, useId } from "react";

type InputProps =
  | ({
      label?: string;
      isTextArea?: boolean;
    } & InputHTMLAttributes<HTMLInputElement>) &
      TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Input({ label, isTextArea = false, ...rest }: InputProps) {
  const id = useId();

  return (
    <>
      {!isTextArea ? (
        <div className="flex flex-col gap-2">
          {label && (
            <label
              className="text-indigo-900 font-semibold"
              htmlFor={id}
            >
              {label}
            </label>
          )}
          <input
            className="rounded-lg border border-indigo-900 resize-none outline-none p-2 text-gray-500"
            type="text"
            id={id}
            {...rest}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {label && (
            <label
              className="text-indigo-900 font-semibold"
              htmlFor={id}
            >
              {label}
            </label>
          )}
          <textarea
            className="rounded-lg border border-indigo-900 resize-none outline-none p-2 text-gray-500"
            rows={6}
            id={id}
            {...rest}
          />
        </div>
      )}
    </>
  );
}
