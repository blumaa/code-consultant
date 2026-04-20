import { ServiceCard } from "@/components/molecules/ServiceCard";
import { services } from "@/content/services";
import styles from "./ServicesGrid.module.css";

export function ServicesGrid() {
  return (
    <section id="services" className={styles.section} aria-labelledby="services-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Services</p>
          <h2 id="services-title" className={styles.title}>
            How I work with vibe-coders
          </h2>
        </header>
        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
