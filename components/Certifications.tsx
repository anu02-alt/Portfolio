import { certifications } from '@/data/content';
import SectionHeading from './SectionHeading';
import { BadgeCheck } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-4xl px-6 py-12">
      <SectionHeading index="05" title="Certifications" />
      <div className="panel p-5">
        <h3 className="mb-3 flex items-center gap-2 font-mono text-xs text-paper-dim">
          <BadgeCheck size={14} className="text-teal" />
          Certifications
        </h3>
        <ul className="grid gap-3 sm:grid-cols-3">
          {certifications.map((c) => (
            <li key={c.name}>
              <p className="text-sm text-paper">{c.name}</p>
              {(c.issuer || c.year) && (
                <p className="mt-0.5 font-mono text-xs text-paper-dim">
                  {c.issuer}
                  {c.issuer && c.year ? ' · ' : ''}
                  {c.year}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
