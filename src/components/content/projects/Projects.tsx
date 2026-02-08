import Title from '@/components/common/Title';
import { projects } from "@/data";
import { useTranslation } from 'react-i18next';
import Card, { type TechsTypes } from "../../card/Card";
import styles from "./Projects.module.scss";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Title text={t('projects')} />
      <div className={styles.list}>
        {projects.map((project) => (
          <Card
            key={project.id}
            id={project.id}
            name={project.name}
            text={project.text}
            repo={project.repo}
            link={project.link}
            techs={project.techs as TechsTypes[]}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
