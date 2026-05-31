"use client";

import { profile, typingSkills } from "@/data/portfolio";
import { TypingCursor } from "./TypingCursor";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-teal-400/20 blur-3xl dark:bg-teal-600/10" />
        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl dark:bg-cyan-600/10" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="section-container py-20">
        <div className="max-w-4xl animate-slide-up">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent dark:text-accent-light">
            Portfolio
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
            {profile.title}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-2 text-lg text-slate-700 dark:text-slate-200 sm:text-xl">
            <span>Specializing in</span>
            <TypingCursor words={typingSkills} />
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/25 transition hover:bg-accent-dark dark:bg-accent-light dark:text-slate-900 dark:hover:bg-teal-300"
            >
              Get in Touch
            </a>
            <a
              href="#experience"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-accent hover:text-accent dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-accent-light dark:hover:text-accent-light"
            >
              View Experience
            </a>
            <a
              href={profile.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-500/50 bg-emerald-50 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100 dark:border-emerald-500/40 dark:bg-emerald-950/50 dark:text-emerald-400 dark:hover:bg-emerald-950"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 text-sm text-slate-500 dark:text-slate-400">
            <span>{profile.location}</span>
            <span className="hidden sm:inline">·</span>
            <a
              href={`mailto:${profile.email}`}
              className="transition hover:text-accent dark:hover:text-accent-light"
            >
              {profile.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
