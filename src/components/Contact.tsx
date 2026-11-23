"use client";

import { motion } from "framer-motion";
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import data from "@/data/data.json";
import { SectionBadge } from "./atoms";

const { profile } = data;

const links = [
  { label: "Phone", value: profile.phone, href: profile.phoneHref, icon: FiPhone, external: false },
  { label: "LinkedIn", value: "LinkedIn profile", href: profile.linkedin, icon: FiLinkedin, external: true },
  { label: "GitHub", value: "PaulinaMurzanska", href: profile.github, icon: FiGithub, external: true },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden scroll-mt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[var(--bg-secondary)]" />

      <div className="max-w-4xl mx-auto px-4 md:px-12 lg:px-20 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionBadge color="accent-4">{profile.availability}</SectionBadge>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Got a gap in your product? <span className="gradient-text">Let&apos;s fill it.</span>
          </h2>

          <p className="text-base md:text-xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
            I&apos;m looking for my next role as a React / front-end developer in a team that takes AI-augmented
            development seriously. {profile.employment}. {profile.workModes}.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#db2777] text-white font-semibold text-base md:text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <FiMail className="w-5 h-5" aria-hidden="true" />
              {profile.email}
            </a>
            <a
              href={profile.cv}
              download="Paulina-Murzanska-CV.pdf"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[var(--text-primary)] text-white font-semibold text-base md:text-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <FiDownload className="w-5 h-5" aria-hidden="true" />
              Download CV
            </a>
          </div>

          <ul className="grid sm:grid-cols-3 gap-4 text-left">
            {links.map(({ label, value, href, icon: LinkIcon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="surface rounded-2xl p-4 flex items-center gap-3 hover:-translate-y-0.5 transition-transform"
                >
                  <span className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center text-[#7c3aed] flex-shrink-0">
                    <LinkIcon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wide text-[var(--text-muted)]">{label}</span>
                    <span className="block text-sm font-medium text-[var(--text-primary)] truncate">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-8 inline-flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <FiMapPin className="w-4 h-4" aria-hidden="true" />
            {profile.location}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
