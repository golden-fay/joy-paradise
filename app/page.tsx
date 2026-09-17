import { About } from "@/components/About";
import { Boundaries } from "@/components/Boundaries";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { WhyJoyParadise } from "@/components/WhyJoyParadise";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Boundaries />
        <WhyJoyParadise />
        <Mission />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
