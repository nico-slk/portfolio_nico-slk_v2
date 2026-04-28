import styles from './Common.module.scss';

const Title = ({ text }: { text: string; }) => {
  return (
    <span className={styles.title_container}>
      <div className={styles.underline}></div>
      <h2 className={styles.title}>{text}</h2>
    </span>
  );
};

export default Title;
