import Hero from "@/components/Hero";
import Form from "@/components/Form";
import Reviews from "@/components/Reviews";
import HowItworks from "@/components/HowItworks";
import MeetOwner from "@/components/MeetOwner";
import WorkGallery from "@/components/WorkGallery";
import FaqSection from "@/components/Faq-Section";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <section>
      <Hero />
      <Form />
      <Reviews />
      <HowItworks />
      <WorkGallery />
      <MeetOwner />
      <FaqSection />
      <CTA />
      <Footer />
    </section>
  );
}
