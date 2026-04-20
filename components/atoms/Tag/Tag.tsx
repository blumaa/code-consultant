import type { ReactNode } from "react";
import styles from "./Tag.module.css";

type Props = {
  tone?: "default" | "primary";
  children: ReactNode;
  className?: string;
};

export function Tag({ tone = "default", children, className }: Props) {
  const classes = [styles.tag, styles[tone], className].filter(Boolean).join(" ");
  return <span className={classes}>{children}</span>;
}
