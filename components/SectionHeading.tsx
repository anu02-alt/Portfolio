export default function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="mb-6 flex items-baseline gap-3">
      <span className="font-mono text-xs text-paper-dim">{index}</span>
      <h2 className="font-display text-2xl font-semibold text-paper">{title}</h2>
    </div>
  );
}
