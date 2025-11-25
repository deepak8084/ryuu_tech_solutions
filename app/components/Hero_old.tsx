"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const item = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* -----------------------------
         FLOAT ANIMATION 
      ----------------------------- */
      gsap.to(item.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* -----------------------------
         CURSOR AVOIDANCE + BOUNDARIES
      ----------------------------- */

      const repelDistance = 130;
      const jumpStrength = 160;

      const move = (e: MouseEvent) => {
        if (!item.current) return;

        const rect = item.current.getBoundingClientRect();
        const imgW = rect.width;
        const imgH = rect.height;

        const centerX = rect.left + imgW / 2;
        const centerY = rect.top + imgH / 2;

        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < repelDistance) {
          const angle = Math.atan2(dy, dx);

          // Proposed new coordinates
          const newX = (item.current.offsetLeft - Math.cos(angle) * jumpStrength);
          const newY = (item.current.offsetTop - Math.sin(angle) * jumpStrength);

          // Screen boundaries
          const screenW = window.innerWidth;
          const screenH = window.innerHeight;

          // Clamp boundaries to keep image inside view
          const clampedX = Math.min(Math.max(newX, imgW / 2), screenW - imgW / 2);
          const clampedY = Math.min(Math.max(newY, imgH / 2), screenH - imgH / 2);

          gsap.to(item.current, {
            x: clampedX - screenW / 2,
            y: clampedY - screenH / 2,
            duration: 0.2,
            ease: "power2.out",
          });
        }
      };

      window.addEventListener("mousemove", move);

      return () => window.removeEventListener("mousemove", move);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero-section">
      <div ref={item} className="center-shape floating">
        <img className="shape-img" src="/animation/shape4.png" alt="shape1" />
      </div>

      <h1 className="hero-text">
        Understood — you want the text to be positioned on top of the image, not beside it.
      </h1>
    </section>
  );
}
