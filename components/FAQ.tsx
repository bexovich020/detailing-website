import { WHATSAPP_URL } from "@/lib/contact-links";

const questions = [
  {
    question: "От чего зависит стоимость работ?",
    answer:
      "От выбранной услуги и состояния автомобиля. Напишите нам — уточним задачу и сориентируем по стоимости до записи.",
  },
  {
    question: "Как понять, какая услуга нужна автомобилю?",
    answer:
      "Расскажите, что хотите изменить или защитить. Обсудим состояние автомобиля и подходящий объём работ.",
  },
  {
    question: "Как записаться?",
    answer:
      "Напишите в WhatsApp или Telegram либо позвоните. Уточним свободные даты и договоримся о времени.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-black py-20 md:py-28" aria-labelledby="faq-title">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Перед записью
            </p>
            <h2 id="faq-title" className="font-display text-[36px] tracking-wide text-white md:text-5xl">
              ЧАСТЫЕ ВОПРОСЫ
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Если не нашли ответ — спросите напрямую, поможем сориентироваться.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-7 w-full sm:w-auto">
              Спросить в WhatsApp
            </a>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {questions.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="flex min-h-10 cursor-pointer list-none items-center justify-between gap-5 text-left text-[15px] font-medium text-white marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                  {item.question}
                  <span aria-hidden className="shrink-0 text-xl font-light text-gold transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-xl pt-3 text-sm leading-[1.75] text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
