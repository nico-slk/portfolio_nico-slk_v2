import { Button } from '@/components/button/Button';
import type { Formation } from '@/interfaces/formation';
import { FaGlobe } from 'react-icons/fa';
import styles from './FormationCard.module.scss';

// ... imports
const FormationCard = ({ course }: { course: Formation; }) => {
  const { diploma_url, institution, name, start_date } = course;
  const date = start_date?.seconds ? new Date(start_date.seconds * 1000) : new Date();
  const year = date.getFullYear();

  return (
    <div className={styles.timeline_item}>
      {/* El punto interactivo */}
      <div className={styles.dot}></div>

      <div className={styles.content_wrapper}>
        <span className={styles.year}>{year}</span>
        <div className={styles.title_group}>
          <h3 className={styles.formation_title}>{name}</h3>
          <p className={styles.formation_institution}>{institution}</p>
        </div>
      </div>

      <div className={styles.actions}>
        <Button
          btnFn={() => window.open(diploma_url, '_blank', 'noopener,noreferrer')}
          type="negativeLink"
          className={styles.webBtn}
        >
          <FaGlobe className={styles.webBtnIcon} />
        </Button>
      </div>
    </div>
  );
};

export default FormationCard;
