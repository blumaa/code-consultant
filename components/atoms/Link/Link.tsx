import type { AnchorHTMLAttributes, ReactNode } from "react";
import styles from "./Link.module.css";

type Props = {
  href: string;
  children: ReactNode;
  external?: boolean;
  variant?: "default" | "subtle";
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

function isExternalHref(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

export function Link({ href, children, external, variant = "default", className, ...rest }: Props) {
  const isExternal = external ?? isExternalHref(href);
  const classes = [styles.link, styles[variant], className].filter(Boolean).join(" ");
  return (
    <a
      href={href}
      className={classes}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
