import { useTranslation } from 'react-i18next';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.scss';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer_wrapper}>
      <div className={styles.footer_grid}>
        <div className={styles.content}>
          <div className={styles.left}>
            <p>© {currentYear} <strong>Nicolás Selicki</strong>. {t('all_rights_reserved')}</p>
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
      </div>
    </footer>
  );
};

export default Footer;
