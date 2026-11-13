import { useState } from "react";
import { Button, Container } from "@common";
import styles from "./Navbar.module.css";

export default function Navbar({ links, currentPage, navigate }) {
  const [open, setOpen] = useState(false);

  function go(page) {
    navigate(page);
    setOpen(false);
  }

  // "home" se deschide prin logo, restul linkurilor apar in meniu
  const menu = links.filter((link) => link.id !== "home");

  return (
    <Container as="header" spacing={false} className={styles.navbar}>
      <button className={styles.logo} onClick={() => go("home")} aria-label="Jadoo - Home">
        Jad<span>oo</span>
      </button>

      <button
        className={`${styles.toggle} ${open ? styles.toggleOpen : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`${styles.menu} ${open ? styles.menuOpen : ""}`}>
        <ul className={styles.links}>
          {menu.map((link) => (
            <li key={link.id}>
              <button
                className={`${styles.link} ${currentPage === link.id ? styles.active : ""}`}
                onClick={() => go(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <div className={styles.actions}>
          <Button variant="text">Login</Button>
          <Button variant="outline">Sign up</Button>
          <span className={styles.lang}>
            EN
            <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true">
              <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </span>
        </div>
      </nav>
    </Container>
  );
}
