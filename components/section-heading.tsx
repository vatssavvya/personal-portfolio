export function SectionHeading({ id, title, description }: { id: string; title: string; description?: string }) {
  return <div className="section-heading"><h2 id={id}>{title}</h2>{description && <p>{description}</p>}</div>;
}
