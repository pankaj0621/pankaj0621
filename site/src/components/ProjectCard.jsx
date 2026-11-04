import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Info } from "lucide-react";
import ProjectVisual from "./ProjectVisual.jsx";

export default function ProjectCard({ project }) {
  const reducedMotion = useReducedMotion();
  const content = (
    <>
      <p className="case-kicker"><span>{project.number}</span> {project.status} · {project.tags.slice(0, 2).join(" · ")}</p>
      <h3 className="case-title">{project.title}</h3>
      <p className="case-problem">{project.description}</p>
      <div className="tag-list" aria-label="Technologies used">
        {project.tags.map((tag) => <span className="tech-tag" key={tag}>{tag}</span>)}
      </div>
      {project.previewNote && <p className="preview-note"><Info size={13} aria-hidden="true" />{project.previewNote}</p>}
      <div className="project-links">
        {project.repositoryUrl && <a href={project.repositoryUrl} target="_blank" rel="noreferrer"><ArrowUpRight size={15} aria-hidden="true" /> Repository</a>}
        {project.previewUrl && <a href={project.previewUrl} target="_blank" rel="noreferrer"><ExternalLink size={14} aria-hidden="true" /> Preview</a>}
      </div>
    </>
  );

  return (
    <motion.article
      className={`project-card case project-${project.accent}${project.number === "05" ? " case-in-progress" : ""}`}
      data-reveal
      whileHover={reducedMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <ProjectVisual project={project} />
      <div className="case-body">{content}</div>
    </motion.article>
  );
}
