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

      {/* Home section */}
      <section id="home">
        <Hero />
      </section>

      {/* Features */}
      <section id="features">
        <FeaturesSection />
      </section>

      {/* Crypto Casinos */}
      <section id="crypto-casinos">
        <TopCryptoCasinos />
      </section>

      {/* Blogs */}
      <section id="blogs">
        <BlogsSection />
      </section>

      {/* Priority Casino */}
      <section id="priority-casino">
        <PriorityCasino />
      </section>

      {/* Partners */}
      <section id="partners">
        <Partners />
      </section>
    </div>
  );
}
