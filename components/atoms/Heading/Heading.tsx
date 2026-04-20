import { createElement, type ReactNode } from "react";
import styles from "./Heading.module.css";

type Level = 1 | 2 | 3 | 4 | 5 | 6;
type Size = "xl" | "2xl" | "3xl" | "4xl" | "5xl";

type Props = {
  level?: Level;
  size?: Size;
  children: ReactNode;
  className?: string;
  id?: string;
};

const DEFAULT_SIZE_BY_LEVEL: Record<Level, Size> = {
  1: "5xl",
  2: "4xl",
  3: "3xl",
  4: "2xl",
  5: "xl",
  6: "xl",
};

export function Heading({ level = 1, size, children, className, id }: Props) {
  const visualSize = size ?? DEFAULT_SIZE_BY_LEVEL[level];
  const classes = [styles.heading, styles[`size-${visualSize}`], className]
    .filter(Boolean)
    .join(" ");
  return createElement(`h${level}`, { className: classes, id }, children);
}
