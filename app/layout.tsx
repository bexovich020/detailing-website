import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: {
    default: "APEX DETAIL — автодетейлинг в Алматы",
    template: "%s | APEX DETAIL",
  },
  description:
    "Полировка кузова, защитные покрытия и уход за салоном автомобиля в Алматы. Ознакомьтесь с услугами APEX DETAIL и оставьте заявку.",
  keywords:
    "автодетейлинг алматы, керамика авто, полировка кузова алматы, химчистка авто алматы",
  openGraph: {
    title: "APEX DETAIL — автодетейлинг в Алматы",
    description:
      "Полировка кузова, защитные покрытия и уход за салоном автомобиля.",
    locale: "ru_KZ",
    type: "website",
  },
  twitter: { card: "summary" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${bebas.variable} ${inter.variable}`}>
      <body className="overflow-x-hidden font-sans antialiased">{children}</body>
    </html>
  );
}
