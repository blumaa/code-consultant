import {
  AuditGrid,
  CalendlyEmbed,
  Footer,
  Hero,
  Nav,
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
        <ServicesGrid />
        <WorkList />
        <TestimonialGrid />
        <CalendlyEmbed />
      </main>
      <Footer />
    </>
  );
}
