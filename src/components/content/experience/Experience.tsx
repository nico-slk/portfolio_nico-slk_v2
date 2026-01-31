import Title from '@/components/common/Title';
import styles from './Experience.module.scss';

const LeftContent = () => (
  <div className={styles.left}>
    <div className={styles.jobCard}>
      <h3>JUNIOR FRONT-END ENGINEER | GLOBAL LOGIC</h3>
      <span className={styles.date}>JUN 2021 - NOV 2022</span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>
    </div>
  </div>
);

const RightContent = () => {
  const education = [
    { year: '2022', title: 'DESARROLLO FULLSTACK CON REACT+JAVA', place: 'JALASOFT UNIVERSITY' },
    { year: '2021', title: 'DESARROLLO FULLSTACK CON JAVA', place: 'PROGRAMA DIGITALERS - TELECOM + EDUCACIÓN IT' },
    { year: '2020', title: 'WEB FULLSTACK DEVELOPER', place: 'HENRY' },
  ];

  return (
    <div className={styles.right}>
      <h2 className={styles.title_center}>FORMACIÓN</h2>
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

const ExperienceAndEducation = () => {
  return (
    <section className={styles.main_container}>

      <Title text="EXPERIENCIA" />
      <div className={styles.content_container}>

        <LeftContent />
        <div className={styles.divider}></div>
        <RightContent />
      </div>
    </section>
  );
};

export default ExperienceAndEducation;
