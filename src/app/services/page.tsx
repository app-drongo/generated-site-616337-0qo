import PageHeaderServices from '../../components/PageHeaderServices';
import Services from '../../components/Services';
import Features from '../../components/Features';
import Cta from '../../components/Cta';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <section id="page-header" className="scroll-mt-16">
        <PageHeaderServices />
      </section>
      <section id="services" className="scroll-mt-16">
        <Services />
      </section>
      <section id="features" className="scroll-mt-16">
        <Features />
      </section>
      <section id="cta" className="scroll-mt-16">
        <Cta />
      </section>
    </main>
  );
}