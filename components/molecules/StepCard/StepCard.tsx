import styles from "./StepCard.module.css";

type Props = {
  number: number;
  title: string;
  description: string;
};

export function StepCard({ number, title, description }: Props) {
  const formatted = String(number).padStart(2, "0");
  return (
    <article className={styles.step}>
      <div className={styles.number} aria-hidden="true">
        {formatted}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <span className={styles.srOnly}>Step {formatted}</span>
    </article>
  );
}
