import styles from "./Header.module.css";

/** Antet de sectiune: eticheta mica deasupra si titlul. */
export default function Header({ eyebrow, title, align = "center", as: Tag = "h2" }) {
  return (
    <header className={`${styles.header} ${styles[align]}`}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <Tag className={styles.title}>{title}</Tag>
    </header>
  );
}
