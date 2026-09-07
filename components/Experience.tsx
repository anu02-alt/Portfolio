import { experience } from '@/data/content';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-12">
      <SectionHeading index="02" title="Experience" />
      <div className="space-y-0">
        {experience.map((job, i) => (
          <div key={job.org} className="relative flex gap-5 pb-8 last:pb-0">
            <div className="flex flex-col items-center">
              <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-amber bg-ink" />
              {i < experience.length - 1 && (
                <span className="mt-1 w-px flex-1 bg-ink-border" />
              )}
            </div>
            <div className="flex-1 pb-2">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-lg font-semibold text-paper">
                  {job.role}
                </h3>
                <span className="font-mono text-xs text-paper-dim">{job.period}</span>
              </div>
              <p className="mt-0.5 text-sm text-teal">{job.org}</p>
              <ul className="mt-3 space-y-1.5">
                {job.bullets.map((b, bi) => (
                  <li key={bi} className="text-sm leading-relaxed text-paper-muted">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
