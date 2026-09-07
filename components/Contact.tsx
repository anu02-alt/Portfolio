import { profile } from '@/data/content';
import SectionHeading from './SectionHeading';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-12">
      <SectionHeading index="06" title="Get in touch" />
      <div className="panel p-6">
        <p className="max-w-prose text-sm leading-relaxed text-paper-muted">
          Open to full-time roles in AML/financial crime compliance, FP&A, and
          accounting or controllership. The fastest way to reach me is email.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 border border-amber-dim bg-amber/10 px-4 py-2 text-sm text-amber transition-colors hover:bg-amber/20"
          >
            <Mail size={16} />
            Email me
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-ink-borderStrong px-4 py-2 text-sm text-paper transition-colors hover:border-paper-muted"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-ink-borderStrong px-4 py-2 text-sm text-paper transition-colors hover:border-paper-muted"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
