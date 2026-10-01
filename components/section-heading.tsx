export function SectionHeading({ id, title, description, action }: { id: string; title: string; description?: string; action?: React.ReactNode }) {
  return <div className="section-heading"><h2 id={id}>{title}</h2>{description && <p>{description}</p>}{action}</div>;
}
