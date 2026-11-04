import { useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Info } from "lucide-react";
import ProjectVisual from "./ProjectVisual.jsx";

export default function ProjectCard({ project }) {
  const reducedMotion = useReducedMotion();
  const maxTiltRef = useRef(null);
  const updateCardLighting = (event) => {
    if (reducedMotion || event.pointerType !== "mouse") return;
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const normalizedX = (x / bounds.width) * 2 - 1;
    const normalizedY = (y / bounds.height) * 2 - 1;
    if (maxTiltRef.current === null) {
      const configuredTilt = Number.parseFloat(window.getComputedStyle(card).getPropertyValue("--card-tilt-max"));
      maxTiltRef.current = Number.isFinite(configuredTilt) ? configuredTilt : 4;
    }

    card.style.setProperty("--card-tilt-x", `${(-normalizedY * maxTiltRef.current).toFixed(2)}deg`);
    card.style.setProperty("--card-tilt-y", `${(normalizedX * maxTiltRef.current).toFixed(2)}deg`);
    card.style.setProperty("--glare-x", `${x.toFixed(1)}px`);
    card.style.setProperty("--glare-y", `${y.toFixed(1)}px`);
    card.style.setProperty("--glare-opacity", "1");
  };

  const resetCardLighting = (event) => {
    const card = event.currentTarget;
    card.style.setProperty("--card-tilt-x", "0deg");
    card.style.setProperty("--card-tilt-y", "0deg");
    card.style.setProperty("--glare-opacity", "0");
  };

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
    <article
      className={`project-card case project-${project.accent}${project.number === "05" ? " case-in-progress" : ""}`}
      data-reveal
      onPointerMove={updateCardLighting}
      onPointerLeave={resetCardLighting}
    >
      <ProjectVisual project={project} />
      <div className="case-body">{content}</div>
    </article>
  );
}
