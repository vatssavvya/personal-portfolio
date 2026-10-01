"use client";

import { useEffect } from "react";

export function Motion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const targets = document.querySelectorAll(".section-heading, .about-copy, .education, .experience-row, .project-row, .research-card, .skill-group, .currently, .contact-row");
    const animations = new Set<Animation>();
    let observer: IntersectionObserver | undefined;

    const stop = () => {
      observer?.disconnect();
      animations.forEach(animation => animation.cancel());
      animations.clear();
      targets.forEach(element => element.removeAttribute("data-scroll-motion"));
    };
    const reveal = (element: Element, delay = 0) => {
      const animation = element.animate(
        [{ opacity: 0.25, transform: "translateY(32px)" }, { opacity: 1, transform: "translateY(0)" }],
        { duration: 800, delay, easing: "cubic-bezier(.2,.7,.2,1)" },
      );
      animations.add(animation);
      animation.onfinish = () => animations.delete(animation);
    };
    const start = () => {
      stop();
      if (preference.matches) return;
      document.querySelectorAll(".hero-copy > *, .hero-note").forEach((element, index) => reveal(element, index * 65));
      if (CSS.supports("animation-timeline", "view()")) {
        targets.forEach(element => element.setAttribute("data-scroll-motion", "true"));
      } else {
        observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              reveal(entry.target);
              observer?.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });
        targets.forEach(element => observer?.observe(element));
      }
    };
    start();
    preference.addEventListener("change", start);
    return () => {
      stop();
      preference.removeEventListener("change", start);
    };
  }, []);

  return <div className="reading-progress" aria-hidden="true" />;
}
