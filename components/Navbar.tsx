"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { navLinks } from "@/lib/content";
import { DISPLAY_PHONE, PHONE_URL, TELEGRAM_URL, WHATSAPP_URL } from "@/lib/contact-links";
import { EASE_EXPO, EASE_IN_OUT, INTRO_DELAY } from "@/lib/motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={reduceMotion ? false : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: EASE_EXPO, delay: reduceMotion ? 0 : INTRO_DELAY + 0.5 }}
        className={`fixed inset-x-0 top-0 z-[60] transition-[background-color,border-color,backdrop-filter] duration-700 ease-expo ${
          scrolled && !open
            ? "border-b border-line bg-bg/70 backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          aria-label="Основная навигация"
          className={`container-site flex items-center justify-between transition-[height] duration-700 ease-expo ${
            scrolled ? "h-16" : "h-20 md:h-24"
          }`}
        >
          <a href="#top" className="group flex items-baseline gap-2" aria-label="APEX DETAIL — на главную">
            <span className="font-display text-xl font-semibold uppercase tracking-[0.2em] text-fg md:text-[22px]">
              Apex
            </span>
            <span className="h-1.5 w-1.5 bg-accent transition-transform duration-500 ease-expo group-hover:rotate-45" aria-hidden />
            <span className="font-display text-xl font-light uppercase tracking-[0.2em] text-fg/70 md:text-[22px]">
              Detail
            </span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative py-2 text-[12px] font-medium uppercase tracking-[0.16em] text-fg/65 transition-colors duration-300 hover:text-fg"
                >
                  {link.label}
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-px origin-right scale-x-0 bg-accent transition-transform duration-500 ease-expo group-hover:origin-left group-hover:scale-x-100"
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="group relative hidden h-10 items-center overflow-hidden border border-fg/25 px-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-fg transition-colors duration-500 ease-expo hover:border-fg hover:text-bg sm:inline-flex"
            >
              <span aria-hidden className="absolute inset-0 -z-0 origin-bottom scale-y-0 bg-fg transition-transform duration-500 ease-expo group-hover:scale-y-100" />
              <span className="relative">Записаться</span>
            </a>

            <button
              type="button"
              aria-label={open ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
              className="relative flex h-11 w-11 items-center justify-center lg:hidden"
            >
              <span
                className={`absolute h-px w-6 bg-fg transition-transform duration-500 ease-expo ${open ? "rotate-45" : "-translate-y-1"}`}
              />
              <span
                className={`absolute h-px w-6 bg-fg transition-transform duration-500 ease-expo ${open ? "-rotate-45" : "translate-y-1"}`}
              />
            </button>
          </div>
        </nav>

        <motion.div
          aria-hidden
          style={{ scaleX: progress }}
          className={`absolute inset-x-0 bottom-[-1px] h-px origin-left bg-accent transition-opacity duration-500 ${scrolled && !open ? "opacity-100" : "opacity-0"}`}
        />
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Меню"
            initial={reduceMotion ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            animate={reduceMotion ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" }}
            exit={reduceMotion ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.8, ease: EASE_IN_OUT }}
            className="fixed inset-0 z-[55] flex flex-col bg-surface lg:hidden"
          >
            <div className="grid-overlay pointer-events-none absolute inset-0" aria-hidden />
            <nav aria-label="Мобильная навигация" className="container-site relative flex flex-1 flex-col justify-center pt-20">
              <ul className="flex flex-col">
                {navLinks.map((link, i) => (
                  <li key={link.href} className="overflow-hidden border-b border-line">
                    <motion.a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      initial={reduceMotion ? false : { y: "100%" }}
                      animate={{ y: 0 }}
                      exit={reduceMotion ? undefined : { y: "-100%" }}
                      transition={{ duration: 0.7, ease: EASE_EXPO, delay: reduceMotion ? 0 : 0.25 + i * 0.05 }}
                      className="flex items-baseline justify-between py-4"
                    >
                      <span className="font-display text-[clamp(2.2rem,10vw,3.5rem)] font-medium uppercase leading-none text-fg">
                        {link.label}
                      </span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.6 }}
              className="container-site relative flex flex-wrap items-center justify-between gap-4 pb-[max(env(safe-area-inset-bottom),1.5rem)] pt-6"
            >
              <a href={PHONE_URL} className="text-sm text-fg">{DISPLAY_PHONE}</a>
              <div className="flex gap-5 text-[12px] font-semibold uppercase tracking-[0.16em]">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-accent">WhatsApp</a>
                <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-fg/70">Telegram</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
