import React from "react";
import styles from "./Projects.module.css";
import projectsData from "../../data/projects.json";

import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      {projectsData.map((category, categoryId) => (
        <div key={categoryId} className={styles.category}>
          <h3 className={styles.categoryTitle}>{category.category}</h3>
          <div className={styles.projects}>
            {category.projects.map((project, projectId) => (
              <ProjectCard key={projectId} project={project} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};