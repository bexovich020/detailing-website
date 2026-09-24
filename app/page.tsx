import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Gallery />
      <Reviews />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
