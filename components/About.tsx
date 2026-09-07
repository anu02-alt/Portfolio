import { profile, education, skills } from '@/data/content';
import SectionHeading from './SectionHeading';

const facts = [
  { label: 'Based in', value: profile.location },
  { label: 'Education', value: education[0]?.degree ?? '' },
  { label: 'Background', value: 'Forensic & financial crime analytics' },
  { label: 'Certified in', value: 'Anti-Money Laundering (AML)' },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-12">
      <SectionHeading index="01" title="About" />
      <div className="panel p-5">
        <dl className="grid gap-4 sm:grid-cols-2">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="font-mono text-xs text-paper-dim">{f.label}</dt>
              <dd className="mt-1 text-sm text-paper">{f.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-5 border-t border-ink-border pt-4">
          <p className="font-mono text-xs text-paper-dim">Tools & skills</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {Object.values(skills)
              .flat()
              .map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
