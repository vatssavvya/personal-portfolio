import { Motion } from "@/components/motion";
import { Header } from "@/components/header";
import { Arrow, GitHubIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { site, experiences, projects, research, skills, currently, publications, bseProject } from "@/lib/portfolio";

function ExternalLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}<Arrow diagonal /><span className="sr-only"> (opens in a new tab)</span></a>;
}

export default function Home() {
  const allProjects = bseProject ? [...projects, bseProject] : projects;
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <Motion />
    <main id="main">
      <section className="hero container" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow">UCLA · CLASS OF 2030</div>
          <h1 id="hero-title">Savya Vats</h1>
          <p className="hero-subtitle">Computer Science at UCLA</p>
          <p className="hero-description">I study Computer Science at UCLA. I work on medical imaging research and backend projects, and I’m exploring quantitative finance through Bruin Software Engineers.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">View projects <Arrow /></a><ExternalLink href={site.github} className="button button-secondary"><GitHubIcon />GitHub</ExternalLink><ExternalLink href={site.linkedin} className="text-link">LinkedIn</ExternalLink></div>
          <p className="hero-location">New York City and Los Angeles</p>
        </div>
        <aside className="hero-note" aria-labelledby="hero-note-heading">
          <p className="eyebrow" id="hero-note-heading">Where I’m spending my time</p>
          <a href="#research"><span className="note-topic">Medical imaging</span><strong>Radiology AI Lab</strong><span>Brown University Health</span></a>
          <a href="#experience"><span className="note-topic">Quantitative finance</span><strong>BSE Fellowship</strong><span>UCLA · Fall 2026</span></a>
          <a href="#projects"><span className="note-topic">Personal projects</span><strong>Probability &amp; backend software</strong><span>Python, FastAPI, PostgreSQL</span></a>
        </aside>
      </section>

      <section className="section container" id="about" aria-labelledby="about-heading">
        <SectionHeading id="about-heading" title="About me" />
        <div className="about-grid"><div className="about-copy"><p className="lead">My main interest is software engineering, especially backend systems and infrastructure.</p><p>I’m a Computer Science student at UCLA’s Henry Samueli School of Engineering, with a math minor. I’m originally from the Greater NYC area. Before UCLA, I spent several years on deep-learning research and programmed robots for FIRST Robotics.</p><p>At Brown University Health, I research deep learning for breast cancer imaging. Outside research, I’m interested in how large software systems are built and maintained. I’m also in BSE’s Quantitative Finance fellowship at UCLA.</p></div><aside className="education"><div className="eyebrow">EDUCATION</div><div className="education-logo">UCLA<span>ENGINEERING</span></div><h3>B.S. Computer Science</h3><p>Henry Samueli School of Engineering</p><div className="education-meta"><span>Math minor</span><span>Expected Jun 2030</span></div><div className="education-bottom"><span className="status-dot" /> FIRST YEAR · CLASS OF 2030</div></aside></div>
      </section>

      <section className="section container" id="experience" aria-labelledby="experience-heading">
        <SectionHeading id="experience-heading" title="Experience" action={<ExternalLink href={site.linkedin} className="text-link">Experience on LinkedIn</ExternalLink>} />

        <div className="experience-list">{experiences.map((experience) => <article className={`experience-row ${experience.current ? "current-role" : ""}`} key={experience.organization}><div className="experience-date"><span className="timeline-point" /><span>{experience.dates}</span><small>{experience.location || "Engineering team"}</small></div><div className="experience-content"><div className="role-heading"><div><h3>{experience.organization}</h3><p>{experience.role}<span className="separator">/</span>{experience.team}</p></div>{experience.current && <span className="current-badge">Current</span>}</div><ul>{experience.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></div></article>)}</div>
      </section>

      <section className="section container" id="projects" aria-labelledby="projects-heading">
        <SectionHeading id="projects-heading" title="Selected projects" action={<ExternalLink href={site.github} className="text-link">All repositories on GitHub</ExternalLink>} />

        <div className="project-list">{allProjects.map((project) => <article key={project.title} className={project.featured ? "project-row featured-project" : "project-row"}>
          <div className="project-title"><p className="eyebrow">{project.category}</p><h3>{project.url ? <ExternalLink href={project.url} className="project-title-link">{project.title}</ExternalLink> : project.title}</h3>{project.featured && <span className="project-featured-label">Featured project</span>}</div>
          <div className="project-detail"><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-links">{project.url && <ExternalLink href={project.url} className="text-link"><GitHubIcon />View code</ExternalLink>}{project.demoUrl && <ExternalLink href={project.demoUrl} className="text-link">Live demo</ExternalLink>}</div></div>
        </article>)}</div>
      </section>

      <section className="section container" id="research" aria-labelledby="research-heading">
        <SectionHeading id="research-heading" title="Research" description="Medical imaging and deep learning." />

        <div className="research-grid">{research.map(item => <article className="research-card" key={item.institution}><p className="research-institution">{item.institution}</p><h3>{item.title}</h3><p>{item.description}</p><div className="tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="research-note">{item.note}</div></article>)}</div>
        {publications.length > 0 && <div className="publication-list"><h3>Publications</h3>{publications.map(publication => <ExternalLink key={publication.title} href={publication.url} className="publication-link"><span>{publication.title}<small>{publication.venue} · {publication.year}</small></span></ExternalLink>)}</div>}
      </section>

      <section className="section container" id="focus" aria-labelledby="focus-heading"><SectionHeading id="focus-heading" title="Technical focus" /><div className="skills-grid">{skills.map((group) => <div className="skill-group" key={group.title}><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div></section>

      <section className="currently container" aria-labelledby="currently-heading"><div><h2 id="currently-heading">Currently</h2><p>What I’m working on now.</p></div><ul>{currently.map(item => <li key={item}>{item}</li>)}</ul></section>

      <section className="contact container" id="contact" aria-labelledby="contact-heading"><div className="contact-row"><div><h2 id="contact-heading">Get in touch</h2><p>Feel free to reach out about software engineering, research, or a project.</p></div><div className="contact-links">{site.email && <a className="contact-link contact-email" href={`mailto:${site.email}`}>{site.email} <Arrow diagonal /></a>}<ExternalLink href={site.linkedin} className="contact-link">Connect on LinkedIn</ExternalLink><ExternalLink href={site.github} className="contact-link">GitHub</ExternalLink></div></div></section>
    </main>
    <footer className="container footer"><a href="#home" className="brand-mark" aria-label="Back to top">SV</a><p>© {new Date().getFullYear()} Savya Vats</p><div className="footer-socials"><ExternalLink href={site.github}>GitHub</ExternalLink><ExternalLink href={site.linkedin}>LinkedIn</ExternalLink></div><a className="back-top" href="#home">BACK TO TOP <span aria-hidden="true">↑</span></a></footer>
  </>;
}
