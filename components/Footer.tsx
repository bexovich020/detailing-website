"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { navLinks } from "@/lib/content";
import { DISPLAY_PHONE, PHONE_URL, TELEGRAM_URL, WHATSAPP_URL } from "@/lib/contact-links";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["45%", "0%"]);

  return (
    <footer ref={ref} className="relative overflow-hidden border-t border-line bg-bg pt-16 md:pt-24">
      <div className="container-site grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="max-w-xs text-[15px] leading-relaxed text-muted">
            Автодетейлинг в Алматы: полировка, керамика, химчистка, тонировка и защитная плёнка.
          </p>
        </div>
        <nav aria-label="Навигация в подвале" className="md:col-span-3">
          <p className="meta">Разделы</p>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-[14px] text-fg/75 transition-colors duration-300 hover:text-fg">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-3">
          <p className="meta">Связь</p>
          <ul className="mt-5 flex flex-col gap-3 text-[14px]">
            <li>
              <a href={PHONE_URL} className="text-fg/75 transition-colors hover:text-fg">{DISPLAY_PHONE}</a>
            </li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-fg/75 transition-colors hover:text-fg">WhatsApp</a>
            </li>
            <li>
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-fg/75 transition-colors hover:text-fg">Telegram</a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-1 md:flex md:justify-end">
          <a
            href="#top"
            aria-label="Наверх"
            className="group flex h-12 w-12 items-center justify-center border border-line transition-colors duration-500 hover:border-fg hover:bg-fg hover:text-bg"
          >
            <ArrowUp className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:-translate-y-0.5" strokeWidth={1.6} aria-hidden />
          </a>
        </div>
      </div>

      <div className="container-site mt-16 flex flex-col justify-between gap-2 border-t border-line py-6 text-[12px] text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} APEX DETAIL</p>
        <p>Алматы, Казахстан</p>
      </div>

      <div className="overflow-hidden" aria-hidden>
        <motion.p
          style={{ y }}
          className="select-none whitespace-nowrap text-center font-display text-[20.5vw] font-semibold uppercase leading-[0.78] tracking-[-0.02em] text-fg/[0.06]"
        >
          Apex Detail
        </motion.p>
      </div>
    </footer>
  );
}
