import { Icon } from "@/components/atoms/Icon";
import styles from "./DownloadLink.module.css";

type Props = {
  href: string;
  label: string;
  fileName?: string;
};

export function DownloadLink({ href, label, fileName }: Props) {
  return (
    <a href={href} download={fileName ?? true} className={styles.link}>
      <Icon name="download" size={16} />
      {label}
    </a>
  );
}
