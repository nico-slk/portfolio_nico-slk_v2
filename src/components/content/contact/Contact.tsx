import { Button, FileButton } from '@/components/button/Button';
import Title from '@/components/common/Title';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Contact.module.scss";

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.info_section}>
      <p className={styles.description}>
        {t('contact_me_1')}
      </p>
      <p className={styles.description}>
        {t('contact_me_2')}
      </p>
      <div className={styles.social_links}>
        <a href='https://github.com/nico-slk' target="_blank" className={styles.link_item}>
          <FaGithub /> <span>nico-slk</span>
        </a>
        <a href='mailto:nicolas.selicki@gmail.com' className={styles.link_item}>
          <FaEnvelope /> <span>nicolas.selicki@gmail.com</span>
        </a>
        <a href='https://www.linkedin.com/in/nicolas-selicki-web-fullstack//' target="_blank" className={styles.link_item}>
          <FaLinkedin /> <span>Nicolás Selicki</span>
        </a>
      </div>
    </div>
  );
};

const ContactForm = () => (
  <div
    className={styles.form_section}
  >
    <div className={styles.input_group}>
      <label>{t('name')}</label>
      <input type="text" placeholder={t('name_placeholder')} />
    </div>
    <div className={styles.input_group}>
      <label>{t('email')}</label>
      <input type="email" placeholder={t('email_placeholder')} />
    </div>
    <div className={styles.input_group}>
      <label>{t('message')}</label>
      <textarea placeholder={t('message_placeholder')} rows={5}></textarea>
    </div>


    <div className={styles.form_buttons}>
      <FileButton />

      <Button
        type="button"
        btnFn={() => console.log("Form submitted")}
      >
        {t('send_message')}
      </Button>
    </div>


  </div>
);

const Contact = () => {
  return (
    <section className={styles.container}>
      <Title text={t('contact_title')} />
      <div className={styles.contact_content}>
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
