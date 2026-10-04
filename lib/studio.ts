import { media } from "@/lib/media";

export const SITE_URL = "https://apexdetail-kz.vercel.app";

export const studio = {
  name: "APEX DETAIL",
  city: "Алматы",
  country: "Казахстан",
  phone: "+77074853010",
  displayPhone: "+7 707 485 30 10",
  whatsappNumber: "77074853010",
  telegramUsername: "uantufrifofaiv",
  address: "",
  hours: "",
  metaDescription:
    "Детейлинг в {city}: полировка кузова, химчистка салона, керамическое покрытие, тонировка и защита плёнкой. Уточните стоимость и запись в WhatsApp.",
  keywords: [
    "автодетейлинг {city}",
    "керамика авто",
    "полировка кузова {city}",
    "химчистка авто {city}",
  ],
  hero: {
    eyebrow: "Премиальный автодетейлинг",
    lines: ["Детейлинг", "кузова", "и салона"],
    description:
      "Полировка, химчистка, керамика и защитная плёнка. Обсудим состояние автомобиля и подскажем, с чего начать.",
    primaryCta: "Узнать стоимость",
    secondaryCta: "Выбрать услугу",
  },
  contact: {
    headingLines: ["Готовы вернуть", "автомобилю", "идеальный вид?"],
    description:
      "Расскажите, что хотите сделать с автомобилем. Обсудим подходящую услугу, стоимость и свободные даты.",
    whatsappCta: "Написать в WhatsApp",
    telegramCta: "Telegram",
    phoneCta: "Позвонить",
  },
  pricingCta: "Узнать цену",
  serviceCta: "Узнать стоимость",
  quoteMessage: (serviceName: string) =>
    `Здравствуйте! Хочу узнать стоимость: ${serviceName}. Подскажите, пожалуйста, по цене и свободным датам.`,
  contactMessage:
    "Здравствуйте! Хочу записаться на детейлинг. Подскажите, пожалуйста, по стоимости и свободным датам.",
  services: [
    { id: "ceramic", number: "01", title: "Керамическое покрытие", category: "Кузов", price: "120 000 ₸", unit: "за автомобиль", description: "Защитное покрытие для кузова с выразительным блеском и водоотталкивающим эффектом.", image: media.services.ceramic },
    { id: "polish", number: "02", title: "Полировка кузова", category: "Кузов", price: "60 000 ₸", unit: "за автомобиль", description: "Коррекция внешнего вида лакокрасочного покрытия и восстановление блеска кузова.", image: media.services.polish },
    { id: "interior", number: "03", title: "Химчистка салона", category: "Салон", price: "45 000 ₸", unit: "за автомобиль", description: "Деликатный уход за интерьером и основными поверхностями салона автомобиля.", image: media.services.interior },
    { id: "tint", number: "04", title: "Тонировка стёкол", category: "Стёкла", price: "35 000 ₸", unit: "за автомобиль", description: "Тонировка стёкол с подбором решения под автомобиль и ваши пожелания.", image: media.services.tint },
    { id: "ppf", number: "05", title: "Бронирование плёнкой", category: "Кузов", price: "35 000 ₸", unit: "за элемент", description: "Защитная плёнка для кузова. Можно обсудить отдельные элементы или весь автомобиль.", image: media.services.ppf },
    { id: "full", number: "06", title: "Детейлинг под ключ", category: "Комплекс", price: "120 000 ₸", unit: "за автомобиль", description: "Комплексный уход за кузовом и салоном с набором работ под состояние автомобиля.", image: media.services.full },
  ],
} as const;

export const studioDescription = studio.metaDescription.replaceAll("{city}", studio.city);
export const studioKeywords = studio.keywords.map((keyword) => keyword.replaceAll("{city}", studio.city));

export const serviceCategories = ["Кузов", "Салон", "Стёкла", "Комплекс"] as const;
export type ServiceCategory = (typeof serviceCategories)[number];
export type Service = (typeof studio.services)[number];
export const services: readonly Service[] = studio.services;

export function quoteUrl(serviceTitle: string) {
  return `https://wa.me/${studio.whatsappNumber}?text=${encodeURIComponent(studio.quoteMessage(serviceTitle))}`;
}

export const WHATSAPP_URL = `https://wa.me/${studio.whatsappNumber}?text=${encodeURIComponent(studio.contactMessage)}`;
export const PHONE_URL = `tel:${studio.phone}`;
export const TELEGRAM_URL = `https://t.me/${studio.telegramUsername}`;
