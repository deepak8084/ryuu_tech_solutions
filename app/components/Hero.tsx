"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const item = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ======================================================
         PHYSICS VARIABLES
      ====================================================== */
      let x = window.innerWidth / 2;
      let y = window.innerHeight / 2;

      let vx = 0;
      let vy = 0;

      const friction = 0.92;
      const gravity = 0.0;
      const bounceEnergy = 0.75;

      const repelForce = 60000;
      const randomImpulse = 0.4;

      /* ======================================================
         MAIN PHYSICS LOOP
      ====================================================== */
      const loop = () => {
        if (!item.current) return;

        const rect = item.current.getBoundingClientRect();
        const imgW = rect.width;
        const imgH = rect.height;

        /* -----------------------------
           1. Random impulse (organic drift)
        ----------------------------- */
        vx += (Math.random() - 0.5) * randomImpulse;
        vy += (Math.random() - 0.5) * randomImpulse;

        /* -----------------------------
           2. Gravity
        ----------------------------- */
        vy += gravity;

        /* -----------------------------
           3. Friction
        ----------------------------- */
        vx *= friction;
        vy *= friction;

        /* -----------------------------
           4. Mouse Repulsion Force
        ----------------------------- */
        window.onmousemove = (e) => {
          const dx = e.clientX - x;
          const dy = e.clientY - y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 50000) {
            const force = repelForce / distSq;
            vx -= (dx / Math.sqrt(distSq)) * force;
            vy -= (dy / Math.sqrt(distSq)) * force;
          }
        };

        /* -----------------------------
           5. Apply Velocity
        ----------------------------- */
        x += vx;
        y += vy;

        /* -----------------------------
           6. Boundary Bounce (ground = 10px)
        ----------------------------- */
        const ground = window.innerHeight - imgH / 2 - 10;

        // LEFT wall
        if (x < imgW / 2) {
          x = imgW / 2;
          vx = -vx * bounceEnergy;
        }

        // RIGHT wall
        if (x > window.innerWidth - imgW / 2) {
          x = window.innerWidth - imgW / 2;
          vx = -vx * bounceEnergy;
        }

        // TOP wall
        if (y < imgH / 2) {
          y = imgH / 2;
          vy = -vy * bounceEnergy;
        }

        // BOTTOM ground
        if (y > ground) {
          y = ground;
          vy = -vy * bounceEnergy;
        }

        /* -----------------------------
           7. Move the Image
        ----------------------------- */
        gsap.set(item.current, {
          x: x - window.innerWidth / 2,
          y: y - window.innerHeight / 2,
        });

        requestAnimationFrame(loop);
      };

      requestAnimationFrame(loop);

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero-section">

      {/* Floating Physics Image */}
      <div ref={item} className="center-shape floating">
        <img className="shape-img" src="/animation/shape4.png" alt="shape1" />
      </div>

      {/* Fullscreen text */}
      <h1 className="hero-text">Physics Motion — Friction, Gravity, Repulsion & Bounce.</h1>

    </section>
  );
}
