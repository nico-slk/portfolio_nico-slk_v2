import { useRef, type ChangeEvent, type ReactNode } from "react";
import { FaUpload } from 'react-icons/fa';
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

const FileButton = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("Archivo seleccionado:", file.name);
      // Lógica de subida
    }
  };

  return (
    <div className={styles.uploadContainer}>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".pdf, .png, .jpeg, .jpg"
        style={{ display: 'none' }}
      />

      <Button
        btnFn={handleButtonClick}
        type="secondary"
        className={styles.uploadBtn}
      >
        <FaUpload /> <p>Subir Archivo</p>
      </Button>

      <p className={styles.hint}>Formatos admitidos: PDF, PNG, JPG</p>
    </div>
  );
};

export { Button, FileButton };

