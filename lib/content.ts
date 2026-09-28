import { media } from "@/lib/media";
import { WHATSAPP_PHONE } from "@/lib/contact-links";

export type ServiceCategory = "Кузов" | "Салон" | "Стёкла" | "Комплекс";

export type Service = {
  id: string;
  number: string;
  title: string;
  category: ServiceCategory;
  description: string;
  image: { src: string; alt: string; position: string };
};

export const services: Service[] = [
  {
    id: "ceramic",
    number: "01",
    title: "Керамическое покрытие",
    category: "Кузов",
    description:
      "Защитное покрытие для кузова с выразительным блеском и водоотталкивающим эффектом.",
    image: media.services.ceramic,
  },
  {
    id: "polish",
    number: "02",
    title: "Полировка кузова",
    category: "Кузов",
    description:
      "Коррекция внешнего вида лакокрасочного покрытия и восстановление блеска кузова.",
    image: media.services.polish,
  },
  {
    id: "interior",
    number: "03",
    title: "Химчистка салона",
    category: "Салон",
    description:
      "Деликатный уход за интерьером и основными поверхностями салона автомобиля.",
    image: media.services.interior,
  },
  {
    id: "tint",
    number: "04",
    title: "Тонировка стёкол",
    category: "Стёкла",
    description:
      "Тонировка стёкол с подбором решения под автомобиль и ваши пожелания.",
    image: media.services.tint,
  },
  {
    id: "ppf",
    number: "05",
    title: "Бронирование плёнкой",
    category: "Кузов",
    description:
      "Защитная плёнка для кузова. Можно обсудить отдельные элементы или весь автомобиль.",
    image: media.services.ppf,
  },
  {
    id: "full",
    number: "06",
    title: "Детейлинг под ключ",
    category: "Комплекс",
    description:
      "Комплексный уход за кузовом и салоном с набором работ под состояние автомобиля.",
    image: media.services.full,
  },
];

export const serviceCategories: ServiceCategory[] = ["Кузов", "Салон", "Стёкла", "Комплекс"];

export function quoteUrl(serviceTitle: string) {
  const text = `Здравствуйте! Хочу узнать стоимость: ${serviceTitle}. Подскажите, пожалуйста, по цене и свободным датам.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

export const steps = [
  {
    number: "01",
    title: "Запись",
    text: "Расскажите, что хотите улучшить. Обсудим задачу и удобное время.",
    image: media.process.booking,
  },
  {
    number: "02",
    title: "Диагностика",
    text: "Оцениваем состояние автомобиля и уточняем, какой уход ему подходит.",
    image: media.process.inspect,
  },
  {
    number: "03",
    title: "Работа",
    text: "Выполняем согласованные работы и уделяем внимание деталям.",
    image: media.process.work,
  },
  {
    number: "04",
    title: "Выдача",
    text: "Показываем результат и рассказываем, как ухаживать за автомобилем дальше.",
    image: media.process.handover,
  },
];

export const principles = [
  {
    number: "01",
    title: "Под вашу задачу",
    text: "Сначала обсуждаем, что важно именно для вас и вашего автомобиля.",
  },
  {
    number: "02",
    title: "Понятный план",
    text: "Согласовываем состав работ до того, как приступим к уходу.",
  },
  {
    number: "03",
    title: "Внимание к деталям",
    text: "Работаем с кузовом и интерьером, учитывая их состояние.",
  },
];

export const faqs = [
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

export const navLinks = [
  { href: "#services", label: "Услуги" },
  { href: "#result", label: "Результат" },
  { href: "#process", label: "Процесс" },
  { href: "#gallery", label: "Галерея" },
  { href: "#pricing", label: "Стоимость" },
  { href: "#contact", label: "Контакты" },
];
