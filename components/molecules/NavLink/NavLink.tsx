import type { ReactNode } from "react";
import styles from "./NavLink.module.css";

type Props = {
  href: string;
  children: ReactNode;
};

export function NavLink({ href, children }: Props) {
  return (
    <a href={href} className={styles.link}>
      {children}
    </a>
  );
}
