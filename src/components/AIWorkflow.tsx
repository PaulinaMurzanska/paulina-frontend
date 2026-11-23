"use client";

import { motion } from "framer-motion";
import data from "@/data/data.json";
import { Icon } from "./atoms";

const { aiWorkflow } = data;

export function AIWorkflow() {
  return (
    <section
      id="ai-workflow"
      className="relative py-24 md:py-32 bg-[var(--bg-ink)] text-white overflow-hidden scroll-mt-16"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 left-1/4 w-[520px] h-[520px] rounded-full bg-[#7c3aed] opacity-25 blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 w-[520px] h-[520px] rounded-full bg-[#db2777] opacity-20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-4">
              The new standard
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-[#c9a0ff] to-[#ffa0c9] bg-clip-text text-transparent">
                AI-augmented
              </span>{" "}
              development
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-white mb-3">{aiWorkflow.standard.headline}</p>
            <p className="text-lg text-white/80 leading-relaxed mb-5">{aiWorkflow.standard.text}</p>
            <p className="text-base md:text-lg text-white/60 leading-relaxed">{aiWorkflow.intro}</p>
          </motion.div>

          <motion.ul
            className="space-y-4 self-end"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {aiWorkflow.principles.map((principle) => (
              <li key={principle.title} className="rounded-2xl bg-white/5 border border-white/10 p-5">
                <h3 className="font-semibold text-white mb-1">{principle.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{principle.description}</p>
              </li>
            ))}
          </motion.ul>
        </div>

        <h3 className="text-sm uppercase tracking-widest text-white/50 mb-5">My workflow, from ticket to docs</h3>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {aiWorkflow.steps.map((step, index) => (
            <motion.li
              key={step.id}
              className="relative rounded-2xl bg-white/[0.06] border border-white/10 p-5 hover:bg-white/[0.09] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7c3aed] to-[#db2777] flex items-center justify-center">
                  <Icon name={step.icon} className="w-5 h-5" />
                </div>
                <span className="font-mono text-sm text-white/40">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h4 className="text-lg font-bold mb-3">{step.title}</h4>
              <dl className="space-y-2 text-sm leading-relaxed">
                <div>
                  <dt className="inline font-semibold text-[#ffa0c9]">Me: </dt>
                  <dd className="inline text-white/90">{step.me}</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-[#a0c9ff]">Agent: </dt>
                  <dd className="inline text-white/70">{step.agent}</dd>
                </div>
              </dl>
            </motion.li>
          ))}

          <motion.li
            className="rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#db2777] p-5 flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: aiWorkflow.steps.length * 0.06 }}
          >
            <p className="text-lg font-bold leading-snug mb-4">
              The result: shorter cycles, cleaner tickets, tested code and docs that stay current.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white">
              Let&apos;s talk about your team →
            </a>
          </motion.li>
        </ol>

        <div className="mt-12 flex flex-wrap items-center gap-2">
          <span className="text-sm text-white/50 mr-2">Daily toolkit:</span>
          {aiWorkflow.tools.map((tool) => (
            <span key={tool} className="px-3 py-1 rounded-full text-sm bg-white/10 text-white/85">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
