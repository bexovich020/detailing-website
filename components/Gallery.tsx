"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { media } from "@/lib/media";
import { useMediaQuery } from "@/lib/motion";
import SectionLabel from "@/components/ui/SectionLabel";
import MagneticButton from "@/components/ui/MagneticButton";

const shapeClass = {
  tall: "w-[78vw] sm:w-[46vw] lg:w-[28vw] aspect-[3/4]",
  wide: "w-[86vw] sm:w-[64vw] lg:w-[44vw] aspect-[16/11]",
  square: "w-[78vw] sm:w-[46vw] lg:w-[32vw] aspect-square",
} as const;

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const desktop = useMediaQuery("(min-width: 1024px)");
  const reduceMotion = useReducedMotion();
  const pinned = desktop && !reduceMotion;

  useLayoutEffect(() => {
    if (!pinned || !trackRef.current) return;
    const measure = () => {
      const track = trackRef.current;
      if (track) setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [pinned]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const x = useTransform(smooth, [0, 1], [0, -distance]);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      aria-labelledby="gallery-title"
      className="relative bg-surface"
      style={pinned ? { height: `calc(100vh + ${distance}px)` } : undefined}
    >
      <div className={pinned ? "sticky top-0 flex h-screen flex-col justify-center overflow-hidden" : "py-24"}>
        <motion.div
          ref={trackRef}
          style={pinned ? { x } : undefined}
          className={`flex items-center gap-5 px-5 sm:px-8 lg:gap-8 lg:px-12 ${
            pinned ? "w-max will-change-transform" : "no-scrollbar snap-x snap-mandatory overflow-x-auto"
          }`}
        >
          <div className="flex w-[82vw] shrink-0 snap-start flex-col justify-between self-stretch sm:w-[50vw] lg:w-[30vw] lg:pr-8">
            <div>
              <SectionLabel index="05">Галерея</SectionLabel>
              <h2 id="gallery-title" className="display-lg mt-6 text-fg">
                Детали,
                <br />
                которые
                <br />
                <span className="text-outline">видно</span>
              </h2>
            </div>
            <p className="mt-8 max-w-xs text-[13px] leading-relaxed text-muted">
              Иллюстративные фотографии процессов и материалов. Это не портфолио работ студии.
            </p>
          </div>

          {media.gallery.map((item, i) => (
            <figure
              key={item.src}
              data-cursor="Смотреть"
              className={`group relative shrink-0 snap-center overflow-hidden bg-bg ${shapeClass[item.shape]} ${
                i % 2 === 1 ? "lg:mt-24" : "lg:-mt-16"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 44vw, 86vw"
                className={`object-cover transition-transform duration-[1.2s] ease-expo group-hover:scale-105 ${item.position}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/85 via-bg/10 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-6">
                <div>
                  <p className="meta text-accent">{item.category}</p>
                  <p className="mt-2 font-display text-2xl font-medium uppercase text-fg md:text-3xl">{item.title}</p>
                  <p className="mt-2 max-w-[28ch] translate-y-2 text-[13px] leading-relaxed text-fg/70 opacity-100 transition-all duration-700 ease-expo lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                    {item.description}
                  </p>
                </div>
                <span className="meta tabular-nums text-fg/60">0{i + 1}</span>
              </figcaption>
            </figure>
          ))}

          <div className="flex w-[70vw] shrink-0 snap-start flex-col items-start justify-center gap-6 sm:w-[40vw] lg:w-[26vw] lg:pl-8">
            <p className="font-display text-4xl font-medium uppercase leading-none text-fg md:text-5xl">
              Покажите
              <br />
              свой автомобиль
            </p>
            <p className="text-[14px] leading-relaxed text-muted">Пришлите фото — подскажем, какой уход ему подойдёт.</p>
            <MagneticButton href="#contact" variant="ghost">
              Написать нам
            </MagneticButton>
          </div>
        </motion.div>

        {pinned && (
          <div className="container-site mt-10 flex items-center gap-6">
            <span className="meta">Листайте</span>
            <div className="h-px flex-1 bg-fg/10">
              <motion.div style={{ scaleX: smooth }} className="h-full origin-left bg-fg/70" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
