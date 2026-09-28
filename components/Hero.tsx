"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { media } from "@/lib/media";
import { EASE_EXPO, INTRO_DELAY } from "@/lib/motion";
import LineReveal from "@/components/ui/LineReveal";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduceMotion ? "0%" : "22%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", reduceMotion ? "0%" : "-18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const veil = useTransform(scrollYProgress, [0, 1], [0, 0.6]);

  const d = reduceMotion ? 0 : INTRO_DELAY;
  const fade = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: EASE_EXPO, delay: d + delay },
  });

  return (
    <section
      id="top"
      ref={ref}
      aria-labelledby="hero-title"
      className="relative isolate flex h-[100svh] min-h-[640px] flex-col overflow-hidden bg-bg"
    >
      <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0 -z-20 will-change-transform">
        <motion.div
          initial={reduceMotion ? false : { scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.4, ease: EASE_EXPO, delay: d - 0.2 }}
          className="absolute inset-0"
        >
          <Image
            src={media.hero.src}
            alt={media.hero.alt}
            fill
            priority
            sizes="100vw"
            className={`object-cover ${media.hero.position}`}
          />
        </motion.div>
      </motion.div>

      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-bg/0 md:via-bg/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-bg/50" />
        <div className="animate-light-drift absolute -top-1/4 left-1/4 h-[70%] w-[60%] rounded-full bg-[radial-gradient(closest-side,rgba(180,200,220,0.10),transparent)] blur-2xl" />
        <motion.div style={{ opacity: veil }} className="absolute inset-0 bg-bg" />
        <div className="grid-overlay absolute inset-0 opacity-60" />
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-site relative flex flex-1 flex-col justify-end pb-28 pt-28 md:pb-32"
      >
        <motion.p {...fade(0)} className="meta mb-6 flex items-center gap-3 md:mb-8">
          <span className="h-1.5 w-1.5 bg-accent" aria-hidden />
          Премиальный автодетейлинг · Алматы
        </motion.p>

        <LineReveal
          as="h1"
          id="hero-title"
          immediate
          delay={d + 0.05}
          stagger={0.1}
          lines={["Детейлинг", "кузова", "и салона"]}
          className="display-xl text-fg"
          lineClassName="[&:nth-child(1)]:text-fg"
        />

        <div className="mt-8 flex flex-col gap-8 md:mt-10 md:flex-row md:items-end md:justify-between">
          <motion.p {...fade(0.45)} className="max-w-md text-[15px] leading-relaxed text-fg/70 md:text-base">
            Полировка, химчистка, керамика и защитная плёнка. Обсудим состояние автомобиля и подскажем, с чего начать.
          </motion.p>

          <motion.div {...fade(0.6)} className="flex flex-col gap-3 sm:flex-row">
            <MagneticButton href="#contact">Узнать стоимость</MagneticButton>
            <MagneticButton href="#services" variant="ghost">
              Выбрать услугу
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        {...fade(0.9)}
        className="container-site pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between pb-6 md:pb-8"
      >
        <div className="flex items-center gap-4">
          <span className="relative block h-12 w-px overflow-hidden bg-fg/15" aria-hidden>
            <span className="animate-scroll-cue absolute inset-x-0 top-0 h-1/3 bg-fg" />
          </span>
          <span className="meta">Листайте</span>
        </div>
        <p className="meta hidden tabular-nums md:block">43.24° N — 76.89° E</p>
        <p className="meta tabular-nums">
          <span className="text-fg">01</span> / 09
        </p>
      </motion.div>
    </section>
  );
}
