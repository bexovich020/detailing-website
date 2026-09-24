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
      <div className="grid grid-cols-1 lg:min-h-[min(900px,100svh)] lg:grid-rows-[minmax(700px,100svh)]">
        <div className="relative z-20 flex flex-col items-center px-5 pb-8 pt-[6.5rem] text-center md:px-8 md:pb-10 md:pt-28 lg:col-start-1 lg:row-start-1 lg:h-full lg:justify-center lg:pb-24 lg:pt-24">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-4 max-w-xl text-[11px] font-medium uppercase tracking-[0.26em] text-gold md:mb-6 md:text-xs"
          >
            Премиальный автодетейлинг · Алматы
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-[16ch] font-display text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.96] tracking-wide text-white"
          >
            МЫ ДЕЛАЕМ
            <br />
            АВТОМОБИЛИ
            <br />
            БЕЗУПРЕЧНЫМИ
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted md:mt-8 md:text-base"
          >
            Полировка кузова, защитные покрытия и уход за салоном. Подберём
            подходящий уход для вашего автомобиля.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-7 flex w-full max-w-sm flex-col items-stretch gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:items-center sm:justify-center"
          >
            <a href="#contact" className="btn-primary w-full sm:w-auto">
              Записаться на детейлинг
            </a>
            <a href="#gallery" className="btn-ghost w-full sm:w-auto">
              Смотреть галерею
            </a>
          </motion.div>
        </div>

        <div className="relative z-0 aspect-[4/5] w-full overflow-hidden sm:aspect-[16/10] lg:col-start-1 lg:row-start-1 lg:aspect-auto lg:h-full lg:min-h-[100svh]">
          <Image
            src={media.hero.src}
            alt={media.hero.alt}
            fill
            priority
            className={`object-cover ${media.hero.position}`}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 lg:bg-gradient-to-b lg:from-black/70 lg:via-black/35 lg:to-black/90" />
        </div>

      </div>
    </section>
  );
}
