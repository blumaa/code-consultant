import { AuditPill } from "@/components/molecules/AuditPill";
import { audits } from "@/content/audits";
import styles from "./AuditGrid.module.css";

export function AuditGrid() {
  return (
    <section id="audits" className={styles.section} aria-labelledby="audits-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>What I audit</p>
          <h2 id="audits-title" className={styles.title}>
            Six places your vibe-coded app is probably bleeding time
          </h2>
        </header>
        <div className={styles.grid}>
          {audits.map((audit) => (
            <AuditPill key={audit.title} {...audit} />
          ))}
        </div>
      </div>
    </section>
  );
}
