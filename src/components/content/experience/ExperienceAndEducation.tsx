import Title from '@/components/common/Title';
import { useTranslation } from 'react-i18next';
import styles from './ExperienceAndEducation.module.scss';
import Experience from './experience/Experience';
import Formation from './formation/Formation';

const ExperienceAndEducation = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.main_container}>
      <Title text={t('experience_and_formation')} />
      <div className={styles.content_container}>
        <Experience />
        <div className={styles.divider}></div>
        <Formation />
      </div>
    </section>
  );
};

export default ExperienceAndEducation;
