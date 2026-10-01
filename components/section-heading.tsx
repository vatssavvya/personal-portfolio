export function SectionHeading({ number, label, title, description }: { number: string; label: string; title: string; description?: string }) {
  return <div className="section-heading"><div className="eyebrow"><span>{number}</span><span className="eyebrow-line" />{label}</div><div className="heading-row"><h2>{title}</h2>{description && <p>{description}</p>}</div></div>;
}
