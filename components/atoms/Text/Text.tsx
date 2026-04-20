import type { ReactNode } from "react";
import styles from "./Text.module.css";

type Props = {
  as?: "p" | "span";
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  tone?: "default" | "muted" | "subtle";
  children: ReactNode;
  className?: string;
};

export function Text({
  as: Component = "p",
  size = "base",
  tone = "default",
  children,
  className,
}: Props) {
  const classes = [styles.text, styles[`size-${size}`], styles[`tone-${tone}`], className]
    .filter(Boolean)
    .join(" ");
  return <Component className={classes}>{children}</Component>;
}
