import { HeroStack } from "@/components/animations/HeroStack";
import { Icon } from "@/components/atoms/Icon";
import { about } from "@/content/about";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="top" className={styles.hero} aria-label="Introduction">
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Code audits for vibe-coded apps</p>
          <h1 className={styles.title}>{about.tagline}</h1>
          <p className={styles.subtitle}>
            You shipped fast with AI. Now you want a senior pair of eyes to separate the wins from
            the landmines — bugs, performance, security, UX, and design-system drift.
          </p>
          <div className={styles.ctas}>
            <a href="#book" className={styles.primaryCta}>
              Schedule initial audit
              <Icon name="arrow-right" size={16} />
            </a>
            <a href="#audits" className={styles.secondaryCta}>
              See what I audit
              <Icon name="arrow-down" size={16} />
            </a>
          </div>
        </div>
        <div className={styles.illustration}>
          <HeroStack />
        </div>
      </div>
    </section>
  );
}
