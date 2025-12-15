
import { useCurrentLanguage } from '../../../hooks/useCurrentLanguage';
import i18n from '../../../i18n/i18n';
import Button from '../../button/Button';
import styles from './Header.module.scss';

const Header = () => {
  const idioma = useCurrentLanguage();

  return (
    <header className={styles.header} >
      <Button
        btnFn={() => { }}
        className={styles.uppercase_text}
        type='link'
      > Proyectos </Button>
      <Button
        btnFn={() => { }}
        className={styles.uppercase_text}
        type='link'
      > Experiencia </Button>
      <Button
        btnFn={() => { }}
        className={styles.uppercase_text}
        type='button'
      > Contacto </Button>
      <div className={styles.divider}></div>
      {idioma === 'es'
        ? <Button
          btnFn={() => i18n.changeLanguage("en")}
          className={`${styles.uppercase_text} ${styles.languageBtn}`}
          type='link'
        > EN </Button>
        : <Button
          btnFn={() => i18n.changeLanguage("es")}
          className={`${styles.uppercase_text} ${styles.languageBtn}`}
          type='link'
        > ES </Button>
      }
    </header>
  );
};

export default Header;
