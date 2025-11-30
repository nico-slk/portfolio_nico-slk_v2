import styles from './Section.module.scss';
import { useTranslation } from 'react-i18next';

const Content = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.container}>
      <p>

        {t('hello')}
      </p>
      <p>
        {t('about')}

      </p>
    </section>
  );
};

export default Content;
