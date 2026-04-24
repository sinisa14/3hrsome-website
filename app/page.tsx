import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Proof from "@/components/Proof";
import Pricing from "@/components/Pricing";
import Founder from "@/components/Founder";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Proof />
      <Pricing />
      <Founder />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
