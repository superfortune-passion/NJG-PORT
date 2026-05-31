import { experience } from "@/data/portfolio";
import { FadeIn } from "./FadeIn";

export function Experience() {
  return (
    <section id="experience" className="bg-slate-100/80 py-24 dark:bg-slate-900/50">
      <div className="section-container">
        <FadeIn>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            SaaS, healthcare, cloud security, and finance
          </p>
        </FadeIn>

        <div className="relative mt-12">
          <div
            className="absolute left-4 top-0 hidden h-full w-px bg-slate-300 dark:bg-slate-700 md:left-1/2 md:block md:-translate-x-px"
            aria-hidden
          />

          <div className="space-y-12">
            {experience.map((job, index) => (
              <FadeIn key={job.company} delay={index * 80}>
                <article
                  className={`relative md:w-[calc(50%-2rem)] ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-8"
                      : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div
                    className="absolute left-4 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full border-4 border-white bg-accent dark:border-slate-950 dark:bg-accent-light md:left-auto md:block md:translate-x-0"
                    style={
                      index % 2 === 0
                        ? { right: "-1.375rem" }
                        : { left: "-1.375rem" }
                    }
                  />

                  <div className="ml-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900 md:ml-0">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {job.company}
                        </h3>
                        <p className="mt-1 font-medium text-accent dark:text-accent-light">
                          {job.role}
                        </p>
                      </div>
                      <div className="text-right text-sm text-slate-500 dark:text-slate-400">
                        <p className="font-semibold text-slate-700 dark:text-slate-300">
                          {job.duration}
                        </p>
                        <p>{job.location}</p>
                      </div>
                    </div>

                    <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {job.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
