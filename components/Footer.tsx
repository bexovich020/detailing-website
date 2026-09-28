const links = [
  { href: "#services", label: "Услуги" },
  { href: "#process", label: "Процесс" },
  { href: "#gallery", label: "Галерея" },
  { href: "#contact", label: "Контакты" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-black">
      <div className="mx-auto flex max-w-site flex-col gap-8 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <a
          href="#"
          className="font-display text-lg tracking-[0.18em] text-gold"
        >
          APEX DETAIL
        </a>

        <nav className="flex flex-wrap gap-x-6 gap-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-muted transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

      </div>

      <div className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-site flex-col gap-4 px-5 py-5 text-[11px] tracking-wide text-muted md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} APEX DETAIL</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs">
            <a href={PHONE_URL} className="transition-colors hover:text-white">{DISPLAY_PHONE}</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">WhatsApp</a>
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">@{TELEGRAM_USERNAME}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { DISPLAY_PHONE, PHONE_URL, TELEGRAM_URL, TELEGRAM_USERNAME, WHATSAPP_URL } from "@/lib/contact-links";
