import { Logo } from "@/components/atoms/Logo";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";
import { NavLink } from "@/components/molecules/NavLink";
import styles from "./Nav.module.css";

const LINKS = [
  { href: "#audits", label: "Audits" },
  { href: "#process", label: "Process" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#book", label: "Schedule" },
] as const;

export function Nav() {
  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <Logo />
        <nav className={styles.links} aria-label="Primary">
          {LINKS.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className={styles.actions}>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
