import { Button } from '@/components/button/Button';
import { useTranslation } from 'react-i18next';
import computer from '../../../assets/computer.svg';
import styles from './Welcome.module.scss';

const WelcomeContentLeft = () => {
  const { t } = useTranslation();
  return (
    <div className={`${styles.welcome} ${styles.welcome_left}`}>
      <div className={styles.welcome_left_texts}>
        <h3>{t('hi') + ' '}
          <span className={styles.custom_underline}>
            {'Nicolás Selicki'}
          </span>
        </h3>
        <h1>FULL STACK DEVELOPER</h1>
        <p>{t('introduction')}</p>
      </div>
      <Button
        btnFn={() => { }}
        type='secondary'
        className={styles.resumeBtn}
      >
        {t('download_resume')}
      </Button>
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
