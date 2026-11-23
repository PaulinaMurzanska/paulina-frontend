"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiArrowUpRight, FiLock } from "react-icons/fi";
import data from "@/data/data.json";
import { SectionHeader } from "./atoms";
import type { ProjectItem } from "@/types";
import { getCompanyColors } from "@/data/companyColors";
import { formatDateRange, sortByRecency } from "@/utils";

const experiences: ProjectItem[] = data.experienceTimeline;
const roles = sortByRecency(experiences.filter((item) => !item.isPersonal));
const freelance = sortByRecency(experiences.filter((item) => item.isPersonal));

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative bg-[var(--bg-primary)] scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 md:px-12 lg:px-20">
        <SectionHeader
          badge="Experience"
          badgeColor="accent-2"
          title="Where I've"
          gradientWord="delivered"
          subtitle="Commercial roles, newest first. Open any role for the full case study: challenge, solution and impact."
          className="mb-14"
        />

        <ol className="relative border-l-2 border-[var(--border-soft)] ml-2 md:ml-3 space-y-8 md:space-y-10">
          {roles.map((item, index) => (
            <ExperienceItem key={item.id} item={item} index={index} />
          ))}
        </ol>

        {freelance.length > 0 && (
          <div className="mt-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Freelance projects</h3>
            <p className="text-[var(--text-secondary)] mb-8">Websites I designed, built and shipped for my own clients.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {freelance.map((item) => (
                <FreelanceCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function ExperienceItem({ item, index }: { item: ProjectItem; index: number }) {
  const { color } = getCompanyColors(item.company);
  const isCurrent = item.endDate === "present";

  return (
    <motion.li
      id={`project-${item.id}`}
      className="relative pl-6 md:pl-10 scroll-mt-28"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.2) }}
    >
      <span
        className="absolute -left-[9px] top-8 w-4 h-4 rounded-full ring-4 ring-[var(--bg-primary)]"
        style={{ background: color }}
        aria-hidden="true"
      />

      <article className="surface rounded-2xl p-5 md:p-8" style={{ borderTop: `3px solid ${color}` }}>
        <header className="flex flex-col-reverse md:flex-row md:items-start md:justify-between gap-3 mb-4">
          <div>
            <h3 className="text-xl md:text-2xl font-bold leading-tight">{item.role}</h3>
            <p className="mt-1 text-[var(--text-secondary)]">
              <span className="font-semibold" style={{ color }}>
                {item.company}
              </span>
              <span className="text-[var(--text-muted)]"> · {item.project}</span>
            </p>
            {item.parallelNote && <p className="mt-1 text-sm text-[var(--text-muted)] italic">{item.parallelNote}</p>}
          </div>
          <div className="flex flex-wrap items-center gap-2 md:justify-end md:flex-shrink-0">
            {isCurrent && (
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">Current</span>
            )}
            <span className="px-3 py-1 rounded-full text-xs md:text-sm font-semibold text-white whitespace-nowrap" style={{ background: color }}>
              {formatDateRange(item.startDate, item.endDate)}
            </span>
            {item.projectLogo && (
              <img src={item.projectLogo} alt={`${item.company} logo`} className="h-8 w-auto max-w-[96px] object-contain ml-1" />
            )}
          </div>
        </header>

        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{item.shortDescription}</p>

        {item.highlights && item.highlights.length > 0 && (
          <ul className="space-y-2 mb-5">
            {item.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-[var(--text-primary)] leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} aria-hidden="true" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        <ul className="flex flex-wrap gap-2 mb-6" aria-label={`Technologies used at ${item.company}`}>
          {item.technologies.map((tech) => (
            <li key={tech} className="px-2.5 py-1 bg-[var(--bg-secondary)] rounded-md text-xs md:text-sm text-[var(--text-secondary)]">
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={`/projects/${item.id}?from=project-${item.id}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all hover:-translate-y-0.5"
            style={{ borderColor: color, color }}
          >
            Read case study
            <FiArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
              style={{ background: color }}
            >
              Visit site
              <FiArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <FiLock className="w-4 h-4" aria-hidden="true" />
              Internal product, not publicly available
            </span>
          )}
        </div>
      </article>
    </motion.li>
  );
}

function FreelanceCard({ item }: { item: ProjectItem }) {
  const { color, gradient } = getCompanyColors(item.company);

  return (
    <motion.article
      id={`project-${item.id}`}
      className="surface rounded-2xl overflow-hidden flex flex-col scroll-mt-28"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-2" style={{ background: gradient }} aria-hidden="true" />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h4 className="text-lg font-bold">{item.company}</h4>
          <span className="text-xs text-[var(--text-muted)] whitespace-nowrap">{formatDateRange(item.startDate, item.endDate)}</span>
        </div>
        <p className="text-sm text-[var(--text-muted)] mb-3">{item.project}</p>
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">{item.shortDescription}</p>
        <ul className="flex flex-wrap gap-1.5 mb-5" aria-label={`Technologies used for ${item.company}`}>
          {item.technologies.map((tech) => (
            <li key={tech} className="px-2 py-0.5 bg-[var(--bg-secondary)] rounded text-xs text-[var(--text-secondary)]">
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-4 text-sm font-semibold">
          <Link href={`/projects/${item.id}?from=project-${item.id}`} className="inline-flex items-center gap-1 hover:underline" style={{ color }}>
            Case study <FiArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          {item.url && (
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline" style={{ color }}>
              Live site <FiArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
