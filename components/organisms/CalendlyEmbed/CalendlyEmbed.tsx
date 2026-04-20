import { about } from "@/content/about";
import styles from "./CalendlyEmbed.module.css";

export function CalendlyEmbed() {
  return (
    <section id="book" className={styles.section} aria-labelledby="book-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Schedule initial audit</p>
          <h2 id="book-title" className={styles.title}>
            Pick a time. 30 minutes, no pitch.
          </h2>
          <p className={styles.subtitle}>
            Tell me what you're building and what's been rough. I'll tell you whether an audit would
            help and what it would cost. If we're a fit, we book the audit. If not, you leave with a
            couple of free pointers.
          </p>
        </header>
        <div className={styles.embedWrap}>
          <iframe
            src={about.calendlyUrl}
            title="Book a call with Aaron on Calendly"
            className={styles.iframe}
            loading="lazy"
          />
        </div>
        <p className={styles.fallback}>
          Prefer email?{" "}
          <a href={`mailto:${about.email}`} className={styles.fallbackLink}>
            Email me directly
          </a>
          .
        </p>
      </div>
    </section>
  );
}
