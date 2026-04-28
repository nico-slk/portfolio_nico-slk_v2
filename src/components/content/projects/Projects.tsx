import { useFirebase } from '@/hooks/useFirebase';
import type { Projects as IProjects, TechsTypes } from '@/interfaces/project';
import { useTranslation } from 'react-i18next';
import Card from "../../card/Card";
import styles from "./Projects.module.scss";

const Projects = () => {
  const { t } = useTranslation();
  const { data: projects, loading } = useFirebase("projects") as { data: IProjects[]; loading: boolean; };

  if (loading) {
    return <div className={styles.loading}>{t('loading_projects')}</div>;
  }

  return (
    <div className={styles.container}>
      {/* Usamos h2 con title_center para igualar a Experience y Formation */}
      <h2 className={styles.title_center}>{t('projects')}</h2>

      <div className={styles.list}>
        {projects.map((project: IProjects) => (
          <Card
            key={project.name}
            id={project.id}
            name={project.name}
            description={project.description}
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
