"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Crown,
  Layers,
  Shield,
  Sparkles,
  Sun,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { media } from "@/lib/media";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: (typeof media.services)[keyof typeof media.services];
};

const services: Service[] = [
  {
    title: "Керамическое покрытие",
    description:
      "Защитное покрытие для кузова с выразительным блеском и водоотталкивающим эффектом.",
    icon: Shield,
    image: media.services.ceramic,
  },
  {
    title: "Полировка кузова",
    description:
      "Коррекция внешнего вида лакокрасочного покрытия и восстановление блеска кузова.",
    icon: Sparkles,
    image: media.services.polish,
  },
  {
    title: "Химчистка салона",
    description:
      "Деликатный уход за интерьером и основными поверхностями салона автомобиля.",
    icon: Wind,
    image: media.services.interior,
  },
  {
    title: "Тонировка стёкол",
    description:
      "Тонировка стёкол с подбором решения под автомобиль и ваши пожелания.",
    icon: Sun,
    image: media.services.tint,
  },
  {
    title: "Бронирование плёнкой",
    description:
      "Защитная плёнка для кузова. Можно обсудить отдельные элементы или весь автомобиль.",
    icon: Layers,
    image: media.services.ppf,
  },
  {
    title: "Детейлинг под ключ",
    description:
      "Комплексный уход за кузовом и салоном с набором работ под состояние автомобиля.",
    icon: Crown,
    image: media.services.full,
  },
];

export default function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="bg-black py-20 md:py-32">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mb-12 text-left md:mb-16"
        >
          <h2 className="font-display text-[36px] tracking-wide text-white md:text-5xl">
            НАШИ УСЛУГИ
          </h2>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
            Полный спектр премиального ухода за автомобилем
          </p>
          <div className="section-divider mt-7 max-w-[140px]" />
        </motion.div>

        <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : i * 0.1,
                }}
                className="group flex flex-col bg-card ring-1 ring-inset ring-transparent transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:ring-gold"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${service.image.position}`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <Icon
                    className="mb-4 h-5 w-5 text-gold"
                    strokeWidth={1.4}
                    aria-hidden
                  />
                  <h3 className="font-display text-[22px] tracking-wide text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-[1.7] text-muted">
                    {service.description}
                  </p>
                  <a href="#contact" className="mt-7 inline-flex min-h-11 items-center text-sm font-medium text-gold transition-colors hover:text-white focus-visible:text-white">
                    Обсудить услугу <span className="ml-2" aria-hidden>→</span>
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
