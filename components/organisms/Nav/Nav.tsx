"use client";

import { useCallback, useEffect, useState } from "react";
import { Icon } from "@/components/atoms/Icon";
import { Logo } from "@/components/atoms/Logo";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";
import { NavLink } from "@/components/molecules/NavLink";
import styles from "./Nav.module.css";

const LINKS = [
  { href: "#audits", label: "Audits" },
  { href: "#rubrics", label: "Rubrics" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#book", label: "Schedule" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <Logo />
        <nav className={styles.desktopLinks} aria-label="Primary">
          {LINKS.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className={styles.actions}>
          <ThemeToggle />
          <button
            type="button"
            className={styles.hamburger}
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <Icon name={open ? "x" : "menu"} size={22} />
          </button>
        </div>
      </div>
      {open && (
        <nav className={styles.mobileMenu} aria-label="Mobile">
          {LINKS.map((link) => (
            <NavLink key={link.href} href={link.href} onClick={close}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
