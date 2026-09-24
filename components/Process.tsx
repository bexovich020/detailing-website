"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { media } from "@/lib/media";

const steps = [
  {
    number: "01",
    title: "ЗАПИСЬ",
    text: "Расскажите, что хотите улучшить. Обсудим задачу и удобное время.",
    image: null,
  },
  {
    number: "02",
    title: "ДИАГНОСТИКА",
    text: "Оцениваем состояние автомобиля и уточняем, какой уход ему подходит.",
    image: media.process.inspect,
  },
  {
    number: "03",
    title: "РАБОТА",
    text: "Выполняем согласованные работы и уделяем внимание деталям.",
    image: media.process.work,
  },
  {
    number: "04",
    title: "ВЫДАЧА",
    text: "Показываем результат и рассказываем, как ухаживать за автомобилем дальше.",
    image: media.process.finish,
  },
];

export default function Process() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="process" className="bg-graphite py-20 md:py-32">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mb-12 text-left md:mb-16"
        >
          <h2 className="font-display text-[36px] tracking-wide text-white md:text-5xl">
            КАК МЫ РАБОТАЕМ
          </h2>
          <div className="section-divider mt-7 max-w-[140px]" />
        </motion.div>

        <ol className="relative grid grid-cols-1 gap-10 overflow-x-clip lg:grid-cols-4 lg:gap-8">
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-2 left-[11px] top-2 border-l border-dashed border-white/20 lg:bottom-auto lg:left-[12%] lg:right-[12%] lg:top-8 lg:border-l-0 lg:border-t lg:border-gold/35"
          />
          {steps.map((step, i) => (
            <motion.li
              key={step.number}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: reduceMotion ? 0 : i * 0.1,
              }}
              className="relative pl-10 text-left lg:pl-0"
            >
              <span className="absolute left-0 top-1.5 h-2.5 w-2.5 bg-gold/80 lg:hidden" />
              {step.image && (
                <div className="relative mb-4 aspect-[4/3] overflow-hidden border border-white/[0.08]">
                  <Image
                    src={step.image.src}
                    alt={step.image.alt}
                    fill
                    className={`object-cover ${step.image.position}`}
                    sizes="(max-width: 1024px) 100vw, 25vw"
                  />
                </div>
              )}
              <span className="font-display text-sm tracking-[0.2em] text-muted lg:text-[56px] lg:leading-none lg:tracking-normal lg:text-white/15">
                {step.number}
              </span>
              <h3 className="mt-1 font-display text-xl tracking-wide text-white lg:mt-3">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[280px] text-sm leading-[1.7] text-muted lg:mt-3">
                {step.text}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
