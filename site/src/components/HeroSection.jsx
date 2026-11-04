import { lazy, Suspense } from "react";
import { ArrowRight, ArrowUpRight, Code2, MapPin, Sparkles } from "lucide-react";
import { profile } from "../data/portfolio.js";
import BrandIcon from "./BrandIcon.jsx";

const HeroScene = lazy(() => import("./HeroScene.jsx"));

export default function HeroSection() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-atmosphere" aria-hidden="true">
        <div className="hero-grid-pattern" />
        <svg className="hero-orbits" viewBox="0 0 800 800" fill="none">
          <ellipse cx="400" cy="400" rx="370" ry="370" />
          <ellipse cx="400" cy="400" rx="286" ry="286" />
          <ellipse cx="400" cy="400" rx="204" ry="204" />
          <circle cx="770" cy="400" r="4" />
          <circle cx="114" cy="400" r="3" />
          <circle cx="400" cy="196" r="3" />
        </svg>
      </div>
      <div className="container hero-container">
        <div className="hero-grid">
          <div className="hero-copy" data-reveal>
            <p className="hero-status"><span className="availability-dot" /> Full-Stack Developer · Freelancer · CSE Student</p>
            <p className="hero-eyebrow">Web development <span>·</span> Product building <span>·</span> Creative technology</p>
            <h1 id="hero-title"><span>Pankaj</span><span className="hero-name-last">Kumar<span className="hero-period">.</span></span></h1>
            <p className="hero-role">I build <em>thoughtful web experiences</em> and practical digital products — from responsive interfaces to full-stack applications.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowRight size={16} aria-hidden="true" /></a>
              <a className="button button-quiet" href={profile.linkedin} target="_blank" rel="noreferrer">Connect with me <ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
            <div className="hero-socials" aria-label="Social profiles">
              <a href={profile.github} target="_blank" rel="noreferrer"><BrandIcon name="github" size={15} /> GitHub <ArrowUpRight size={12} aria-hidden="true" /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><BrandIcon name="linkedin" size={15} /> LinkedIn <ArrowUpRight size={12} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="hero-visual" data-reveal>
            <Suspense fallback={<div className="scene-fallback" aria-hidden="true" />}>
              <HeroScene />
            </Suspense>
            <div className="photo-frame">
              <img src="./images/profile-photo.jpg" alt="Portrait of Pankaj Kumar" />
              <span className="photo-corner photo-corner-top" aria-hidden="true" />
              <span className="photo-corner photo-corner-bottom" aria-hidden="true" />
            </div>
            <p className="portrait-caption"><span>FIG. 01</span><span><MapPin size={13} aria-hidden="true" /> Dumka, Jharkhand</span></p>
            <p className="portrait-chip portrait-chip-award"><Sparkles size={14} aria-hidden="true" /><span><small>BIT Sindri Innovathon</small><b>4th Rank · 2026</b></span></p>
            <p className="portrait-chip portrait-chip-role"><Code2 size={14} aria-hidden="true" /><span><small>Lawazia Tech</small><b>Frontend Developer Intern</b></span></p>
          </div>
        </div>
        <div className="hero-ticker" aria-label="Portfolio highlights">
          <span><b>3rd</b> year CSE · Dumka Engineering College</span>
          <i aria-hidden="true" />
          <span><b>4th</b> rank · BIT Sindri Innovathon 2026</span>
          <i aria-hidden="true" />
          <span><b>Full-stack</b> projects · independent &amp; freelance</span>
        </div>
      </div>
      <a className="hero-scroll" href="#about" aria-label="Scroll to About"><span>Scroll</span><i aria-hidden="true" /></a>
    </section>
  );
}
