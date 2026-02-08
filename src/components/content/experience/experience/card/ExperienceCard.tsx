import type { Experience } from '@/interfaces/experience';
import styles from './ExperienceCard.module.scss';

const ExperienceCard = ({ experience }: { experience: Experience; }) => {
  const { end_date, start_date, description } = experience;

  return (
    <div className={styles.jobCard}>
      <span className={styles.jobCard_content}>
        <p className={styles.company}>{experience.company}</p>
        <div className={styles.divider}></div>
        <p className={styles.position}>{experience.position}</p>
      </span>
      <span className={styles.date}>
        {`${start_date.getMonth() + 1}/${start_date.getFullYear()}`} - {end_date.getMonth() + 1}/{end_date.getFullYear()}
      </span>
      <p>
        {description}
      </p>
    </div>
  );
};

export default ExperienceCard;
