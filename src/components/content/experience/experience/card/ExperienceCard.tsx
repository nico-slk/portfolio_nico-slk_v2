import type { Experience } from '@/interfaces/experience';
import styles from './ExperienceCard.module.scss';

const ExperienceCard = ({ experience }: { experience: Experience; }) => {
  const { end_date, start_date, description } = experience;

  const endDate = new Date(end_date.seconds * 1000);
  const startDate = new Date(start_date.seconds * 1000);

  return (
    <div className={styles.jobCard}>
      <span className={styles.jobCard_content}>
        <p className={styles.company}>{experience.company}</p>
        <div className={styles.divider}></div>
        <p className={styles.position}>{experience.position}</p>
      </span>
      <span className={styles.date}>
        {`${startDate.getMonth() + 1}/${startDate.getFullYear()}`} - {endDate.getMonth() + 1}/{endDate.getFullYear()}
      </span>
      <p>
        {description}
      </p>
    </div>
  );
};

export default ExperienceCard;
