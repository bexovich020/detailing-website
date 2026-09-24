"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { media } from "@/lib/media";

export default function Gallery() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="gallery" className="bg-black py-20 md:py-32">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mb-12 text-left md:mb-16"
        >
          <h2 className="font-display text-[36px] tracking-wide text-white md:text-5xl">
            ДЕТАЛИ, КОТОРЫЕ ВИДНО
          </h2>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
            Визуальные примеры процессов и свойств ухода за кузовом и салоном.
          </p>
          <div className="section-divider mt-7 max-w-[140px]" />
        </motion.div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:auto-rows-[250px] lg:grid-cols-12 lg:gap-4">
          {media.gallery.map((work, i) => (
            <motion.figure
              key={work.category}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: reduceMotion ? 0 : i * 0.08,
              }}
              className={`group relative isolate overflow-hidden border border-border bg-card ${
                i === 0
                  ? "aspect-[4/3] md:col-span-2 md:aspect-[16/9] lg:col-span-6 lg:row-span-2 lg:aspect-auto lg:min-h-[516px]"
                  : i === 3
                    ? "aspect-[4/3] lg:col-span-6 lg:aspect-auto"
                    : "aspect-[4/3] lg:col-span-3 lg:aspect-auto"
              }`}
            >
              <Image
                src={work.src}
                alt={work.alt}
                fill
                className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${work.position}`}
                sizes={
                  i === 0
                    ? "(max-width: 1024px) 100vw, 50vw"
                    : i === 3
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                }
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-6 lg:p-7">
                <div>
                  <span className="mb-2 block text-[10px] font-medium tracking-[0.24em] text-gold md:text-[11px]">
                    {work.category}
                  </span>
                  <h3 className="font-display text-xl tracking-wide text-white md:text-2xl">
                    {work.title}
                  </h3>
                </div>
                <span
                  aria-hidden
                  className="mb-1 hidden h-px w-10 shrink-0 bg-gold/70 transition-all duration-300 group-hover:w-16 sm:block"
                />
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <p className="mt-4 text-xs leading-relaxed text-muted/80">
          Иллюстрации услуг и свойств материалов, не портфолио выполненных студией работ.
        </p>

        <div className="mt-10 text-left md:mt-12">
          <a href="#contact" className="btn-ghost w-full sm:w-auto">
            Обсудить уход за автомобилем <span className="ml-2" aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
