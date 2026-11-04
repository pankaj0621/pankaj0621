import { Award, Code2, Orbit, Sparkles, Trophy } from "lucide-react";
import SectionHeading from "../SectionHeading.jsx";
import { achievements } from "../../data/portfolio.js";

const icons = { trophy: Trophy, sparkles: Sparkles, orbit: Orbit, code: Code2 };

export default function RecognitionSection() {
  const awards = achievements.filter((item) => item.kind === "Award");
  const participation = achievements.filter((item) => item.kind === "Participation");
  return (
    <section className="section" id="recognition" aria-labelledby="recognition-title">
      <div className="container">
        <SectionHeading id="recognition-title" index="05" eyebrow="Recognition" title={<>Proof, <span className="gradient-text">on the record.</span></>} description="Awards and hackathon participation that reflect a habit of building, collaborating, and showing up." />
        <div className="recognition-grid">
          <div className="recognition-list">
              {[...awards, ...participation].map((item) => {
                const Icon = icons[item.icon] || Award;
                return (
                  <article className="recognition-item" key={item.title} data-reveal>
                    <span className="recognition-icon"><Icon size={18} aria-hidden="true" /></span>
                    <span><h3>{item.title}</h3><p>{item.detail}</p></span>
                    <span className="recognition-kind">{item.kind}</span>
                  </article>
                );
              })}
          </div>
          <aside className="honor-aside" data-reveal>
            <span className="mono">A builder's mindset</span>
            <p>From campus innovation challenges to national hackathons, I enjoy learning with a team and turning ideas into working prototypes.</p>
            <span className="honor-aside-mark" aria-hidden="true">PK<span>.</span></span>
          </aside>
        </div>
      </div>
    </section>
  );
}
