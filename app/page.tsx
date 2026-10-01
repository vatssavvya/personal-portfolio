import { Header } from "@/components/header";
import { Arrow, GitHubIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { SystemArt, ProbabilityArt } from "@/components/system-art";
import { site, experiences, projects, research, skills, currently, publications, bseProject } from "@/lib/portfolio";

function ExternalLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}<Arrow diagonal /><span className="sr-only"> (opens in a new tab)</span></a>;
}

export default function Home() {
  const allProjects = bseProject ? [...projects, bseProject] : projects;
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <main id="main">
      <section className="hero container" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow"><span className="status-dot" /> COMPUTER SCIENCE @ UCLA</div>
          <h1 id="hero-title">Savya Vats<span className="title-period">.</span></h1>
          <p className="hero-subtitle">Software engineering.<br /><span>Machine learning research.</span></p>
          <p className="hero-description">I study Computer Science at UCLA. I work on medical imaging research and backend projects, and I’m exploring quantitative finance through Bruin Software Engineers.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">View projects <Arrow /></a><ExternalLink href={site.github} className="button button-secondary"><GitHubIcon />GitHub</ExternalLink><ExternalLink href={site.linkedin} className="text-link">LinkedIn</ExternalLink></div>
          <p className="hero-location"><span className="location-symbol" aria-hidden="true">⌖</span> Los Angeles, CA <span className="separator">/</span> Originally Greater NYC</p>
        </div>
        <SystemArt />
      </section>
      <div className="hero-strip"><div className="container"><span>SOFTWARE ENGINEERING</span><span className="strip-plus">+</span><span>MACHINE LEARNING</span><span className="strip-plus">+</span><span>QUANTITATIVE PROBLEM SOLVING</span><a href="#about" aria-label="Scroll to about">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a></div></div>

      <section className="section container" id="about" aria-labelledby="about-heading">
        <SectionHeading number="01" label="ABOUT" title="About me" />
        <div className="about-grid"><div className="about-copy"><p className="lead" id="about-heading">My main interest is software engineering, especially backend systems and infrastructure.</p><p>I’m a Computer Science student at UCLA’s Henry Samueli School of Engineering, with a math minor. I’m originally from Bergenfield, New Jersey. Before UCLA, I spent several years on deep-learning research and programmed robots for FIRST Robotics.</p><p>At Brown University Health, I research deep learning for breast cancer imaging. Outside research, I’m interested in how large software systems are built and maintained. I’m also in BSE’s Quantitative Finance fellowship at UCLA.</p></div><aside className="education"><div className="eyebrow">EDUCATION</div><div className="education-logo">UCLA<span>ENGINEERING</span></div><h3>B.S. Computer Science</h3><p>Henry Samueli School of Engineering</p><div className="education-meta"><span>Math minor</span><span>Expected Jun 2030</span></div><div className="education-bottom"><span className="status-dot" /> FIRST YEAR · CLASS OF 2030</div></aside></div>
      </section>

      <section className="section container" id="experience" aria-labelledby="experience-heading">
        <SectionHeading number="02" label="EXPERIENCE" title="Experience" />
        <h2 className="sr-only" id="experience-heading">Experience</h2>
        <div className="experience-list">{experiences.map((experience, i) => <article className={`experience-row ${experience.current ? "current-role" : ""}`} key={experience.organization}><div className="experience-date"><span className="timeline-point" /><span>{experience.dates}</span><small>{experience.location || "Engineering team"}</small></div><div className="experience-content"><div className="role-heading"><div><h3>{experience.organization}</h3><p>{experience.role}<span className="separator">/</span>{experience.team}</p></div>{experience.current && <span className="current-badge">Current</span>}</div><ul>{experience.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></div><span className="row-index" aria-hidden="true">0{i + 1}</span></article>)}</div>
      </section>

      <section className="section container" id="projects" aria-labelledby="projects-heading">
        <SectionHeading number="03" label="SELECTED PROJECTS" title="Selected projects" />
        <h2 className="sr-only" id="projects-heading">Projects</h2>
        <div className="project-grid">{allProjects.map((project, i) => <article key={project.title} className={`project-card ${project.featured ? "featured-project" : ""}`}><div className="project-body"><div className="project-top"><span className="eyebrow">{project.category}</span><span className="project-index">/ 0{i + 1}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-links">{project.url && <ExternalLink href={project.url} className="text-link"><GitHubIcon />View code</ExternalLink>}{project.demoUrl && <ExternalLink href={project.demoUrl} className="text-link">Live demo</ExternalLink>}</div></div>{project.featured && <ProbabilityArt />}</article>)}</div>
      </section>

      <section className="section container" id="research" aria-labelledby="research-heading">
        <SectionHeading number="04" label="RESEARCH" title="Research" description="Medical imaging and deep learning." />
        <h2 className="sr-only" id="research-heading">Research</h2>
        <div className="research-grid">{research.map(item => <article className="research-card" key={item.institution}><div className="research-icon" aria-hidden="true"><svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M9 3h6M10 3v6L4 19a1 1 0 0 0 1 2h14a1 1 0 0 0 1-2L14 9V3M7 15h10"/><path d="M10 18h1m3 0h1" /></svg></div><p className="research-institution">{item.institution}</p><h3>{item.title}</h3><p>{item.description}</p><div className="tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="research-note">{item.note}</div></article>)}</div>
        {publications.length > 0 && <div className="publication-list"><h3>Publications</h3>{publications.map(publication => <ExternalLink key={publication.title} href={publication.url} className="publication-link"><span>{publication.title}<small>{publication.venue} · {publication.year}</small></span></ExternalLink>)}</div>}
      </section>

      <section className="section container" id="focus" aria-labelledby="focus-heading"><SectionHeading number="05" label="TECHNICAL FOCUS" title="Technical focus" /><h2 className="sr-only" id="focus-heading">Technical focus</h2><div className="skills-grid">{skills.map((group, i) => <div className="skill-group" key={group.title}><span className="skill-index">0{i + 1}</span><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div></section>

      <section className="currently container" aria-labelledby="currently-heading"><div><div className="eyebrow"><span className="status-dot" /> IN PROGRESS</div><h2 id="currently-heading">Currently<span className="title-period">.</span></h2><p>What I’m working on now.</p></div><ul>{currently.map(item => <li key={item}><span aria-hidden="true">↗</span>{item}</li>)}</ul></section>

      <section className="contact container" id="contact" aria-labelledby="contact-heading"><div className="eyebrow">06<span className="eyebrow-line" />GET IN TOUCH</div><div className="contact-row"><div><h2 id="contact-heading">Get in touch<span className="title-period">.</span></h2><p>Feel free to reach out about software engineering, research, or a project.</p></div><div className="contact-links">{site.email && <a className="button button-primary" href={`mailto:${site.email}`}>Send an email <Arrow diagonal /></a>}<ExternalLink href={site.linkedin} className="contact-link">Connect on LinkedIn</ExternalLink><ExternalLink href={site.github} className="contact-link">GitHub</ExternalLink></div></div></section>
    </main>
    <footer className="container footer"><a href="#home" className="brand-mark" aria-label="Back to top">sv<span>.</span></a><p>© {new Date().getFullYear()} Savya Vats</p><a className="back-top" href="#home">BACK TO TOP <span aria-hidden="true">↑</span></a></footer>
  </>;
}
