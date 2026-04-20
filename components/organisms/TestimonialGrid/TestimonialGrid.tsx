import { TestimonialCard } from "@/components/molecules/TestimonialCard";
import { testimonials } from "@/content/testimonials";
import styles from "./TestimonialGrid.module.css";

export function TestimonialGrid() {
  return (
    <section id="testimonials" className={styles.section} aria-labelledby="testimonials-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Testimonials</p>
          <h2 id="testimonials-title" className={styles.title}>
            What clients say
          </h2>
        </header>
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <TestimonialCard key={t.quote} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
