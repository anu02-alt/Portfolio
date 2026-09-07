import { education } from '@/data/content';
import SectionHeading from './SectionHeading';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-4xl px-6 py-12">
      <SectionHeading index="03" title="Education" />
      <div className="space-y-4">
        {education.map((ed) => (
          <div key={ed.school} className="panel flex gap-4 p-5">
            <GraduationCap size={20} className="mt-0.5 shrink-0 text-amber" />
            <div>
              <h3 className="font-display text-lg font-semibold text-paper">
                {ed.school}
              </h3>
              <p className="mt-0.5 text-sm text-paper-muted">{ed.degree}</p>
              <p className="mt-1 font-mono text-xs text-paper-dim">{ed.period}</p>
              {ed.notes.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {ed.notes.map((n, i) => (
                    <li key={i} className="text-sm text-paper-muted">
                      {n}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
