"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { principles } from "@/lib/content";
import SectionLabel from "@/components/ui/SectionLabel";

function Principle({ item }: { item: (typeof principles)[number] }) {
  const ref = useRef<HTMLLIElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "start 35%"] });
  const opacity = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 1 : 0.14, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 60, 0]);
  const line = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <li ref={ref} className="relative grid gap-4 py-10 md:grid-cols-12 md:items-end md:gap-8 md:py-14">
      <motion.span style={{ scaleX: line }} className="absolute inset-x-0 top-0 h-px origin-left bg-line" aria-hidden />
      <span className="meta tabular-nums text-accent md:col-span-1">{item.number}</span>
      <motion.h3
        style={{ opacity, x }}
        className="font-display text-[clamp(2.6rem,8vw,8.5rem)] font-medium uppercase leading-[0.88] text-fg md:col-span-8"
      >
        {item.title}
      </motion.h3>
      <motion.p style={{ opacity }} className="max-w-xs text-[15px] leading-relaxed text-muted md:col-span-3 md:pb-3">
        {item.text}
      </motion.p>
    </li>
  );
}

export default function StudioApproach() {
  return (
    <section id="approach" aria-labelledby="approach-title" className="relative overflow-hidden bg-bg py-24 md:py-36">
      <div className="container-site">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel index="06">Подход</SectionLabel>
            <h2 id="approach-title" className="mt-6 max-w-2xl text-2xl leading-snug text-fg md:text-4xl">
              Без шаблонных пакетов. Сначала задача и состояние автомобиля, потом — план работ.
            </h2>
          </div>
        </div>
        <ul className="mt-16 border-b border-line md:mt-24">
          {principles.map((item) => (
            <Principle key={item.number} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
