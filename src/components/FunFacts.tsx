"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  { src: "/images/fun-facts/IMG20251229144616.jpg", label: "Skiing", position: "70% center" },
  { src: "/images/fun-facts/IMG20250921140140.jpg", label: "Paddleboarding", position: "center" },
  { src: "/images/fun-facts/IMG20250817121248.jpg", label: "Biking", position: "75% center" },
  { src: "/images/fun-facts/IMG20251222130526.jpg", label: "Rollerskating", position: "center 35%" },
];

export function FunFacts() {
  return (
    <section id="free-time" className="py-16 md:py-20 bg-[var(--bg-secondary)]">
      <div className="max-w-5xl mx-auto px-4 md:px-12 lg:px-20">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium uppercase tracking-wider text-[var(--text-muted)] mb-2">Beyond the code</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Outside work</h2>
          <p className="text-[var(--text-secondary)] max-w-2xl">
            I ski, skate, bike and paddleboard. I like learning new things, on the slopes and in code.
          </p>
        </motion.div>

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {photos.map((photo, index) => (
            <motion.li
              key={photo.src}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Image
                src={photo.src}
                alt={`Paulina ${photo.label.toLowerCase()}`}
                fill
                sizes="(min-width: 768px) 240px, 50vw"
                className="object-cover"
                style={{ objectPosition: photo.position }}
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-3 pt-8 pb-3 text-sm font-medium text-white">
                {photo.label}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
