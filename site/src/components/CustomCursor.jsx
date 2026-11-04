import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return undefined;

    const dot = dotRef.current;
    const ring = ringRef.current;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let ringX = targetX;
    let ringY = targetY;
    let animationFrame = 0;

    const position = (element, x, y) => {
      element.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const animateRing = () => {
      ringX += (targetX - ringX) * 0.2;
      ringY += (targetY - ringY) * 0.2;
      position(ring, ringX, ringY);

      if (Math.abs(targetX - ringX) > 0.2 || Math.abs(targetY - ringY) > 0.2) {
        animationFrame = window.requestAnimationFrame(animateRing);
      } else {
        animationFrame = 0;
      }
    };

    const onPointerMove = (event) => {
      if (event.pointerType !== "mouse") return;
      targetX = event.clientX;
      targetY = event.clientY;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
      position(dot, targetX, targetY);
      if (!animationFrame) animationFrame = window.requestAnimationFrame(animateRing);
    };

    const onPointerOver = (event) => {
      const target = event.target instanceof Element
        ? event.target.closest("a, button, [role='button'], input, select, textarea, [data-magnetic]")
        : null;
      ring.classList.toggle("is-active", Boolean(target));
    };

    const hide = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
      ring.classList.remove("is-active", "is-pressed");
    };

    const onPointerOut = (event) => {
      if (!event.relatedTarget) hide();
    };
    const onPointerDown = () => ring.classList.add("is-pressed");
    const onPointerUp = () => ring.classList.remove("is-pressed");

    document.documentElement.classList.add("has-custom-cursor");
    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerover", onPointerOver, { passive: true });
    document.addEventListener("pointerdown", onPointerDown, { passive: true });
    document.addEventListener("pointerup", onPointerUp, { passive: true });
    window.addEventListener("pointerout", onPointerOut, { passive: true });
    window.addEventListener("blur", hide);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointerout", onPointerOut);
      window.removeEventListener("blur", hide);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <span className="custom-cursor-dot" ref={dotRef} aria-hidden="true" />
      <span className="custom-cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
}
