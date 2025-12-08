import { useTranslation } from 'react-i18next';
import styles from './Welcome.module.scss';
import computer from '../../../assets/computer.svg';
import Button from '../../button/Button';

const WelcomeContentLeft = () => {
  const { t } = useTranslation();
  return (
    <div className={`${styles.welcome} ${styles.welcome_left}`}>
      <div className={styles.welcome_left_texts}>
        <h3>{t('hi')} Nicolás Selicki</h3>
        <h1>FULL STACK DEVELOPER</h1>
        <p>{t('introduction')}</p>
      </div>
      <Button
        btnFn={() => { }}
        type='secondary'
      >Descargar CV</Button>
    </div>
  );
};

const WelcomeContentRight = () => {
  return (
    <div className={`${styles.welcome} ${styles.welcome_right}`}>
      <img
        src={computer}
        alt="computer"
        className={styles.computer}
      />
    </div>
  );
};

const Welcome = () => {

  return (
    <section className={styles.container}>
      <WelcomeContentLeft />
      <WelcomeContentRight />
    </section>
  );
};

export default Welcome;
