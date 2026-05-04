import type { ReactNode } from "react";
import styles from "./NavLink.module.css";

type Props = {
  href: string;
  children: ReactNode;
  onClick?: () => void;
};

export function NavLink({ href, children, onClick }: Props) {
  return (
    <a href={href} className={styles.link} onClick={onClick}>
      {children}
    </a>
  );
}
