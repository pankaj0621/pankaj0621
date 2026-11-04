import { ArrowUpRight } from "lucide-react";
import { profile } from "../../data/portfolio.js";
import BrandIcon from "../BrandIcon.jsx";

export default function ContactSection() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-card" data-reveal>
          <div className="contact-copy">
            <span className="eyebrow">Have a project in mind?</span>
            <h2 id="contact-title">Let’s build something <span className="gradient-text">meaningful.</span></h2>
            <p>I’m always glad to connect with people building useful products, exploring an idea, or looking for a collaborative developer. Reach me through GitHub or LinkedIn.</p>
          </div>
          <div className="contact-actions">
            <a className="button button-primary" href={profile.linkedin} target="_blank" rel="noreferrer"><BrandIcon name="linkedin" size={16} /> Connect on LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>
            <a className="button button-quiet" href={profile.github} target="_blank" rel="noreferrer"><BrandIcon name="github" size={16} /> Follow on GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
