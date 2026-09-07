'use client';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-border bg-ink/85 backdrop-blur">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3">
        <a
          href="#top"
          className="font-mono text-sm text-paper-muted tracking-tight hover:text-amber transition-colors"
        >
          anushka<span className="text-amber">.</span>dev
        </a>
        <ul className="flex gap-5">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-paper-muted hover:text-paper transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
