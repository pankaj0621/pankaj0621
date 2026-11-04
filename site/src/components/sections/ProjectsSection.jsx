import SectionHeading from "../SectionHeading.jsx";
import ProjectCard from "../ProjectCard.jsx";
import { projects } from "../../data/portfolio.js";

export default function ProjectsSection() {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="container">
        <SectionHeading id="work-title" index="03" eyebrow="Selected work" title={<>Products, not <span className="gradient-text">assignments.</span></>} description="A selection of products, prototypes, and experiments shaped around useful problems. Each case study shows what is currently available." />
        <div className="projects-grid">
          {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
        <p className="work-note">Project descriptions reflect current repository documentation and the details shared by Pankaj. Live previews may require sign-in or an active backend.</p>
      </div>
    </section>
  );
}
