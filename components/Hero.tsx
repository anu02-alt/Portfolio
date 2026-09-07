'use client';

import { useEffect, useState } from 'react';
import { profile } from '@/data/content';
import { withBase } from '@/lib/basePath';
import { MapPin, CircleDot } from 'lucide-react';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = profile.roles[roleIndex];
    const speed = deleting ? 30 : 55;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (typed.length < current.length) {
          setTyped(current.slice(0, typed.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        if (typed.length > 0) {
          setTyped(current.slice(0, typed.length - 1));
        } else {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % profile.roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [typed, deleting, roleIndex]);

  return (
    <section id="top" className="relative mx-auto max-w-4xl px-6 pb-16 pt-16 sm:pt-24">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={withBase(profile.avatar)}
        alt={profile.name}
        className="absolute right-6 top-6 hidden h-64 w-64 border border-ink-border object-cover sm:top-10 md:block"
      />
      <div className="fade-up md:max-w-[calc(100%-19rem)]">
        <p className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-paper-dim">
          <span className="flex items-center gap-1.5 text-teal">
            <CircleDot size={12} strokeWidth={2.5} />
            {profile.status}
          </span>
          <span aria-hidden className="text-ink-borderStrong">
            /
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={12} />
            {profile.location}
          </span>
        </p>

        <h1 className="font-display text-4xl font-semibold leading-[1.1] text-paper sm:text-5xl">
          {profile.name}
        </h1>

        <p className="mt-3 h-8 font-mono text-lg text-amber sm:text-xl">
          {typed}
          <span className="blink text-amber">_</span>
        </p>

        <p className="mt-6 max-w-prose text-[15px] leading-relaxed text-paper-muted">
          {profile.summary}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="border border-amber-dim bg-amber/10 px-4 py-2 text-sm text-amber transition-colors hover:bg-amber/20"
          >
            Get in touch
          </a>
          <a
            href={withBase(profile.resumeFile)}
            className="border border-ink-borderStrong px-4 py-2 text-sm text-paper transition-colors hover:border-paper-muted"
          >
            Download resume
          </a>
        </div>
      </div>
    </section>
  );
}
