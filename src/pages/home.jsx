import HeroSection from "../sections/hero-section";
import TrustedCompanies from "../sections/trusted-companies";
import ResultsMetrics from "../sections/results-metrics";
import WhyChooseUs from "../sections/why-choose-us";
import TechStack from "../sections/tech-stack";
import IndustriesServed from "../sections/industries-served";
import CallToAction from "../sections/call-to-action";
import Testimonials from "../sections/testimonials";
import FaqSection from "../sections/faq-section";
import PricingPlans from "../sections/pricing-plans";

export default function Home() {
  return (
    <main className="px-4">
      <HeroSection />
      <ResultsMetrics />
      <TrustedCompanies />
      <WhyChooseUs />
      <TechStack />
      <IndustriesServed />
      <CallToAction />
      <Testimonials />
      <FaqSection />
     
    </main>
  );
}
