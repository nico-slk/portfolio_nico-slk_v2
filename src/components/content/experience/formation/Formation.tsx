import { useFirebase } from '@/hooks/useFirebase';
import type { Formation } from '@/interfaces/formation';
import { useTranslation } from 'react-i18next';
import styles from './Formation.module.scss';
import FormationCard from './card/FormationCard';

const Formation = () => {
  const { t } = useTranslation();
  const { data: education, loading } = useFirebase('formation', "start_date") as { data: Formation[], loading: boolean; };

  if (loading) {
    return <div className={styles.loading}>{t('loading_formation')}</div>;
  }

  return (
    <div className={styles.right}>
      <h2 className={styles.title_center}>{t('education_title')}</h2>
      <div className={styles.timeline}>
        {education.map((course, index) => (
          <FormationCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Formation;
