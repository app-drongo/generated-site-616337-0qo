import Hero from '../components/Hero';
import Services from '../components/Services';
import Cta from '../components/Cta';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section id="hero" className="scroll-mt-16">
        <Hero />
      </section>
      <section id="services" className="scroll-mt-16">
        <Services />
      </section>
      <section id="cta" className="scroll-mt-16">
        <Cta />
      </section>
    </main>
  );
}