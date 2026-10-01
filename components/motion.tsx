"use client";

import { useEffect } from "react";

export function Motion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations: Animation[] = [];
    let observer: IntersectionObserver | undefined;

    const stop = () => {
      observer?.disconnect();
      animations.forEach(animation => animation.cancel());
    };
    const reveal = (element: Element, delay = 0) => {
      animations.push(element.animate(
        [{ opacity: 0.65, transform: "translateY(18px)" }, { opacity: 1, transform: "translateY(0)" }],
        { duration: 650, delay, easing: "cubic-bezier(.2,.7,.2,1)" },
      ));
    };

    if (!preference.matches) {
      document.querySelectorAll(".hero-copy > *, .hero-note").forEach((element, index) => reveal(element, index * 65));
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer?.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      document.querySelectorAll(".section-heading, .experience-row, .project-row, .research-card, .skill-group, .currently, .contact-row").forEach(element => observer?.observe(element));
    }
    preference.addEventListener("change", stop);
    return () => {
      stop();
      preference.removeEventListener("change", stop);
    };
  }, []);

  return <div className="reading-progress" aria-hidden="true" />;
}
