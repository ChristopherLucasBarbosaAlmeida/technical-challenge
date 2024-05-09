import { ButtonHTMLAttributes, ElementType } from "react";

type ButtonProps = {
  leftIcon?: ElementType;
  variant: keyof typeof variants;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variants = {
  primary: "bg-fuchsia-600",
  secondary: "bg-indigo-900 transition-colors ease-linear hover:bg-indigo-400",
};

export function Button({ children, leftIcon: LeftIcon, variant, ...rest }: ButtonProps) {
  return (
    <button
      className={`rounded-lg flex justify-center items-center gap-2 p-2 text-white font-semibold ${variants[variant]}`}
      {...rest}
    >
      {LeftIcon && <LeftIcon />}
      {children}
    </button>
  );
}
