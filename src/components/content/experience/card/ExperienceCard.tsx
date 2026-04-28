import type { Experience } from '@/interfaces/experience';
import styles from './ExperienceCard.module.scss';

const ExperienceCard = ({ experience }: { experience: Experience; }) => {
  const { end_date, start_date, description, company, position } = experience;

  const endDate = new Date(end_date.seconds * 1000);
  const startDate = new Date(start_date.seconds * 1000);

  const dateString = `${startDate.getMonth() + 1}/${startDate.getFullYear()} — ${endDate.getMonth() + 1}/${endDate.getFullYear()}`;

  return (
    <article className={styles.jobCard}>
      <div className={styles.left_col}>
        <h3 className={styles.company}>{company}</h3>
        <p className={styles.position}>{position}</p>
        <time className={styles.date}>{dateString}</time>
      </div>

      <div className={styles.right_col}>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default ExperienceCard;
