import { useCurrentLanguage } from "../../hooks/useCurrentLanguage";
import i18n from "../../i18n/i18n";
import Button from "../button/Button";
import styles from './Header.module.scss';

const Header = () => {
  const idioma = useCurrentLanguage();

  return (
    <header className={styles.header} >
      <Button
        btnFn={() => { }}
        type='link'
      >Proyectos</Button>
      <Button
        btnFn={() => { }}
        type='link'
      >Experiencia</Button>
      <Button
        btnFn={() => { }}
        type='button'
      >Contacto</Button>
      <div>|</div>
      {idioma === 'es'
        ? <Button
          btnFn={() => i18n.changeLanguage("en")}
          type='link'
        >EN</Button>
        : <Button
          btnFn={() => i18n.changeLanguage("es")}
          type='link'
        >ES</Button>
      }
    </header>
  );
};

export default Header;
