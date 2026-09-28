"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { quoteUrl, serviceCategories, services, type ServiceCategory } from "@/lib/content";
import { EASE_EXPO } from "@/lib/motion";
import SectionLabel from "@/components/ui/SectionLabel";
import LineReveal from "@/components/ui/LineReveal";

type Filter = "Все" | ServiceCategory;
const filters: Filter[] = ["Все", ...serviceCategories];

export default function Pricing() {
  const [filter, setFilter] = useState<Filter>("Все");
  const reduceMotion = useReducedMotion();
  const visible = filter === "Все" ? services : services.filter((s) => s.category === filter);

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="relative bg-surface py-24 md:py-36">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel index="07">Стоимость</SectionLabel>
            <LineReveal id="pricing-title" lines={["Расчёт под", "автомобиль"]} className="display-lg mt-6 text-fg" />
          </div>
          <div className="flex flex-col justify-end gap-8 lg:col-span-6 lg:col-start-7">
            <p className="max-w-md text-[15px] leading-relaxed text-muted">
              Стоимость зависит от выбранной услуги и состояния автомобиля. Напишите — уточним задачу и сориентируем по цене до записи.
            </p>
            <div role="group" aria-label="Фильтр по категории" className="no-scrollbar -mx-5 flex gap-1 overflow-x-auto px-5 sm:mx-0 sm:px-0">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  aria-pressed={filter === f}
                  onClick={() => setFilter(f)}
                  className={`relative shrink-0 px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ${
                    filter === f ? "text-bg" : "text-fg/60 hover:text-fg"
                  }`}
                >
                  {filter === f && (
                    <motion.span
                      layoutId="pricing-filter"
                      transition={{ duration: reduceMotion ? 0 : 0.5, ease: EASE_EXPO }}
                      className="absolute inset-0 bg-fg"
                      aria-hidden
                    />
                  )}
                  <span className="relative">{f}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <ul className="mt-14 border-b border-line md:mt-20" aria-live="polite">
          <AnimatePresence initial={false} mode="popLayout">
            {visible.map((service) => (
              <motion.li
                key={service.id}
                layout={!reduceMotion}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                transition={{ duration: 0.6, ease: EASE_EXPO }}
                className="group relative border-t border-line"
              >
                <a
                  href={quoteUrl(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hide"
                  className="relative grid grid-cols-[auto_1fr_auto] items-center gap-x-5 gap-y-2 py-6 md:grid-cols-12 md:gap-8 md:py-7"
                >
                  <span aria-hidden className="absolute inset-0 origin-bottom scale-y-0 bg-raised transition-transform duration-500 ease-expo group-hover:scale-y-100" />
                  <span className="meta relative tabular-nums md:col-span-1">{service.number}</span>
                  <span className="relative md:col-span-5">
                    <span className="block font-display text-2xl font-medium uppercase leading-tight text-fg md:text-3xl">{service.title}</span>
                    <span className="mt-1 block text-[13px] text-muted md:hidden">{service.category}</span>
                  </span>
                  <span className="meta relative hidden md:col-span-2 md:block">{service.category}</span>
                  <span className="relative hidden text-[14px] text-fg/70 md:col-span-2 md:block">Расчёт индивидуально</span>
                  <span className="relative flex items-center justify-end gap-3 md:col-span-2">
                    <span className="hidden text-[12px] font-semibold uppercase tracking-[0.14em] text-fg transition-colors duration-300 group-hover:text-accent sm:inline">
                      Узнать цену
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center border border-line transition-all duration-500 ease-expo group-hover:border-accent group-hover:bg-accent group-hover:text-bg">
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} aria-hidden />
                    </span>
                  </span>
                  <span className="sr-only">— написать в WhatsApp</span>
                </a>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </section>
  );
}
