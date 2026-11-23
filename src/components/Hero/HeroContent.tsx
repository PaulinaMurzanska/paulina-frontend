"use client";

import { motion } from "framer-motion";
import { FiArrowDown, FiDownload, FiMail } from "react-icons/fi";
import data from "@/data/data.json";
import { getYearsOfExperience } from "@/utils";

const { profile } = data;

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function HeroContent() {
  const years = getYearsOfExperience(profile.careerStart);

  const facts = [
    { label: "Commercial experience", value: `${years}+ years` },
    { label: "Leadership", value: "2× Lead Front-end" },
    { label: "Location", value: "Kraków · Remote" },
    { label: "Languages", value: "English C1 · Polish" },
  ];

  return (
    <div>
      <motion.div {...fadeInUp} transition={{ duration: 0.5 }} className="mb-6 flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[var(--border-soft)] text-sm font-medium text-[var(--text-secondary)] shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          {profile.availability} · {profile.employment}
        </span>
      </motion.div>

      <motion.p
        {...fadeInUp}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-base md:text-lg font-semibold text-[var(--text-primary)] mb-3"
      >
        Hi, I&apos;m {profile.name} <span className="text-[var(--text-muted)] font-normal">— {profile.role}</span>
      </motion.p>

      <motion.h1
        className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-balance mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <span className="block">React front-end at the core.</span>
        <span className="block gradient-text">Much more around it.</span>
      </motion.h1>

      <motion.p
        className="text-base md:text-xl text-[var(--text-secondary)] max-w-2xl mb-6 leading-relaxed"
        {...fadeInUp}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {profile.buildingExperience} years building with <strong className="text-[var(--text-primary)]">React, Next.js, TypeScript and Vue</strong>,{" "}
        {years}+ of them in commercial client teams, for e-commerce, ERP, healthcare, education and insurance. Every project needs something different. I adapt fast,
        find what&apos;s missing, whether that&apos;s <strong className="text-[var(--text-primary)]">architecture, documentation or tooling</strong>,
        and build it. I work with <strong className="text-[var(--text-primary)]">AI agents</strong> from Jira ticket to release,
        and I review every line they write.
      </motion.p>

      <motion.ul
        className="flex flex-wrap gap-2 mb-8"
        aria-label="Core skills"
        {...fadeInUp}
        transition={{ duration: 0.6, delay: 0.25 }}
      >
        {profile.heroKeywords.map((keyword) => (
          <li
            key={keyword}
            className="px-3 py-1 rounded-full text-sm font-medium bg-white border border-[var(--border-soft)] text-[var(--text-secondary)]"
          >
            {keyword}
          </li>
        ))}
      </motion.ul>

      <motion.div
        className="flex flex-wrap items-center gap-3 mb-10"
        {...fadeInUp}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <a
          href={profile.cv}
          download="Paulina-Murzanska-CV.pdf"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--text-primary)] text-white font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all"
        >
          <FiDownload className="w-4 h-4" aria-hidden="true" />
          Download CV
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#db2777] text-white font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all"
        >
          <FiMail className="w-4 h-4" aria-hidden="true" />
          Contact me
        </a>
        <a
          href="#impact"
          className="inline-flex items-center gap-2 px-4 py-3 text-[var(--text-secondary)] font-medium hover:text-[var(--text-primary)] transition-colors"
        >
          See my impact
          <FiArrowDown className="w-4 h-4" aria-hidden="true" />
        </a>
      </motion.div>

      <motion.dl
        className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 2xl:grid-cols-4 gap-4 max-w-2xl"
        {...fadeInUp}
        transition={{ duration: 0.6, delay: 0.35 }}
      >
        {facts.map((fact) => (
          <div key={fact.label} className="border-l-2 border-[var(--accent-1)] pl-3">
            <dt className="text-xs uppercase tracking-wide text-[var(--text-muted)]">{fact.label}</dt>
            <dd className="text-sm md:text-base font-semibold text-[var(--text-primary)]">{fact.value}</dd>
          </div>
        ))}
      </motion.dl>
    </div>
  );
}
