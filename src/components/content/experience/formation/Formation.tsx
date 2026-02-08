import { useTranslation } from 'react-i18next';
import styles from './Formation.module.scss';
import FormationCard from './card/FormationCard';

const Formation = () => {
  const { t } = useTranslation();

  const education = [
    { year: '2022', title: 'DESARROLLO FULLSTACK CON REACT+JAVA', place: 'JALASOFT UNIVERSITY' },
    { year: '2021', title: 'DESARROLLO FULLSTACK CON JAVA', place: 'PROGRAMA DIGITALERS - TELECOM + EDUCACIÓN IT' },
    { year: '2020', title: 'WEB FULLSTACK DEVELOPER', place: 'HENRY' },
  ];

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
