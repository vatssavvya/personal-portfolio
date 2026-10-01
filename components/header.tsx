"use client";
import { useEffect, useState } from "react";
import { navigation, site } from "@/lib/portfolio";
import { Arrow } from "./icons";
export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const sections = document.querySelectorAll<HTMLElement>("main > section[id]");
      let current = "";
      sections.forEach(section => {
        if (section.getBoundingClientRect().top <= 160) current = section.id;
      });
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) current = "contact";
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return <header className="site-header"><div className="container nav-inner">
    <a className="brand" href="#home" onClick={() => setOpen(false)} aria-label="Savya Vats, back to top"><span className="brand-mark">SV</span><span className="brand-name">Savya Vats</span></a>
    <button className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <span aria-hidden="true">×</span> : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M4 8h16M4 16h16"/></svg>}</button>
    <nav id="main-navigation" aria-label="Main navigation" className={open ? "navigation is-open" : "navigation"} onKeyDown={e => { if (e.key === "Escape") { setOpen(false); document.querySelector<HTMLButtonElement>(".menu-toggle")?.focus(); } }}>
      {navigation.map(item => <a href={`#${item.id}`} key={item.id} aria-current={active === item.id ? "location" : undefined} onClick={() => setOpen(false)}>{item.label}</a>)}
      {site.resumeUrl && <a href={site.resumeUrl}>Resume <Arrow diagonal /></a>}
      <a className="nav-contact" href="#contact" aria-current={active === "contact" ? "location" : undefined} onClick={() => setOpen(false)}>Contact <Arrow diagonal /></a>
    </nav>
  </div></header>;
}
