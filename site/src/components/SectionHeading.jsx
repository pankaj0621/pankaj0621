export default function SectionHeading({ id, index, eyebrow, title, description }) {
  return (
    <header className="section-heading" data-reveal>
      <p className="section-index"><b>{index}</b> {eyebrow}</p>
      <h2 className="section-title" id={id}>{title}</h2>
      {description && <p className="section-lede">{description}</p>}
    </header>
  );
}
