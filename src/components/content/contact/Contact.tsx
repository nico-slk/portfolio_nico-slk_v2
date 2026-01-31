import { Button, FileButton } from '@/components/button/Button';
import Title from '@/components/common/Title';
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Contact.module.scss";

const ContactInfo = () => (
  <div className={styles.info_section}>
    <p className={styles.description}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the.
    </p>
    <div className={styles.social_links}>
      <a href='https://github.com/nico-slk' target="_blank" className={styles.link_item}>
        <FaGithub /> <span>nico-slk</span>
      </a>
      <a href='mailto:nico1991.6@gmail.com' className={styles.link_item}>
        <FaEnvelope /> <span>nico1991.6@gmail.com</span>
      </a>
      <a href='https://www.linkedin.com/in/nicolás-selicki-702052184/' target="_blank" className={styles.link_item}>
        <FaLinkedin /> <span>Nicolás Selicki</span>
      </a>
    </div>
  </div>
);

const ContactForm = () => (
  <div
    className={styles.form_section}
  >
    <div className={styles.input_group}>
      <label>NOMBRE</label>
      <input type="text" placeholder="Nombre" />
    </div>
    <div className={styles.input_group}>
      <label>EMAIL</label>
      <input type="email" placeholder="Email" />
    </div>
    <div className={styles.input_group}>
      <label>MENSAJE</label>
      <textarea placeholder="Escribí tu mensaje..." rows={5}></textarea>
    </div>


    <div className={styles.form_buttons}>
      <FileButton />

      <Button
        type="button"
        btnFn={() => console.log("Form submitted")}
      >
        ENVIAR MENSAJE
      </Button>
    </div>


  </div>
);

const Contact = () => {
  return (
    <section className={styles.container}>
      <Title text="¡CHARLEMOS!" />
      <div className={styles.contact_content}>
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
