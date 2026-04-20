import { WorkCard } from "@/components/molecules/WorkCard";
import { work } from "@/content/work";
import styles from "./WorkList.module.css";

export function WorkList() {
  return (
    <section id="work" className={styles.section} aria-labelledby="work-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Selected work</p>
          <h2 id="work-title" className={styles.title}>
            Projects I've helped ship and solidify
          </h2>
        </header>
        <div className={styles.grid}>
          {work.map((item) => (
            <WorkCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
