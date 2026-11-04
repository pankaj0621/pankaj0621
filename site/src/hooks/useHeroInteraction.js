import { useEffect, useRef } from "react";

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export function useHeroInteraction(visualRef) {
  const interactionRef = useRef({
    pointerX: 0,
    pointerY: 0,
    dragRotationX: 0,
    dragRotationY: 0,
    dragVelocityX: 0,
    dragVelocityY: 0,
    dragging: false,
  });

  useEffect(() => {
    const visual = visualRef.current;
    if (!visual || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!finePointer) return undefined;
    const interactionRegion = visual.closest(".hero") || visual;
    const theme = window.getComputedStyle(visual);
    const maxTilt = Number.parseFloat(theme.getPropertyValue("--hero-tilt-max")) || 9;
    const dragSpeed = Number.parseFloat(theme.getPropertyValue("--hero-drag-speed")) || 0.006;
    const pointerEase = Number.parseFloat(theme.getPropertyValue("--hero-pointer-ease")) || 0.085;

    let pointerTargetX = 0;
    let pointerTargetY = 0;
    let dragPointerId = null;
    let lastPointerX = 0;
    let lastPointerY = 0;
    let animationFrame = 0;
    const state = interactionRef.current;

    const setVisualMotion = () => {
      const tiltScale = Math.max(1, Math.hypot(state.pointerX, state.pointerY));
      visual.style.setProperty("--hero-mouse-x", state.pointerX.toFixed(3));
      visual.style.setProperty("--hero-mouse-y", state.pointerY.toFixed(3));
      visual.style.setProperty("--hero-tilt-x", `${(-state.pointerY * maxTilt / tiltScale).toFixed(2)}deg`);
      visual.style.setProperty("--hero-tilt-y", `${(state.pointerX * maxTilt / tiltScale).toFixed(2)}deg`);
      visual.style.setProperty("--hero-shift-x", `${(state.pointerX * 5).toFixed(2)}px`);
      visual.style.setProperty("--hero-shift-y", `${(state.pointerY * 5).toFixed(2)}px`);
      visual.style.setProperty("--scene-shift-x", `${(-state.pointerX * 8).toFixed(2)}px`);
      visual.style.setProperty("--scene-shift-y", `${(-state.pointerY * 8).toFixed(2)}px`);
      visual.style.setProperty("--award-shift-x", `${(state.pointerX * 12).toFixed(2)}px`);
      visual.style.setProperty("--award-shift-y", `${(state.pointerY * 12).toFixed(2)}px`);
      visual.style.setProperty("--role-shift-x", `${(-state.pointerX * 9).toFixed(2)}px`);
      visual.style.setProperty("--role-shift-y", `${(-state.pointerY * 9).toFixed(2)}px`);
    };

    const onPointerMove = (event) => {
      if (event.pointerType !== "mouse") return;

      const bounds = interactionRegion.getBoundingClientRect();
      pointerTargetX = clamp(((event.clientX - bounds.left) / bounds.width) * 2 - 1, -1, 1);
      pointerTargetY = clamp(((event.clientY - bounds.top) / bounds.height) * 2 - 1, -1, 1);
      requestTick();

      if (dragPointerId !== event.pointerId) return;

      const deltaX = event.clientX - lastPointerX;
      const deltaY = event.clientY - lastPointerY;
      lastPointerX = event.clientX;
      lastPointerY = event.clientY;
      state.dragRotationY = clamp(state.dragRotationY + deltaX * dragSpeed, -0.58, 0.58);
      state.dragRotationX = clamp(state.dragRotationX + deltaY * dragSpeed, -0.48, 0.48);
      state.dragVelocityY = deltaX * dragSpeed * 0.5;
      state.dragVelocityX = deltaY * dragSpeed * 0.5;
    };

    const onPointerDown = (event) => {
      if (event.pointerType !== "mouse" || event.button !== 0 || !event.target.closest(".hero-visual") || event.target.closest("a, button")) return;
      dragPointerId = event.pointerId;
      lastPointerX = event.clientX;
      lastPointerY = event.clientY;
      state.dragging = true;
      state.dragVelocityX = 0;
      state.dragVelocityY = 0;
      visual.setPointerCapture(event.pointerId);
      requestTick();
    };

    const stopDragging = (event) => {
      if (event.pointerId !== dragPointerId) return;
      dragPointerId = null;
      state.dragging = false;
      if (visual.hasPointerCapture(event.pointerId)) visual.releasePointerCapture(event.pointerId);
      requestTick();
    };

    const onPointerLeave = () => {
      if (dragPointerId === null) {
        pointerTargetX = 0;
        pointerTargetY = 0;
        requestTick();
      }
    };

    const tick = () => {
      if (document.hidden) {
        animationFrame = 0;
        return;
      }

      let isMoving = false;
      const pointerDeltaX = pointerTargetX - state.pointerX;
      const pointerDeltaY = pointerTargetY - state.pointerY;
      if (Math.abs(pointerDeltaX) > 0.001) {
        state.pointerX += pointerDeltaX * pointerEase;
        isMoving = true;
      } else {
        state.pointerX = pointerTargetX;
      }
      if (Math.abs(pointerDeltaY) > 0.001) {
        state.pointerY += pointerDeltaY * pointerEase;
        isMoving = true;
      } else {
        state.pointerY = pointerTargetY;
      }

      if (!state.dragging) {
        if (Math.abs(state.dragVelocityX) > 0.001 || Math.abs(state.dragRotationX) > 0.001) {
          state.dragRotationX = clamp(state.dragRotationX + state.dragVelocityX, -0.6, 0.6) * 0.975;
          state.dragVelocityX *= 0.9;
          isMoving = true;
        }
        if (Math.abs(state.dragVelocityY) > 0.001 || Math.abs(state.dragRotationY) > 0.001) {
          state.dragRotationY = clamp(state.dragRotationY + state.dragVelocityY, -0.7, 0.7) * 0.975;
          state.dragVelocityY *= 0.9;
          isMoving = true;
        }
        if (Math.abs(state.dragVelocityX) <= 0.001 && Math.abs(state.dragRotationX) <= 0.001) {
          state.dragVelocityX = 0;
          state.dragRotationX = 0;
        }
        if (Math.abs(state.dragVelocityY) <= 0.001 && Math.abs(state.dragRotationY) <= 0.001) {
          state.dragVelocityY = 0;
          state.dragRotationY = 0;
        }
      }

      setVisualMotion();
      animationFrame = isMoving ? window.requestAnimationFrame(tick) : 0;
    };

    function requestTick() {
      if (!document.hidden && !animationFrame) animationFrame = window.requestAnimationFrame(tick);
    }

    const onVisibilityChange = () => {
      if (document.hidden) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      } else {
        requestTick();
      }
    };

    interactionRegion.addEventListener("pointermove", onPointerMove);
    interactionRegion.addEventListener("pointerdown", onPointerDown);
    interactionRegion.addEventListener("pointerup", stopDragging);
    interactionRegion.addEventListener("pointercancel", stopDragging);
    interactionRegion.addEventListener("lostpointercapture", stopDragging);
    interactionRegion.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      interactionRegion.removeEventListener("pointermove", onPointerMove);
      interactionRegion.removeEventListener("pointerdown", onPointerDown);
      interactionRegion.removeEventListener("pointerup", stopDragging);
      interactionRegion.removeEventListener("pointercancel", stopDragging);
      interactionRegion.removeEventListener("lostpointercapture", stopDragging);
      interactionRegion.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [interactionRef, visualRef]);

  return interactionRef;
}
