import { profile } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="section-container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {year} {profile.name}. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="text-slate-500 transition hover:text-accent dark:text-slate-400 dark:hover:text-accent-light"
          >
            Email
          </a>
          <a
            href={profile.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
          >
            WhatsApp
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition hover:text-accent dark:text-slate-400 dark:hover:text-accent-light"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
