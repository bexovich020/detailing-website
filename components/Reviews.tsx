"use client";

import { motion, useReducedMotion } from "framer-motion";

const points = [
  { number: "01", title: "Под вашу задачу", text: "Сначала обсуждаем, что важно именно для вас и вашего автомобиля." },
  { number: "02", title: "Понятный план", text: "Согласовываем состав работ до того, как приступим к уходу." },
  { number: "03", title: "Внимание к деталям", text: "Работаем с кузовом и интерьером, учитывая их состояние." },
];

export default function Reviews() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-graphite py-20 md:py-32">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mb-12 text-left md:mb-16"
        >
          <h2 className="font-display text-[40px] tracking-wide text-white md:text-5xl">
            ВНИМАНИЕ К ДЕТАЛЯМ
          </h2>
          <div className="section-divider mt-7 max-w-[140px]" />
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {points.map((point, i) => (
            <motion.article
              key={point.number}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: reduceMotion ? 0 : i * 0.1,
              }}
              className="relative flex flex-col border-t border-border pt-6 text-left"
            >
              <span className="font-display text-sm tracking-[0.2em] text-gold">{point.number}</span>
              <h3 className="mt-4 font-display text-2xl tracking-wide text-white">{point.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.75] text-white/70">{point.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
