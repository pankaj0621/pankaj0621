import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../data/portfolio.js";
import BrandIcon from "./BrandIcon.jsx";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const onKeyDown = (event) => event.key === "Escape" && setMenuOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Pankaj Kumar, home" onClick={closeMenu}>
          <span className="brand-mark">PK</span>
          <span className="brand-name">Pankaj Kumar<span>.</span></span>
        </a>
        <nav className={`nav-links${menuOpen ? " is-open" : ""}`} aria-label="Main navigation" id="primary-navigation">
          {profile.navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="icon-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="Pankaj Kumar on GitHub">
            <BrandIcon name="github" size={17} />
          </a>
          <a className="icon-link" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="Pankaj Kumar on LinkedIn">
            <BrandIcon name="linkedin" size={16} />
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}
