import { DownloadLink } from "@/components/atoms/DownloadLink";
import { Icon } from "@/components/atoms/Icon";
import { rubrics } from "@/content/rubrics";
import styles from "./RubricDownloads.module.css";

export function RubricDownloads() {
  return (
    <section id="rubrics" className={styles.section} aria-labelledby="rubrics-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Free resources</p>
          <h2 id="rubrics-title" className={styles.title}>
            Download the rubrics I use in every audit
          </h2>
        </header>
        <div className={styles.grid}>
          {rubrics.map((rubric) => (
            <article key={rubric.slug} className={styles.card}>
              <div className={styles.iconWrap} aria-hidden="true">
                <Icon name={rubric.icon} size={22} />
              </div>
              <h3 className={styles.cardTitle}>{rubric.title}</h3>
              <p className={styles.criteria}>
                {rubric.criteria.length} criteria &middot; 5-point scale
              </p>
              <DownloadLink
                href={`/api/rubrics/${rubric.slug}`}
                label="Download PDF"
                fileName={`${rubric.slug}-rubric.pdf`}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
