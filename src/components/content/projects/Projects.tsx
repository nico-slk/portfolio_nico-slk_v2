import { projects } from "@/data";
import Card, { type TechsTypes } from "../../card/Card";
import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <div className={styles.container}>
      {projects.map((project) => (
        <Card
          id={project.id}
          name={project.name}
          text={project.text}
          repo={project.repo}
          link={project.link}
          techs={project.techs as TechsTypes[]}
        />
      ))}
    </div>
  );
};

export default Projects;
