"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Phone, Send } from "lucide-react";
import { PHONE_URL, TELEGRAM_URL, WHATSAPP_URL } from "@/lib/contact-links";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <nav aria-label="Быстрая связь" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 gap-2 border-t border-white/10 bg-[#0b1012]/95 px-3 pb-[max(env(safe-area-inset-bottom),0.5rem)] pt-2 backdrop-blur-lg lg:hidden">
        <a href={PHONE_URL} className="flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-full text-[10px] font-medium text-white/75 transition-colors hover:bg-white/5 hover:text-white">
          <Phone size={17} aria-hidden /> Позвонить
        </a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-full bg-[#a9cbc6] text-[10px] font-semibold text-[#0b1012] transition-colors hover:bg-[#c0d9d5]">
          <MessageCircle size={17} aria-hidden /> WhatsApp
        </a>
        <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-full text-[10px] font-medium text-white/75 transition-colors hover:bg-white/5 hover:text-white">
          <Send size={17} aria-hidden /> Telegram
        </a>
      </nav>
      <AnimatePresence>
      {visible && (
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Написать в WhatsApp"
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#a9cbc6] text-[#0b1012] shadow-[0_6px_18px_rgba(0,0,0,0.35)] transition-colors hover:bg-[#c0d9d5] lg:flex"
        >
          <MessageCircle size={22} strokeWidth={1.6} />
        </motion.a>
      )}
    </AnimatePresence>
    </>
  );
}
