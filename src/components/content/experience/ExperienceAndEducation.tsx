import Title from '@/components/common/Title';
import { useTranslation } from 'react-i18next';
import Experience from './Experience';
import styles from './Experience.module.scss';
import Formation from './Formation';

const ExperienceAndEducation = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.main_container}>
      <Title text={t('experience_and_formation')} />
      <div className={styles.content_container}>
        <Formation />
        <div className={styles.divider}></div>
        <Experience />
      </div>
    </section>
  );
};

export default ExperienceAndEducation;
