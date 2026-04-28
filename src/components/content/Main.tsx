import Experience from '@/components/content/experience/Experience';
import Formation from '@/components/content/formation/Formation';
import Welcome from '@/components/content/welcome/Welcome';
import Projects from '@/components/content/projects/Projects';
import Techs from '@/components/content/techs/Techs';
import Contact from '@/components/content/contact/Contact';

import styles from './Content.module.scss';

const Content = () => {

  return (
    <main className={styles.container}>
      <Welcome />
      <Projects />
      <Techs />
      <Experience />
      <Formation />
      <Contact />
    </main>
  );
};

export default Content;
