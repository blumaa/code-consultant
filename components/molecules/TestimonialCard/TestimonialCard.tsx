import { Tag } from "@/components/atoms/Tag";
import styles from "./TestimonialCard.module.css";

type Props = {
  quote: string;
  name: string;
  position: string;
  isPlaceholder?: boolean;
};

export function TestimonialCard({ quote, name, position, isPlaceholder }: Props) {
  return (
    <figure className={styles.card}>
      {isPlaceholder ? (
        <div className={styles.badge}>
          <Tag>Placeholder</Tag>
        </div>
      ) : null}
      <blockquote className={styles.quote}>
        <p>&ldquo;{quote}&rdquo;</p>
      </blockquote>
      <figcaption className={styles.caption}>
        <cite className={styles.name}>{name}</cite>
        <span className={styles.position}>{position}</span>
      </figcaption>
    </figure>
  );
}
