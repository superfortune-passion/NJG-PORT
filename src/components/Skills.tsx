"use client";

import { useState } from "react";
import { skillCategories } from "@/data/portfolio";
import { FadeIn } from "./FadeIn";

export function Skills() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <FadeIn>
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">
            Full stack, cloud, and platform engineering
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {skillCategories.map((category, catIndex) => (
            <FadeIn key={category.name} delay={catIndex * 100}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {category.name}
                </h3>
                <ul className="mt-6 space-y-5">
                  {category.skills.map((skill) => {
                    const id = `${category.name}-${skill.name}`;
                    const active = hovered === id;

                    return (
                      <li
                        key={skill.name}
                        onMouseEnter={() => setHovered(id)}
                        onMouseLeave={() => setHovered(null)}
                        className="group"
                      >
                        <div className="mb-2 flex justify-between text-sm">
                          <span
                            className={`font-medium transition ${
                              active
                                ? "text-accent dark:text-accent-light"
                                : "text-slate-700 dark:text-slate-300"
                            }`}
                          >
                            {skill.name}
                          </span>
                          <span className="text-slate-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r from-accent to-teal-400 transition-all duration-500 ease-out dark:from-accent-light dark:to-teal-300 ${
                              active ? "shadow-md shadow-teal-500/30" : ""
                            }`}
                            style={{
                              width: active ? `${skill.level}%` : `${skill.level * 0.85}%`,
                            }}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
