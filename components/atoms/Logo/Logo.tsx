import styles from "./Logo.module.css";

export function Logo() {
  return (
    <a
      // href="https://aaronblum.pro"
      // target="_blank"
      href="#top"
      rel="noopener noreferrer"
      className={styles.logo}
      aria-label="Aaron Blum — Code Consultant, portfolio"
    >
      <span className={styles.mark}>
        <span className={styles.brace} aria-hidden="true">
          {"{"}
        </span>
        <span className={styles.name}>aaronBlum:</span>
        <span className={styles.word}>"code consultant"</span>
        <span className={styles.brace} aria-hidden="true">
          {"}"}
        </span>
      </span>
    </a>
  );
}
