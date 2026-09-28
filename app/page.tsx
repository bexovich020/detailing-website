import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import StudioApproach from "@/components/StudioApproach";
import FAQ from "@/components/FAQ";
import ContactOptions from "@/components/ContactOptions";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="overflow-x-clip pb-16 lg:pb-0">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Gallery />
      <StudioApproach />
      <FAQ />
      <ContactOptions />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
