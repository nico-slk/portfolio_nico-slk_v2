import Welcome from "./welcome/Welcome";
import styles from './Content.module.scss';

const Content = () => {

  return (
    <main className={styles.container}>
      <Welcome />
    </main>
  );
};

export default Content;
