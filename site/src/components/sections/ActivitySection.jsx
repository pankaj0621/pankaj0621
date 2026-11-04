import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../SectionHeading.jsx";
import { profile } from "../../data/portfolio.js";
import BrandIcon from "../BrandIcon.jsx";

export default function ActivitySection() {
  const [chartUnavailable, setChartUnavailable] = useState(false);
  return (
    <section className="section activity-section" id="activity" aria-labelledby="activity-title">
      <div className="container">
        <SectionHeading id="activity-title" index="02" eyebrow="Commit log" title={<>A year of building, <span className="gradient-text">one square at a time.</span></>} description="A snapshot of the work, practice, and experiments I share in the open." />
        <div className="activity-panel" data-reveal>
          <div className="activity-topline"><strong>GitHub contribution graph</strong><span>Live from my profile</span></div>
          {chartUnavailable ? (
            <div className="activity-fallback">The activity chart is unavailable right now. View the live profile on GitHub.</div>
          ) : (
            <img className="activity-chart" src={profile.contributionGraph} alt="GitHub contribution activity chart for Pankaj Kumar" loading="lazy" onError={() => setChartUnavailable(true)} />
          )}
          <a className="activity-link" href={profile.github} target="_blank" rel="noreferrer"><BrandIcon name="github" size={15} /> View GitHub profile <ArrowUpRight size={14} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
