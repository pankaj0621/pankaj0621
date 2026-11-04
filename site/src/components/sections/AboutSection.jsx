import { BookOpen, BriefcaseBusiness, HeartHandshake, Lightbulb, Rocket } from "lucide-react";
import SectionHeading from "../SectionHeading.jsx";
import { profile } from "../../data/portfolio.js";

export default function AboutSection() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about-grid">
          <div>
            <SectionHeading id="about-title" index="01" eyebrow="About" title={<>Curious by nature.<br /><span className="gradient-text">Builder by choice.</span></>} />
            <div className="about-aside" data-reveal>
              <span className="mono">MY NORTH STAR</span>
              <blockquote>“Turn creative ideas into useful products people can rely on.”</blockquote>
            </div>
          </div>
          <div className="about-copy" data-reveal>
            <p>{profile.intro}</p>
            <p>My work spans modern frontend interfaces, full-stack applications, and early-stage product ideas. I enjoy exploring new technologies, taking part in hackathons, and learning by shipping projects with real use cases.</p>
            <p>Alongside my studies, I gained professional exposure as a Frontend Developer Intern at Lawazia Tech and continue to work on independent and freelance projects.</p>
            <div className="focus-row" aria-label="Professional focus">
              <span className="focus-chip"><BookOpen size={14} aria-hidden="true" /> CSE student</span>
              <span className="focus-chip"><BriefcaseBusiness size={14} aria-hidden="true" /> Frontend internship</span>
              <span className="focus-chip"><HeartHandshake size={14} aria-hidden="true" /> Freelancer</span>
              <span className="focus-chip"><Rocket size={14} aria-hidden="true" /> SaaS & product building</span>
              <span className="focus-chip"><Lightbulb size={14} aria-hidden="true" /> Hackathon participant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
