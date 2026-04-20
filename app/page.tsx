import {
  AuditGrid,
  CalendlyEmbed,
  Footer,
  Hero,
  Nav,
  ProcessSteps,
  ServicesGrid,
  TestimonialGrid,
  WorkList,
} from "@/components/organisms";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AuditGrid />
        <ProcessSteps />
        <ServicesGrid />
        <WorkList />
        <TestimonialGrid />
        <CalendlyEmbed />
      </main>
      <Footer />
    </>
  );
}
