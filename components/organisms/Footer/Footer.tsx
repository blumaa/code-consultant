import { Icon } from "@/components/atoms/Icon";
import { about } from "@/content/about";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.credit}>
          &copy; {year}{" "}
          <a
            href={about.website}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.creditLink}
          >
            {about.name}
          </a>
        </p>
        <div className={styles.links}>
          <a
            href={about.website}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.portfolioLink}
            aria-label="Aaron's portfolio at aaronblum.co"
          >
            aaronblum.co
            <Icon name="external" size={12} />
          </a>
          <a href={`mailto:${about.email}`} className={styles.iconLink} aria-label="Email Aaron">
            <Icon name="mail" size={18} />
          </a>
          <a
            href={about.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="GitHub"
          >
            <Icon name="github" size={18} />
          </a>
          <a
            href={about.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="LinkedIn"
          >
            <Icon name="linkedin" size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
