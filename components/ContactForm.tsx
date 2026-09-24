"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";

const FORMSPREE_URL = process.env.NEXT_PUBLIC_FORMSPREE_URL;
const STUDIO_PHONE = process.env.NEXT_PUBLIC_STUDIO_PHONE;
const STUDIO_ADDRESS = process.env.NEXT_PUBLIC_STUDIO_ADDRESS;
const STUDIO_HOURS = process.env.NEXT_PUBLIC_STUDIO_HOURS;

const services = [
  "Керамика",
  "Полировка",
  "Химчистка",
  "Тонировка",
  "Бронирование",
  "Детейлинг под ключ",
  "Другое",
];

export default function ContactForm() {
  const reduceMotion = useReducedMotion();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    if (!FORMSPREE_URL) {
      setStatus("error");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 10000);

    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
        signal: controller.signal,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      window.clearTimeout(timeout);
    }
  }

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
              Расскажите, какой уход нужен вашему автомобилю, и оставьте контакты для ответа.
            </p>

            <ul className="mt-10 space-y-4 text-sm text-white/80">
              {STUDIO_ADDRESS && <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden /><span>{STUDIO_ADDRESS}</span></li>}
              {STUDIO_PHONE && <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden /><a href={`tel:${STUDIO_PHONE.replace(/[^\d+]/g, "")}`} className="transition-colors hover:text-white">{STUDIO_PHONE}</a></li>}
              {STUDIO_HOURS && <li className="flex items-start gap-3"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden /><span>{STUDIO_HOURS}</span></li>}
            </ul>

            {!FORMSPREE_URL && <p className="mt-8 max-w-md border-l border-gold/60 pl-4 text-sm leading-relaxed text-muted">Чтобы заявки приходили владельцу студии, подключите форму и укажите действующие контакты в настройках проекта.</p>}
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.08 }}
            className="border border-border bg-card p-6 md:p-10"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex min-h-[340px] flex-col items-start justify-center text-left"
                >
                  <p className="font-display text-3xl tracking-wide text-white">
                    ЗАЯВКА ОТПРАВЛЕНА
                  </p>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted">
                    Спасибо! Заявка отправлена. Мы свяжемся с вами по указанным контактам.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="btn-ghost mt-8"
                  >
                    Отправить ещё одну
                  </button>
                </motion.div>
              ) : (
                  <motion.form
                  key="form"
                  initial={reduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  action={FORMSPREE_URL}
                  method="POST"
                  className="space-y-7"
                  aria-busy={status === "loading"}
                  noValidate={false}
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-[11px] uppercase tracking-[0.16em] text-muted"
                    >
                      Имя
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Как к вам обращаться"
                      className="input-underline"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-[11px] uppercase tracking-[0.16em] text-muted"
                    >
                      Телефон
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="+7 (___) ___-__-__"
                      className="input-underline"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="car"
                      className="mb-2 block text-[11px] uppercase tracking-[0.16em] text-muted"
                    >
                      Марка и модель
                    </label>
                    <input
                      id="car"
                      name="car"
                      type="text"
                      required
                      placeholder="Например, Porsche Cayenne"
                      className="input-underline"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-[11px] uppercase tracking-[0.16em] text-muted"
                    >
                      Услуга
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className="input-underline appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 viewBox=%220 0 12 8%22><path fill=%22%23888888%22 d=%22M1 1l5 5 5-5%22/></svg>')] bg-[length:12px] bg-[right_center] bg-no-repeat pr-6"
                    >
                      <option value="" disabled className="bg-card text-muted">
                        Выберите услугу
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-card text-white">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="time" className="mb-2 block text-[11px] uppercase tracking-[0.16em] text-muted">
                      Удобное время для связи <span className="normal-case tracking-normal">(необязательно)</span>
                    </label>
                    <input id="time" name="time" type="text" autoComplete="off" placeholder="Укажите, когда вам удобно" className="input-underline" />
                  </div>

                  {status === "error" && (
                    <p role="alert" className="text-sm text-white/70">
                      {FORMSPREE_URL ? "Не удалось отправить заявку. Попробуйте ещё раз позже." : "Заявка не отправлена: форма пока не подключена. Настройте NEXT_PUBLIC_FORMSPREE_URL перед публикацией сайта."}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading" || !FORMSPREE_URL}
                    className="btn-submit"
                  >
                    {status === "loading" ? "Отправка..." : FORMSPREE_URL ? "Отправить заявку" : "Форма скоро появится"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
