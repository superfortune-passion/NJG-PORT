import { summary } from "@/data/portfolio";
import { FadeIn } from "./FadeIn";

export function About() {
  const paragraphs = summary.trim().split("\n\n");

  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <FadeIn>
          <h2 className="section-title">About</h2>
          <p className="section-subtitle">
            Building reliable platforms across industries
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-12 lg:grid-cols-[280px_1fr] lg:items-start">
          <FadeIn delay={100}>
            <div className="mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-100 to-slate-200 shadow-lg dark:border-slate-700 dark:from-slate-800 dark:to-slate-900">
              <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-accent/10 text-3xl font-bold text-accent dark:bg-accent-light/10 dark:text-accent-light">
                  NG
                </div>
                <p className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                  Profile photo placeholder
                </p>
                <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                  Replace with your image
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="space-y-4 text-slate-600 dark:text-slate-300">
              {paragraphs.map((p, i) => (
                <p key={i} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Years Experience", value: "9+" },
                { label: "Industries", value: "5+" },
                { label: "Focus", value: "Full Stack" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-200 bg-white p-4 text-center dark:border-slate-800 dark:bg-slate-900"
                >
                  <p className="text-2xl font-bold text-accent dark:text-accent-light">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
