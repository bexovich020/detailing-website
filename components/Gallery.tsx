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
            АВТОМОБИЛИ И ДЕТАЛИ
          </h2>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
            Примеры автомобилей и материалов для разных видов ухода
          </p>
          <div className="section-divider mt-7 max-w-[140px]" />
        </motion.div>

        <div className="columns-1 gap-3 sm:columns-2 lg:columns-3 lg:gap-4">
          {media.gallery.map((work, i) => (
            <motion.figure
              key={work.label}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: reduceMotion ? 0 : (i % 3) * 0.08,
              }}
              className="group relative mb-3 break-inside-avoid overflow-hidden border border-border lg:mb-4"
            >
              <div
                className={`relative w-full ${
                  work.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={work.src}
                  alt={work.alt}
                  fill
                  className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${work.position}`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 motion-reduce:duration-0">
                  <p className="w-full px-5 py-4 font-display text-lg tracking-wide text-white">
                    {work.label}
                  </p>
                </div>
              </div>
            </motion.figure>
          ))}
        </div>

        <div className="mt-12 text-left">
          <a href="#contact" className="btn-ghost w-full sm:w-auto">
            Обсудить уход за автомобилем <span className="ml-2" aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
