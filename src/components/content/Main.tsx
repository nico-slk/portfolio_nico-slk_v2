import Welcome from "./welcome/Welcome";
import styles from './Content.module.scss';
import Projects from "./projects/Projects";

const Content = () => {

  return (
    <main className={styles.container}>
      <Welcome />
      <Projects />
    </main>
  );
};

export default Content;
