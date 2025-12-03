import AnimatedBackground from "./components/Background";
import BlogsSection from "./sections/BlogsSection";
import FeaturesSection from "./sections/FeaturesSection";
import Hero from "./sections/Hero";
import Partners from "./sections/Partners";
import PriorityCasino from "./sections/PriorityCasino";
import TopCryptoCasinos from "./sections/TopCasinos";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Hero />
      <FeaturesSection />
      <TopCryptoCasinos />
      <BlogsSection />
      <PriorityCasino />
      <Partners />
    </div>
  );
}
