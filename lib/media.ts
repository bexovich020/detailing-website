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
      src: unsplash("photo-1711512972635-7297b709ff72", 1400),
      alt: "Отражения света на лакокрасочном покрытии автомобиля",
      position: "object-center",
    },
    interior: {
      src: unsplash("photo-1775500818778-d5bef5e56e21", 1400),
      alt: "Кожаный интерьер автомобиля",
      position: "object-[center_45%]",
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
      src: unsplash("photo-1719119985116-0f362be26586", 1100),
      alt: "Автомобиль в тёмном студийном боксе",
      position: "object-[center_55%]",
    },
    finish: {
      src: unsplash("photo-1711512972644-bc0d50285809", 1100),
      alt: "Кузов автомобиля с отражающим блеском",
      position: "object-center",
    },
  },
  gallery: [
    {
      src: unsplash("photo-1503376780353-7e6692767b70", 1600),
      alt: "Porsche на дороге — визуальный пример",
      label: "Porsche",
      tall: true,
      position: "object-[center_42%]",
    },
    {
      src: unsplash("photo-1493238792000-8113da705763", 1600),
      alt: "Audi R8 на фоне вечернего света — визуальный пример",
      label: "Audi R8",
      tall: false,
      position: "object-[center_40%]",
    },
    {
      src: unsplash("photo-1525609004556-c46c7d6cf023", 1600),
      alt: "Lamborghini с отражением света на кузове — визуальный пример",
      label: "Lamborghini",
      tall: false,
      position: "object-[center_48%]",
    },
    {
      src: unsplash("photo-1618843479313-40f8afb4b4d8", 1600),
      alt: "Mercedes-AMG GT — визуальный пример",
      label: "Mercedes-AMG GT",
      tall: true,
      position: "object-[center_42%]",
    },
    {
      src: unsplash("photo-1544636331-e26879cd4d9b", 1600),
      alt: "Спортивный автомобиль в ночном свете — визуальный пример",
      label: "Автомобиль в ночном свете",
      tall: false,
      position: "object-[center_55%]",
    },
    {
      src: unsplash("photo-1555215695-3004980ad54e", 1600),
      alt: "BMW на городской улице — визуальный пример",
      label: "BMW",
      tall: false,
      position: "object-center",
    },
  ],
} as const;
