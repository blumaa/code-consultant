import { Icon } from "@/components/atoms/Icon";
import { Tag } from "@/components/atoms/Tag";
import styles from "./WorkCard.module.css";

type Props = {
  title: string;
  description: string;
  href: string;
  tags: string[];
};

export function WorkCard({ title, description, href, tags }: Props) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.tags} aria-label="Technologies">
        {tags.map((tag) => (
          <li key={tag}>
            <Tag>{tag}</Tag>
          </li>
        ))}
      </ul>
      <a
        href={href}
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${title}`}
      >
        <span>Visit</span>
        <Icon name="external" size={14} />
      </a>
    </article>
  );
}
