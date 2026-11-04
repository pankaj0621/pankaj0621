import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const context = gsap.context(() => {
      const revealGroups = new Map();
      gsap.utils.toArray("[data-reveal]").forEach((element) => {
        const parent = element.parentElement;
        const siblings = parent
          ? Array.from(parent.querySelectorAll(":scope > [data-reveal]"))
          : [];
        const group = siblings.length > 1 && siblings.length <= 8 ? siblings : [element];
        const key = group[0];
        if (!revealGroups.has(key)) revealGroups.set(key, group);
      });

      revealGroups.forEach((elements) => {
        gsap.fromTo(elements,
          { y: 22, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            stagger: elements.length > 1 ? 0.1 : 0,
            ease: "power2.out",
            scrollTrigger: { trigger: elements[0], start: "top 92%", once: true },
          },
        );
      });
    });
    return () => context.revert();
  }, []);
}
