import { projects } from '@/data/content';
import SectionHeading from './SectionHeading';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-12">
      <SectionHeading index="04" title="Projects" />
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p) => {
          const Card = (
            <div className="group h-full panel p-5 transition-colors hover:border-ink-borderStrong">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-base font-semibold text-paper">
                  {p.title}
                </h3>
                {p.url && (
                  <ExternalLink
                    size={15}
                    className="mt-1 shrink-0 text-paper-dim transition-colors group-hover:text-amber"
                  />
                )}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-paper-muted">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          );

          return p.url ? (
            <a key={p.title} href={p.url} target="_blank" rel="noreferrer" className="block h-full">
              {Card}
            </a>
          ) : (
            <div key={p.title}>{Card}</div>
          );
        })}
      </div>
    </section>
  );
}
