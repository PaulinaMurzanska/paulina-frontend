"use client";

import { motion } from "framer-motion";

const BLOB_CONFIG = [
  {
    className: "absolute -top-48 -right-32 w-[560px] h-[560px] rounded-full bg-[var(--accent-1)] opacity-40 blur-3xl",
    animate: { x: [0, 40, 0], scale: [1, 1.08, 1] },
    duration: 18,
  },
  {
    className: "absolute top-1/2 -left-48 w-[460px] h-[460px] rounded-full bg-[var(--accent-2)] opacity-35 blur-3xl",
    animate: { x: [0, -24, 0], scale: [1, 1.1, 1] },
    duration: 22,
  },
];

export function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 dot-grid" />
      {BLOB_CONFIG.map((blob, index) => (
        <motion.div
          key={index}
          className={blob.className}
          animate={blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
