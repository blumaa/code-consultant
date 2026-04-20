import { StepCard } from "@/components/molecules/StepCard";
import styles from "./ProcessSteps.module.css";

const STEPS = [
  {
    number: 1,
    title: "Intake",
    description:
      "A 30-minute call to understand your stack, pain points, and what success looks like. Free, no pitch.",
  },
  {
    number: 2,
    title: "Audit",
    description:
      "I read your code carefully — repo, PRs, running app, analytics. I hunt for the six audit domains and take notes.",
  },
  {
    number: 3,
    title: "Report + Pairing",
    description:
      "You get a prioritized report with severity and fix recipes. Then we pair to ship the top fixes.",
  },
] as const;

export function ProcessSteps() {
  return (
    <section id="process" className={styles.section} aria-labelledby="process-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>How it works</p>
          <h2 id="process-title" className={styles.title}>
            Three steps, nothing mysterious
          </h2>
        </header>
        <div className={styles.grid}>
          {STEPS.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
