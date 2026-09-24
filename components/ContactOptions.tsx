"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Clock, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import {
  DISPLAY_PHONE,
  PHONE_URL,
  TELEGRAM_URL,
  TELEGRAM_USERNAME,
  WHATSAPP_URL,
} from "@/lib/contact-links";

const studioAddress = process.env.NEXT_PUBLIC_STUDIO_ADDRESS;
const studioHours = process.env.NEXT_PUBLIC_STUDIO_HOURS;

export default function ContactOptions() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" className="bg-black py-20 md:py-32">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="text-left"
          >
            <h2 className="font-display text-[40px] leading-[1.05] tracking-wide text-white md:text-5xl">
              ЗАПИШИТЕСЬ
              <br />
              НА ДЕТЕЙЛИНГ
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
              Напишите нам, чтобы уточнить стоимость, свободные даты и подходящий уход для вашего автомобиля.
            </p>

            {(studioAddress || studioHours) && (
              <ul className="mt-10 space-y-4 text-sm text-white/80">
                {studioAddress && (
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                    <span>{studioAddress}</span>
                  </li>
                )}
                {studioHours && (
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                    <span>{studioHours}</span>
                  </li>
                )}
              </ul>
            )}
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.08 }}
            className="border border-border bg-card p-6 md:p-10"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Связаться со студией
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex min-h-[68px] w-full items-center justify-center gap-3 rounded bg-[#25D366] px-6 py-4 text-center text-base font-semibold text-black transition-colors hover:bg-[#35e477] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"
            >
              <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
              <span>Написать в WhatsApp</span>
            </a>
            <p className="mt-3 text-center text-xs leading-relaxed text-muted">
              Сообщение о записи и свободных датах будет заполнено заранее
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-border px-4 py-3 text-sm font-medium text-white transition-colors hover:border-gold/70 hover:text-gold"
              >
                <Send className="h-4 w-4" aria-hidden />
                Telegram
              </a>
              <a
                href={PHONE_URL}
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-border px-4 py-3 text-sm font-medium text-white transition-colors hover:border-gold/70 hover:text-gold"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Позвонить
              </a>
            </div>

            <p className="mt-6 text-center text-sm text-muted">
              {DISPLAY_PHONE}
              <span className="mx-2 text-white/20" aria-hidden>·</span>
              @{TELEGRAM_USERNAME}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
