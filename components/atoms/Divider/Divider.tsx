import styles from "./Divider.module.css";

type Props = {
  orientation?: "horizontal" | "vertical";
  className?: string;
};

export function Divider({ orientation = "horizontal", className }: Props) {
  const classes = [styles.divider, styles[orientation], className].filter(Boolean).join(" ");
  return <hr aria-orientation={orientation} className={classes} />;
}
