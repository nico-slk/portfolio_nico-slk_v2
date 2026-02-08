import styles from './FormationCard.module.scss';

const FormationCard = (props: any) => {

  const { course } = props;

  return (
    <div className={styles.timeline_item}>
      <span className={styles.timeline_year}>{course.year}</span>
      <div className={styles.timeline_content}>
        <p className={styles.formation_title}>{course.title}</p>
        <p className={styles.formation_institution}>| {course.place}</p>
      </div>
    </div>
  );
};

export default FormationCard;
