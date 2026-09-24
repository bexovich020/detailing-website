export function unsplash(id: string, width = 1600) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;
}

export const media = {
  hero: {
    src: unsplash("photo-1711512972713-9c18f3df7a6d", 2400),
    alt: "Премиальный автомобиль в тёмной студии",
    position: "object-[center_62%]",
  },
  services: {
    ceramic: {
      src: unsplash("photo-1542282088-fe8426682b8f", 1400),
      alt: "Капли воды на поверхности автомобильного кузова",
      position: "object-[center_42%]",
    },
    polish: {
      src: "/images/detailing/polishing.jpg",
      alt: "Мастер полирует кузов автомобиля машинкой",
      position: "object-[center_48%]",
    },
    interior: {
      src: "/images/detailing/interior-vacuum.jpg",
      alt: "Чистка обивки автомобильного сиденья пылесосом",
      position: "object-[center_52%]",
    },
    tint: {
      src: unsplash("photo-1617814076367-b759c7d7e738", 1400),
      alt: "Автомобиль с тёмными стёклами",
      position: "object-[center_58%]",
    },
    ppf: {
      src: unsplash("photo-1711512972544-327ef6a18034", 1400),
      alt: "Деталь автомобильного кузова с отражением света",
      position: "object-[center_40%]",
    },
    full: {
      src: unsplash("photo-1711512972553-40d5931bc685", 1400),
      alt: "Автомобиль в студийном боксе",
      position: "object-[center_48%]",
    },
  },
  process: {
    inspect: {
      src: unsplash("photo-1711512972514-770522ab6b14", 1100),
      alt: "Осмотр лакокрасочного покрытия автомобиля",
      position: "object-center",
    },
    work: {
      src: "/images/detailing/polishing.jpg",
      alt: "Полировка кузова мастером в процессе работы",
      position: "object-[center_48%]",
    },
    finish: {
      src: unsplash("photo-1711512972644-bc0d50285809", 1100),
      alt: "Кузов автомобиля с отражающим блеском",
      position: "object-center",
    },
  },
  gallery: [
    {
      src: "/images/detailing/gallery/polishing-process.jpg",
      alt: "Мастер полирует красный кузов эксцентриковой машинкой в студии",
      category: "ПОЛИРОВКА ЛКП",
      title: "Работа с лаком",
      position: "object-[center_46%]",
    },
    {
      src: "/images/detailing/gallery/care-wash.jpg",
      alt: "Пенная очистка стекла и кузова автомобиля",
      category: "БЕРЕЖНАЯ МОЙКА",
      title: "Подготовка кузова",
      position: "object-[center_48%]",
    },
    {
      src: "/images/detailing/gallery/interior-detail.jpg",
      alt: "Мастер очищает щёткой детали салона автомобиля",
      category: "САЛОН",
      title: "Детейлинг салона",
      position: "object-[center_50%]",
    },
    {
      src: "/images/detailing/gallery/surface-water.jpg",
      alt: "Капли воды и отражения на поверхности кузова автомобиля",
      category: "ДЕТАЛИ КУЗОВА",
      title: "Капли и отражения",
      position: "object-[center_52%]",
    },
  ],
} as const;
