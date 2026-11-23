"use client";

import { motion } from "framer-motion";
import data from "@/data/data.json";
import type { SkillCategory } from "@/types";
import { Icon, SectionHeader } from "./atoms";

const skillCategories: SkillCategory[] = data.skills;

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-white relative overflow-hidden scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 relative z-10">
        <SectionHeader
          badge="Skills"
          badgeColor="accent-1"
          title="Skills &"
          gradientWord="tech stack"
          subtitle="Everything I use in commercial work, grouped by what it does for the product."
          className="mb-14"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.name}
              className={`rounded-2xl p-6 md:p-7 ${
                category.emphasized
                  ? "bg-gradient-to-br from-[#7c3aed] to-[#db2777] text-white shadow-xl"
                  : "surface"
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    category.emphasized ? "bg-white/20" : "bg-[var(--bg-secondary)] text-[#7c3aed]"
                  }`}
                >
                  <Icon name={category.icon} className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold">{category.name}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm ${
                      category.emphasized
                        ? "bg-white/15 text-white"
                        : "bg-[var(--bg-primary)] border border-[var(--border-soft)] text-[var(--text-secondary)]"
                    }`}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
