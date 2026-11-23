"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import data from "@/data/data.json";
import type { ImpactStory, ProjectItem } from "@/types";
import { getCompanyColors } from "@/data/companyColors";
import { formatDateRange } from "@/utils";
import { SectionHeader } from "./atoms";

type StoryProject = ProjectItem & { impactStory: ImpactStory };

const stories = (data.experienceTimeline as ProjectItem[])
  .filter((item): item is StoryProject => Boolean(item.impactStory))
  .sort((a, b) => a.showcaseOrder - b.showcaseOrder);

const steps = [
  { key: "gap", label: "The gap", accent: "#db2777" },
  { key: "action", label: "What I did", accent: "#7c3aed" },
  { key: "result", label: "The result", accent: "#059669" },
] as const;

export function ImpactStories() {
  const [featured, ...rest] = stories;

  return (
    <section id="impact" className="py-24 md:py-32 bg-[var(--bg-primary)] relative overflow-hidden scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20">
        <SectionHeader
          badge="Impact"
          badgeColor="accent-3"
          title="Gaps I found,"
          gradientWord="and how I filled them"
          subtitle="Every project needed something different. These are the problems I spotted, what I did about them, and what changed."
          className="mb-14"
        />

        {featured && <StoryCard story={featured} featured />}

        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          {rest.map((story, index) => (
            <StoryCard key={story.id} story={story} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StoryCard({ story, featured = false, index = 0 }: { story: StoryProject; featured?: boolean; index?: number }) {
  const { color, gradient } = getCompanyColors(story.company);

  return (
    <motion.article
      className="surface rounded-2xl overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.24) }}
    >
      <div className="h-1.5" style={{ background: gradient }} aria-hidden="true" />
      <div className={`flex flex-col flex-1 ${featured ? "p-6 md:p-10" : "p-6 md:p-8"}`}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm mb-3">
          <span className="font-bold" style={{ color }}>
            {story.company}
          </span>
          <span className="text-[var(--text-muted)]">{story.role}</span>
          <span className="text-[var(--text-muted)]">· {formatDateRange(story.startDate, story.endDate)}</span>
          {featured && (
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">Latest</span>
          )}
        </div>

        <h3 className={`font-bold leading-tight mb-6 ${featured ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"}`}>
          {story.impactStory.headline}
        </h3>

        <dl className={`grid gap-5 mb-6 ${featured ? "md:grid-cols-3 md:gap-8" : ""}`}>
          {steps.map((step) => (
            <div key={step.key} className="border-l-2 pl-4" style={{ borderColor: step.accent }}>
              <dt className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: step.accent }}>
                {step.label}
              </dt>
              <dd className="text-[var(--text-secondary)] leading-relaxed">{story.impactStory[step.key]}</dd>
            </div>
          ))}
        </dl>

        <Link
          href={`/projects/${story.id}?from=impact`}
          className="mt-auto inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all w-fit"
          style={{ color }}
        >
          Read the full case study
          <FiArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  );
}
