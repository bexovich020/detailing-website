"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#services", label: "Услуги" },
  { href: "#process", label: "Процесс" },
  { href: "#gallery", label: "Галерея" },
  { href: "#contact", label: "Контакты" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[border-color,background-color] duration-300 ${
        scrolled
          ? "border-b border-gold/25 bg-black/90 backdrop-blur-sm"
          : "border-b border-transparent bg-black/30"
      }`}
    >
      <nav aria-label="Основная навигация" className="mx-auto flex h-14 max-w-site items-center justify-between px-5 md:h-16 md:px-8">
        <a
          href="#"
          className="font-display text-xl tracking-[0.18em] text-gold md:text-[22px]"
        >
          APEX DETAIL
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] tracking-wide text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary !px-5 !py-2 text-[13px]">
            Записаться
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="flex h-11 w-11 items-center justify-center text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-black lg:hidden"
          >
            <div className="flex flex-col px-5 pb-8 pt-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/[0.08] py-4 text-[15px] tracking-wide text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-6 w-full"
              >
                Записаться
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
