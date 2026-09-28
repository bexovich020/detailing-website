import type { Metadata, Viewport } from "next";
import { Oswald, Manrope } from "next/font/google";
import "./globals.css";

const display = Oswald({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  ...(process.env.NEXT_PUBLIC_SITE_URL
    ? { metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL) }
    : {}),
  title: {
    default: "APEX DETAIL — автодетейлинг в Алматы",
    template: "%s | APEX DETAIL",
  },
  description:
    "Детейлинг в Алматы: полировка кузова, химчистка салона, керамическое покрытие, тонировка и защита плёнкой. Уточните стоимость и запись в WhatsApp.",
  keywords:
    "автодетейлинг алматы, керамика авто, полировка кузова алматы, химчистка авто алматы",
  openGraph: {
    title: "APEX DETAIL — автодетейлинг в Алматы",
    description:
      "Полировка кузова, химчистка салона и защитные покрытия автомобиля в Алматы. Стоимость и запись — в WhatsApp.",
    locale: "ru_KZ",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#07080A",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${display.variable} ${sans.variable}`}>
      <body className="overflow-x-hidden font-sans antialiased">
        {children}
        <div className="grain animate-grain" aria-hidden />
      </body>
    </html>
  );
}
