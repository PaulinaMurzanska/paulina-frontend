"use client";

import { motion } from "framer-motion";
import data from "@/data/data.json";
import { getYearsOfExperience } from "@/utils";
import { Icon, SectionHeader } from "./atoms";

const { profile, services, experienceTimeline } = data;

export function Services() {
  const stats = [
    { value: `${getYearsOfExperience(profile.careerStart)}+`, label: "years of commercial front-end experience" },
    { value: `${experienceTimeline.length}`, label: "products and client projects delivered" },
    { value: "2×", label: "Lead Front-end Developer roles" },
    { value: "12+", label: "years of team leadership before tech" },
  ];

  return (
    <section id="services" className="py-24 md:py-28 bg-white relative overflow-hidden scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20">
        <SectionHeader
          badge="What I bring"
          badgeColor="accent-4"
          title="What I can do"
          gradientWord="for your team"
          subtitle="A React developer who builds the features, fixes what's broken, and fills the gaps that slow your team down."
          className="mb-14"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              className="surface rounded-2xl p-6 md:p-8 flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7c3aed] to-[#db2777] flex items-center justify-center text-white flex-shrink-0">
                  <Icon name={service.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">{service.title}</h3>
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-5">{service.description}</p>
              <ul className="mt-auto flex flex-wrap gap-2" aria-label={`${service.title} skills`}>
                {service.keywords.map((keyword) => (
                  <li
                    key={keyword}
                    className="px-3 py-1 rounded-full text-xs md:text-sm bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
                  >
                    {keyword}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.dl
          className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-soft)] p-5 md:p-6">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-3xl md:text-4xl font-bold gradient-text">{stat.value}</span>
                <span className="block mt-1 text-sm text-[var(--text-secondary)]">{stat.label}</span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
