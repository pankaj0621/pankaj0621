import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import SectionHeading from "../SectionHeading.jsx";
import { certifications, education, experience } from "../../data/portfolio.js";

function TimelineEntry({ entry }) {
  return (
    <article className="timeline-entry">
      <span className="timeline-period">{entry.period}</span>
      <h4>{entry.title}</h4>
      <div className="timeline-org">{entry.organisation}{entry.location && <> <span aria-hidden="true">·</span> {entry.location}</>}</div>
      <p>{entry.description}</p>
    </article>
  );
}

export default function JourneySection() {
  return (
    <section className="section" id="journey" aria-labelledby="journey-title">
      <div className="container">
        <SectionHeading id="journey-title" index="06" eyebrow="Experience & education" title={<>The path <span className="gradient-text">so far.</span></>} description="My academic foundation and hands-on work are shaping how I approach software and product development." />
        <div className="journey-grid">
          <div className="journey-column journey-timeline" data-reveal>
            <div className="timeline-group">
              <h3><BriefcaseBusiness size={18} aria-hidden="true" /> Experience</h3>
              {experience.map((entry) => <TimelineEntry key={entry.title} entry={entry} />)}
            </div>
            <div className="timeline-group">
              <h3><GraduationCap size={19} aria-hidden="true" /> Education</h3>
              {education.map((entry) => <TimelineEntry key={entry.title} entry={entry} />)}
            </div>
          </div>
          <div className="journey-certs" data-reveal>
            <h3>Certifications <span className="mono">03</span></h3>
            <div className="cert-list">
              {certifications.map((item, index) => (
                <article className="cert-item" key={item.title}>
                  <span className="cert-index mono">{String(index + 1).padStart(2, "0")}</span>
                  <div><h4>{item.title}</h4><p><span>{item.organisation}</span><span>{item.year}</span></p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
