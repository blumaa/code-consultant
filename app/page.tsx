import {
  AuditGrid,
  CalendlyEmbed,
  Footer,
  Hero,
  Nav,
  RubricDownloads,
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
        <RubricDownloads />
        <ServicesGrid />
        <WorkList />
        <TestimonialGrid />
        <CalendlyEmbed />
      </main>
      <Footer />
    </>
  );
}
