import Preloader from "@/components/Preloader";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import StudioApproach from "@/components/StudioApproach";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import ContactOptions from "@/components/ContactOptions";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Preloader />
      <Cursor />
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <Ticker />
        <Services />
        <BeforeAfter />
        <Process />
        <Gallery />
        <StudioApproach />
        <Pricing />
        <FAQ />
        <ContactOptions />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
