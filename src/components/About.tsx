"use client";

import { motion } from "framer-motion";
import data from "@/data/data.json";
import { SectionHeader, GradientButton } from "./atoms";

const { about, profile } = data;

const strengths = [
  {
    title: "I adapt fast",
    description: "Seven commercial products since 2022, each with its own stack, from Shopify Hydrogen to NetSuite and Salesforce.",
  },
  {
    title: "I find the gap and fill it",
    description: "Documentation scattered across SharePoint became a docs app for 5 applications and 15 releases. A one-page Vue app became a proper SPA.",
  },
  {
    title: "I know when AI is wrong",
    description: "I rescued an app a non-technical client had generated with AI, because I understood the React, Vue and NetSuite code underneath.",
  },
  {
    title: "I lead and communicate",
    description: "Stepped up to Lead Front-end Developer by fixing a broken architecture, after 12+ years managing teams of 20+ in hotels.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-[var(--bg-primary)] scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 md:px-12 lg:px-20 relative z-10">
        <SectionHeader badge="About me" badgeColor="accent-3" title="Why" gradientWord="work with me" className="mb-14" />

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 items-start">
          <motion.div
            className="surface rounded-2xl p-6 md:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4">From hotel management to front-end engineering</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{about.intro}</p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              I work hard, I learn fast and I think analytically. On every project I look for what&apos;s missing and
              make it better for the team and the client. I adapted early to the AI era: I don&apos;t use agents to avoid
              the work, I use them to do more of it, at a higher standard.
            </p>

            <dl className="grid sm:grid-cols-2 gap-4 mb-8 text-sm">
              <div>
                <dt className="text-[var(--text-muted)] uppercase tracking-wide text-xs mb-1">Education</dt>
                <dd className="text-[var(--text-primary)]">
                  MSc Economics (HR Management), Cracow University of Economics · Full-stack bootcamp, Codebrainers (420h)
                </dd>
              </div>
              <div>
                <dt className="text-[var(--text-muted)] uppercase tracking-wide text-xs mb-1">Languages</dt>
                <dd className="text-[var(--text-primary)]">{profile.languages.join(" · ")}</dd>
              </div>
              <div>
                <dt className="text-[var(--text-muted)] uppercase tracking-wide text-xs mb-1">Location</dt>
                <dd className="text-[var(--text-primary)]">
                  {profile.location} · {profile.workModes}
                </dd>
              </div>
              <div>
                <dt className="text-[var(--text-muted)] uppercase tracking-wide text-xs mb-1">Open to</dt>
                <dd className="text-[var(--text-primary)]">{profile.employment}</dd>
              </div>
            </dl>

            <GradientButton
              href="/about"
              size="sm"
              icon={
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              }
            >
              Read my full story
            </GradientButton>
          </motion.div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {strengths.map((strength, index) => (
              <motion.li
                key={strength.title}
                className="rounded-2xl bg-white border border-[var(--border-soft)] p-5 border-l-4 border-l-[#7c3aed]"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <h4 className="font-bold mb-1">{strength.title}</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{strength.description}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
