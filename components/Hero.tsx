"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { media } from "@/lib/media";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: reduceMotion ? 0 : i * 0.15,
        duration: reduceMotion ? 0 : 0.65,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section className="relative overflow-x-clip bg-black">
      <div className="grid min-h-[100svh] grid-cols-1 md:min-h-0 lg:min-h-[min(900px,100svh)] lg:grid-rows-[minmax(700px,100svh)]">
        <div className="relative z-20 flex min-h-[100svh] flex-col items-center justify-start px-5 pb-24 pt-[7rem] text-center md:min-h-0 md:pb-10 md:pt-28 lg:col-start-1 lg:row-start-1 lg:h-full lg:justify-center lg:pb-24 lg:pt-24">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-4 max-w-xl text-[11px] font-medium uppercase tracking-[0.2em] text-gold md:mb-6 md:text-xs md:tracking-[0.26em]"
          >
            Премиальный автодетейлинг · Алматы
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-[18ch] font-display text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.96] tracking-wide text-white"
          >
            ДЕТЕЙЛИНГ
            <br />
            КУЗОВА И
            <br />
            САЛОНА
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted md:mt-8 md:text-base"
          >
            Полировка, химчистка, керамика и защитная плёнка. Обсудим состояние
            автомобиля и подскажем, с чего начать.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-7 flex w-full max-w-sm flex-col items-stretch gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:items-center sm:justify-center"
          >
            <a href="#contact" className="btn-primary w-full sm:w-auto">
              Узнать стоимость
            </a>
            <a href="#services" className="btn-ghost w-full sm:w-auto">
              Выбрать услугу
            </a>
          </motion.div>
        </div>

        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden md:relative md:inset-auto md:aspect-[16/10] md:h-auto lg:col-start-1 lg:row-start-1 lg:aspect-auto lg:h-full lg:min-h-[100svh]">
          <Image
            src={media.hero.src}
            alt={media.hero.alt}
            fill
            priority
            className={`object-cover scale-[1.6] ${media.hero.position} md:scale-100`}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/60 md:bg-gradient-to-t md:from-black/40 md:via-transparent md:to-black/20 lg:bg-gradient-to-b lg:from-black/70 lg:via-black/35 lg:to-black/90" />
        </div>

      </div>
    </section>
  );
}
