import Contact from './contact/Contact';
import styles from './Content.module.scss';
import ExperienceAndEducation from './experience/ExperienceAndEducation';
import Projects from "./projects/Projects";
import Techs from './techs/Techs';
import Welcome from "./welcome/Welcome";

const Content = () => {

  return (
    <main className={styles.container}>
      <Welcome />
      <Projects />
      <Techs />
      <ExperienceAndEducation />
      <Contact />
    </main>
  );
};

export default Content;
