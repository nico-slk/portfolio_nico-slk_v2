import { Button } from '@/components/button/Button';
import type { Formation } from '@/interfaces/formation';
import { FaGlobe } from 'react-icons/fa';
import styles from './FormationCard.module.scss';


const FormationCard = ({ course }: { course: Formation; }) => {
  const { diploma_url, institution, name, start_date } = course;
  const year = new Date(start_date.seconds * 1000);

  return (
    <div className={styles.timeline_item}>
      <span className={styles.timeline_year}>{year.getFullYear()}</span>
      <div className={styles.timeline_content}>
        <p className={styles.formation_title}>{name}</p>
        <p className={styles.formation_institution}>| {institution}</p>
      </div>
      <Button btnFn={() => window.open(diploma_url, '_blank', 'noopener,noreferrer')} type="negativeLink" className={styles.webBtn}>
        <FaGlobe className={styles.webBtnIcon} />
      </Button>
    </div>
  );
};

export default FormationCard;
