"use client";

import { motion } from "framer-motion";
import data from "@/data/data.json";

const { whyMe } = data.profile;

export function WhyMeCard() {
  return (
    <motion.figure
      className="relative w-full max-w-xl mx-auto lg:mx-0 lg:ml-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <div
        className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[#3b82f6] to-[#06b6d4] opacity-25 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative rounded-2xl bg-[#0b1a3a] text-white shadow-2xl ring-1 ring-[#60a5fa]/20 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-xs text-[#93c5fd]/70 font-mono truncate">why-work-with-me</span>
        </div>

        <div className="p-5 md:p-6 font-mono text-[13px] md:text-sm leading-relaxed">
          <p className="hidden sm:grid grid-cols-[1.25rem_minmax(0,0.8fr)_minmax(0,1.2fr)] gap-3 text-[#93c5fd]/60 mb-3">
            <span aria-hidden="true">{"//"}</span>
            <span>why me</span>
            <span>in practice</span>
          </p>

          <ul className="space-y-3">
            {whyMe.map((item, index) => (
              <motion.li
                key={item.claim}
                className="grid grid-cols-[1.25rem_1fr] sm:grid-cols-[1.25rem_minmax(0,0.8fr)_minmax(0,1.2fr)] gap-x-3 items-baseline"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.15 }}
              >
                <span className="text-[#22d3ee]" aria-hidden="true">✓</span>
                <span className="font-semibold text-[#93c5fd]">{item.claim}</span>
                <span className="col-start-2 sm:col-start-auto text-white/90">{item.proof}</span>
              </motion.li>
            ))}
          </ul>

          <motion.a
            href="#contact"
            className="mt-4 pt-4 border-t border-white/10 flex items-center text-white hover:text-[#93c5fd] transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 + whyMe.length * 0.15 }}
          >
            <span className="text-[#22d3ee] mr-2">›</span>
            Let&apos;s talk about your team
            <span className="caret inline-block w-2 h-4 ml-1 bg-[#93c5fd]" aria-hidden="true" />
          </motion.a>
        </div>
      </div>

      <figcaption className="sr-only">
        Why work with Paulina: {whyMe.map((item) => `${item.claim}: ${item.proof}`).join("; ")}.
      </figcaption>
    </motion.figure>
  );
}
