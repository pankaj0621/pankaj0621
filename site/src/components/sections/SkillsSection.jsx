import SectionHeading from "../SectionHeading.jsx";
import { skills } from "../../data/portfolio.js";

export default function SkillsSection() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading id="skills-title" index="04" eyebrow="Toolkit" title={<>A flexible <span className="gradient-text">toolkit.</span></>} description="Technologies and foundations I use to shape ideas into accessible, responsive, and maintainable applications." />
        <div className="skills-grid">
          {skills.map((group, index) => (
            <article className="skill-card" data-reveal key={group.title}>
              <h3><span className="skill-index">{String(index + 1).padStart(2, "0")}</span>{group.title}</h3>
              <div className="tag-list">{group.items.map((item) => <span className="tech-tag" key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
