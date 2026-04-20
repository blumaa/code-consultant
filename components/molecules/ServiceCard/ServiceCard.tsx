import { Icon } from "@/components/atoms/Icon";
import { Link } from "@/components/atoms/Link";
import styles from "./ServiceCard.module.css";

type Props = {
  title: string;
  description: string;
  bullets: string[];
  price?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export function ServiceCard({ title, description, bullets, price, ctaHref, ctaLabel }: Props) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {price ? <p className={styles.price}>{price}</p> : null}
      </header>
      <p className={styles.description}>{description}</p>
      {bullets.length > 0 ? (
        <ul className={styles.bullets}>
          {bullets.map((bullet) => (
            <li key={bullet} className={styles.bullet}>
              <Icon name="check" size={16} className={styles.bulletIcon} />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {ctaHref && ctaLabel ? (
        <Link href={ctaHref} className={styles.cta}>
          {ctaLabel} <Icon name="arrow-right" size={16} />
        </Link>
      ) : null}
    </article>
  );
}
