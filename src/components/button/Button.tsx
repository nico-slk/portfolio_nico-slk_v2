import type { ReactNode } from "react";
import styles from "./Button.module.scss";

type ButtonType = "button" | "link" | "secondary" | "negativeLink";

interface ButtonProps {
  btnFn: () => void;
  children: ReactNode;
  type: ButtonType;
  className?: string;
}

const Button = ({ btnFn, children, type, className }: ButtonProps) => {
  return (
    <button onClick={btnFn} className={`${styles[type]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
