import { Icon, type IconName } from "@/components/atoms/Icon";
import styles from "./AuditPill.module.css";

type Props = {
  icon: IconName;
  title: string;
  description: string;
};

export function AuditPill({ icon, title, description }: Props) {
  return (
    <article className={styles.pill}>
      <div className={styles.iconWrap} aria-hidden="true">
        <Icon name={icon} size={22} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
