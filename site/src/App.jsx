import { useEffect } from "react";
import SiteHeader from "./components/SiteHeader.jsx";
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/sections/AboutSection.jsx";
import ProjectsSection from "./components/sections/ProjectsSection.jsx";
import JourneySection from "./components/sections/JourneySection.jsx";
import SkillsSection from "./components/sections/SkillsSection.jsx";
import RecognitionSection from "./components/sections/RecognitionSection.jsx";
import ActivitySection from "./components/sections/ActivitySection.jsx";
import ContactSection from "./components/sections/ContactSection.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import { useScrollReveal } from "./hooks/useScrollReveal.js";

export default function App() {
  useScrollReveal();

  useEffect(() => {
    const markLoaded = () => document.documentElement.classList.add("is-ready");
    markLoaded();
  }, []);

  useEffect(() => {
    let progressFrame = 0;
    const updateProgress = () => {
      if (progressFrame) return;
      progressFrame = window.requestAnimationFrame(() => {
        progressFrame = 0;
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
        document.documentElement.style.setProperty("--page-progress", String(progress));
      });
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      window.cancelAnimationFrame(progressFrame);
      document.documentElement.style.removeProperty("--page-progress");
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <CustomCursor />
      <div className="scroll-progress" aria-hidden="true"><span /></div>
      <SiteHeader />
      <main id="main" tabIndex="-1">
        <HeroSection />
        <AboutSection />
        <ActivitySection />
        <ProjectsSection />
        <SkillsSection />
        <RecognitionSection />
        <JourneySection />
        <ContactSection />
      </main>
      <footer className="site-footer">
        <a className="footer-mark" href="#top" aria-label="Pankaj Kumar — back to top">PK<span>.</span></a>
        <p>Designed and built with care by Pankaj Kumar <span aria-hidden="true">·</span> 2026</p>
        <a href="#top" className="back-top"><span>Back to top</span><span aria-hidden="true">↑</span></a>
      </footer>
    </>
  );
}
