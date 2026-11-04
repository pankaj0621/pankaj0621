import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function HeroScene() {
  const hostRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return undefined;

    let renderer;
    let frame = 0;
    let isVisible = !document.hidden;
    let resizeObserver;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.z = 8;

    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setClearColor(0x0d1117, 0);
      host.appendChild(renderer.domElement);
      setReady(true);

      const orb = new THREE.Group();
      const core = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.26, 2),
        new THREE.MeshBasicMaterial({ color: 0x9a79ff, wireframe: true, transparent: true, opacity: 0.48 }),
      );
      const inner = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.78, 1),
        new THREE.MeshBasicMaterial({ color: 0x22d3ee, wireframe: true, transparent: true, opacity: 0.2 }),
      );
      const ringA = new THREE.Mesh(
        new THREE.TorusGeometry(1.8, 0.008, 8, 140),
        new THREE.MeshBasicMaterial({ color: 0xa78bfa, transparent: true, opacity: 0.42 }),
      );
      const ringB = new THREE.Mesh(
        new THREE.TorusGeometry(2.15, 0.006, 8, 140),
        new THREE.MeshBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.28 }),
      );
      ringA.rotation.set(0.95, 0.2, 0.35);
      ringB.rotation.set(0.15, 1.0, -0.4);
      orb.add(core, inner, ringA, ringB);
      scene.add(orb);

      const positions = new Float32Array(260 * 3);
      for (let i = 0; i < 260; i += 1) {
        const radius = 2.5 + Math.random() * 3.4;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);
      }
      const starGeometry = new THREE.BufferGeometry();
      starGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const stars = new THREE.Points(
        starGeometry,
        new THREE.PointsMaterial({ color: 0x9bb9d8, size: 0.018, transparent: true, opacity: 0.5 }),
      );
      scene.add(stars);

      const resize = () => {
        const width = host.clientWidth || 1;
        const height = host.clientHeight || 1;
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };
      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(host);
      resize();

      const render = () => {
        if (!isVisible) return;
        orb.rotation.y += 0.0018;
        orb.rotation.x = Math.sin(performance.now() * 0.00018) * 0.08;
        stars.rotation.y -= 0.00018;
        renderer.render(scene, camera);
        frame = window.requestAnimationFrame(render);
      };
      const onVisibility = () => {
        isVisible = !document.hidden;
        if (isVisible) {
          window.cancelAnimationFrame(frame);
          frame = window.requestAnimationFrame(render);
        } else {
          window.cancelAnimationFrame(frame);
        }
      };
      document.addEventListener("visibilitychange", onVisibility);
      if (isVisible) frame = window.requestAnimationFrame(render);

      return () => {
        document.removeEventListener("visibilitychange", onVisibility);
        window.cancelAnimationFrame(frame);
        resizeObserver?.disconnect();
        scene.traverse((object) => {
          object.geometry?.dispose();
          if (Array.isArray(object.material)) object.material.forEach((material) => material.dispose());
          else object.material?.dispose();
        });
        renderer.dispose();
        renderer.domElement.remove();
      };
    } catch {
      renderer?.dispose();
      setReady(false);
      return undefined;
    }
  }, []);

  return (
    <div className="hero-scene" ref={hostRef} aria-hidden="true">
      {!ready && <div className="scene-fallback" />}
    </div>
  );
}
