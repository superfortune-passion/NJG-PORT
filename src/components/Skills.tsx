"use client";

import { useState } from "react";
import { skillCategories, type Skill, type SkillCategory } from "@/data/portfolio";
import { AiSparkleIcon } from "./AiSparkleIcon";
import { FadeIn } from "./FadeIn";

export function Skills() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <FadeIn>
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">
            Senior AI full stack — LLMs, platforms, and production systems
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, catIndex) => (
            <FadeIn
              key={category.name}
              delay={catIndex * 80}
              className={category.featured ? "sm:col-span-2" : undefined}
            >
              <SkillCard
                category={category}
                hovered={hovered}
                onHover={setHovered}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  category,
  hovered,
  onHover,
}: {
  category: SkillCategory;
  hovered: string | null;
  onHover: (id: string | null) => void;
}) {
  const featured = category.featured;

  return (
    <div
      className={`rounded-2xl border p-5 sm:p-6 ${
        featured
          ? "border-violet-500/40 bg-gradient-to-br from-violet-950/50 via-slate-900 to-slate-900 shadow-lg shadow-violet-500/10 dark:from-violet-950/40"
          : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        {featured && (
          <span className="ai-tag shrink-0 py-0.5">
            <AiSparkleIcon className="h-3 w-3" />
            Core focus
          </span>
        )}
        <h3
          className={`text-lg font-bold ${
            featured ? "text-violet-100" : "text-slate-900 dark:text-white"
          }`}
        >
          {category.name}
        </h3>
      </div>

      {category.groups ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {category.groups.map((group) => (
            <div key={group.label}>
              <p className="text-[10px] font-bold uppercase tracking-wider text-violet-400/90">
                {group.label}
              </p>
              <ul className="mt-2 space-y-2.5">
                {group.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    categoryName={category.name}
                    hovered={hovered}
                    onHover={onHover}
                    ai
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="mt-5 space-y-4">
          {category.skills?.map((skill) => (
            <SkillBar
              key={skill.name}
              skill={skill}
              categoryName={category.name}
              hovered={hovered}
              onHover={onHover}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

function SkillBar({
  skill,
  categoryName,
  hovered,
  onHover,
  ai = false,
}: {
  skill: Skill;
  categoryName: string;
  hovered: string | null;
  onHover: (id: string | null) => void;
  ai?: boolean;
}) {
  const id = `${categoryName}-${skill.name}`;
  const active = hovered === id;

  return (
    <li
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
      className="group"
    >
      <div className="mb-1 flex justify-between gap-2 text-xs sm:text-sm">
        <span
          className={`font-medium leading-snug transition ${
            active
              ? ai
                ? "text-violet-300"
                : "text-accent dark:text-accent-light"
              : "text-slate-700 dark:text-slate-300"
          }`}
        >
          {skill.name}
        </span>
        <span className="shrink-0 text-slate-400">{skill.level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
        <div
          className={`h-full rounded-full transition-all duration-500 ease-out ${
            ai
              ? "bg-gradient-to-r from-violet-500 to-fuchsia-500"
              : "bg-gradient-to-r from-accent to-teal-400 dark:from-accent-light dark:to-teal-300"
          } ${active ? "shadow-md shadow-violet-500/25" : ""}`}
          style={{
            width: active ? `${skill.level}%` : `${skill.level * 0.85}%`,
          }}
        />
      </div>
    </li>
  );
}
