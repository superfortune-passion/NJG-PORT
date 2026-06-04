import Image from "next/image";
import { experience } from "@/data/portfolio";
import { isAiHighlight, isAiPlatformLabel, isAiTag } from "@/lib/ai";
import { AiSparkleIcon } from "./AiSparkleIcon";
import { FadeIn } from "./FadeIn";

function companySlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export function Experience() {
  return (
    <section id="experience" className="bg-slate-100/80 py-24 dark:bg-slate-900/50">
      <div className="section-container">
        <FadeIn>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            SaaS, healthcare, AI-integrated platforms, and finance
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
                  id={`job-${companySlug(job.company)}`}
                  className={`relative scroll-mt-24 md:w-[calc(50%-2rem)] ${
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

                  <div className="group relative ml-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900 md:ml-0">
                    <div className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
                      <Image
                        src={job.screenshot}
                        alt={job.screenshotAlt}
                        width={1200}
                        height={675}
                        className="h-auto max-h-48 w-full object-cover object-top transition duration-500 group-hover:scale-[1.03] sm:max-h-56"
                      />
                      {isAiPlatformLabel(job.platformLabel) ? (
                        <span className="ai-platform-badge absolute left-4 top-4 z-10">
                          <AiSparkleIcon className="h-3 w-3" />
                          {job.platformLabel}
                        </span>
                      ) : (
                        <span className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 backdrop-blur-sm dark:bg-slate-900/90 dark:text-slate-100">
                          {job.platformLabel}
                        </span>
                      )}
                    </div>

                    <div className="p-6">
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

                      <ul className="mt-4 space-y-2 text-sm leading-relaxed">
                        {job.highlights.map((item) =>
                          isAiHighlight(item) ? (
                            <li key={item} className="ai-highlight-row">
                              <span className="mb-1 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-violet-500 dark:text-violet-400">
                                <AiSparkleIcon className="h-3 w-3" />
                                AI
                              </span>
                              {item}
                            </li>
                          ) : (
                            <li
                              key={item}
                              className="list-inside list-disc text-slate-600 dark:text-slate-300"
                            >
                              {item}
                            </li>
                          )
                        )}
                      </ul>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {job.tags.map((tag) =>
                          isAiTag(tag) ? (
                            <span key={tag} className="ai-tag">
                              <AiSparkleIcon className="h-3 w-3" />
                              {tag}
                            </span>
                          ) : (
                            <span
                              key={tag}
                              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                            >
                              {tag}
                            </span>
                          )
                        )}
                      </div>
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
