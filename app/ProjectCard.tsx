import Image from "next/image";
import type { Project } from "./projects";
import styles from "./page.module.css";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      className={styles.card}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={styles.cardImageWrap}>
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes="(max-width: 640px) 90vw, 400px"
          className={styles.cardImage}
        />
      </span>
      <span className={styles.cardLabel}>{project.slug}</span>
    </a>
  );
}
