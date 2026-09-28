"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { media } from "@/lib/media";
import SectionLabel from "@/components/ui/SectionLabel";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Gallery() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="relative bg-surface py-20 sm:py-24 md:py-32">
      <div className="container-site">
        <div className="mb-10 grid gap-5 sm:mb-12 sm:grid-cols-[1fr_auto] sm:items-end md:mb-14">
          <div>
            <SectionLabel index="05">Галерея</SectionLabel>
            <h2 id="gallery-title" className="display-lg mt-6 max-w-[10ch] text-fg max-[1023px]:text-[clamp(2.75rem,10vw,5rem)]">
              Детали, которые <span className="text-outline">видно</span>
            </h2>
          </div>
          <p className="max-w-xs text-[13px] leading-relaxed text-muted sm:pb-1">
            Иллюстративные фотографии процессов и материалов. Это не портфолио работ студии.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
          {media.gallery.map((item, i) => (
            <motion.figure
              key={item.src}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: reduceMotion ? 0 : i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-[4/5] min-h-0 overflow-hidden rounded-[2px] bg-bg lg:aspect-[16/10]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={i === 0 ? "(min-width: 1024px) 50vw, 50vw" : "(min-width: 1024px) 25vw, 50vw"}
                className={`object-cover transition-transform duration-700 ease-expo group-hover:scale-[1.035] ${item.position}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 sm:gap-4 sm:p-5">
                <div className="min-w-0">
                  <p className="meta text-[9px] text-accent sm:text-[10px]">{item.category}</p>
                  <p className="mt-1.5 font-display text-[clamp(0.95rem,2vw,1.6rem)] font-medium uppercase leading-[1.08] text-fg sm:mt-2">
                    {item.title}
                  </p>
                  <p className="mt-1.5 hidden max-w-[30ch] text-[12px] leading-relaxed text-fg/75 sm:block">
                    {item.description}
                  </p>
                </div>
                <span className="meta shrink-0 text-[9px] tabular-nums text-fg/60 sm:text-[10px]">0{i + 1}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start gap-4 border-t border-line pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-6 sm:pt-7">
          <p className="font-display text-2xl font-medium uppercase leading-[1.12] text-fg sm:text-3xl">
            Покажите свой автомобиль
          </p>
          <p className="max-w-[30ch] text-[14px] leading-relaxed text-muted">
            Пришлите фото — подскажем, какой уход ему подойдёт.
          </p>
          <MagneticButton href="#contact" variant="ghost">Написать нам</MagneticButton>
        </div>
      </div>
    </section>
  );
}
