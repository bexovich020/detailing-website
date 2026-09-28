"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, Phone, Send } from "lucide-react";
import { media } from "@/lib/media";
import { DISPLAY_PHONE, PHONE_URL, TELEGRAM_URL, TELEGRAM_USERNAME, WHATSAPP_URL } from "@/lib/contact-links";
import SectionLabel from "@/components/ui/SectionLabel";
import LineReveal from "@/components/ui/LineReveal";
import MagneticButton from "@/components/ui/MagneticButton";

const address = process.env.NEXT_PUBLIC_STUDIO_ADDRESS;
const hours = process.env.NEXT_PUBLIC_STUDIO_HOURS;

export default function ContactOptions() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["-12%", "12%"]);

  const details = [
    { label: "Телефон", value: DISPLAY_PHONE, href: PHONE_URL },
    { label: "Telegram", value: `@${TELEGRAM_USERNAME}`, href: TELEGRAM_URL, external: true },
    ...(address ? [{ label: "Адрес", value: address }] : []),
    ...(hours ? [{ label: "Часы работы", value: hours }] : []),
  ];

  return (
    <section ref={ref} id="contact" aria-labelledby="contact-title" className="relative isolate overflow-hidden bg-bg">
      <motion.div style={{ y }} className="absolute inset-[-12%_0] -z-20 will-change-transform">
        <Image src={media.cta.src} alt={media.cta.alt} fill sizes="100vw" className={`object-cover ${media.cta.position}`} />
      </motion.div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-bg via-bg/80 to-bg/20" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-bg via-transparent to-bg" />

      <div className="container-site flex min-h-[100svh] flex-col justify-center py-28">
        <SectionLabel index="09">Запись</SectionLabel>
        <LineReveal
          id="contact-title"
          lines={["Готовы вернуть", "автомобилю", "идеальный вид?"]}
          className="display-lg mt-6 max-w-5xl text-fg"
        />
        <p className="mt-8 max-w-md text-[15px] leading-relaxed text-fg/70 md:text-base">
          Расскажите, что хотите сделать с автомобилем. Обсудим подходящую услугу, стоимость и свободные даты.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <MagneticButton href={WHATSAPP_URL} external variant="accent" icon={<MessageCircle className="h-4 w-4" strokeWidth={1.6} aria-hidden />}>
            Написать в WhatsApp
          </MagneticButton>
          <MagneticButton href={TELEGRAM_URL} external variant="ghost" icon={<Send className="h-4 w-4" strokeWidth={1.6} aria-hidden />}>
            Telegram
          </MagneticButton>
          <MagneticButton href={PHONE_URL} variant="ghost" icon={<Phone className="h-4 w-4" strokeWidth={1.6} aria-hidden />}>
            Позвонить
          </MagneticButton>
        </div>

        <dl className="mt-20 grid max-w-4xl grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {details.map((d) => (
            <div key={d.label} className="bg-bg/70 p-5 backdrop-blur-sm">
              <dt className="meta">{d.label}</dt>
              <dd className="mt-3 text-[15px] text-fg">
                {d.href ? (
                  <a
                    href={d.href}
                    {...(d.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="transition-colors duration-300 hover:text-accent"
                  >
                    {d.value}
                  </a>
                ) : (
                  d.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
