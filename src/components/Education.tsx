import { education } from "@/data/portfolio";
import { FadeIn } from "./FadeIn";

export function Education() {
  return (
    <section id="education" className="bg-slate-100/80 py-24 dark:bg-slate-900/50">
      <div className="section-container">
        <FadeIn>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic background</p>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="relative mt-12 max-w-2xl">
            <div className="absolute left-6 top-0 h-full w-px bg-accent/30 dark:bg-accent-light/30" />
            <article className="relative ml-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="absolute -left-[2.125rem] top-8 flex h-4 w-4 items-center justify-center rounded-full border-4 border-white bg-accent dark:border-slate-900 dark:bg-accent-light">
                <span className="sr-only">Timeline marker</span>
              </div>
              <p className="text-sm font-semibold text-accent dark:text-accent-light">
                {education.duration}
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                {education.degree}
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                {education.school}
              </p>
            </article>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
