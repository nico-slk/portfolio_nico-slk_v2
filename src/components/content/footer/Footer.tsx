import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer}>
        <div className={styles.left}>
          <p>© {currentYear} <strong>Nicolás Selicki</strong>. Casi todos los derechos reservados.</p>
        </div>

        <div className={styles.right}>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
