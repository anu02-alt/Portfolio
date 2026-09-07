import { profile } from '@/data/content';

export default function Footer() {
  return (
    <footer className="border-t border-ink-border">
      <div className="mx-auto flex max-w-4xl flex-col gap-2 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-paper-dim">
          {profile.name} · built with Next.js
        </p>
        <p className="font-mono text-xs text-paper-dim">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
