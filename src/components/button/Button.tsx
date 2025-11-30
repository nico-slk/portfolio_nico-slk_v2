import type { ReactNode } from 'react';
import styles from './Button.module.scss';

type ButtonType = 'button' | 'link';

interface ButtonProps {
  btnFn: () => void;
  children: ReactNode;
  type: ButtonType;
}

const Button = ({ btnFn, children, type }: ButtonProps) => {
  return (
    <button
      onClick={btnFn}
      className={styles[type]}
    >{children}</button>
  );
};

export default Button;
