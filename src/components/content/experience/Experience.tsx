import { useFirebase } from '@/hooks/useFirebase';
import type { Experience as IExperience } from '@/interfaces/experience';
import { useTranslation } from 'react-i18next';
import styles from './Experience.module.scss';
import ExperienceCard from './card/ExperienceCard';

const Experience = () => {
  const { t } = useTranslation();
  const { data, loading } = useFirebase('experiences', 'start_date') as { data: IExperience[]; loading: boolean; };

  if (loading) {
    return <div className={styles.loading}>{t('loading_experience')}</div>;
  }

  return (
    <div className={styles.left}>
      <h2 className={styles.title_center}>{t('experience_title')}</h2>
      <div className={styles.list}>
        {data && data.map((item, index) => (
          <ExperienceCard key={index} experience={item} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
