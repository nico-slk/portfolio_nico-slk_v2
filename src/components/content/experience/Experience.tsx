import { useTranslation } from 'react-i18next';
import styles from './Experience.module.scss';

const Jobs = () => {
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
        {education.map((item, index) => (
          <div key={index} className={styles.timeline_item}>
            <span className={styles.timeline_year}>{item.year}</span>
            <div className={styles.timeline_content}>
              <h4>{item.title}</h4>
              <p>| {item.place}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
