import styles from "./page.module.css";
import { ProjectCard } from "./ProjectCard";
import { projects } from "./projects";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>GABRIEL LEO</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
}
