import styles from "./Card.module.css";

/**
 * Card generic: imagine optionala, titlu, valoare in dreapta titlului si continut (children).
 */
export default function Card({ image, imageAlt = "", title, aside, children }) {
  return (
    <article className={styles.card}>
      {image && <img className={styles.image} src={image} alt={imageAlt} />}
      <div className={styles.body}>
        <div className={styles.row}>
          {title && <h3 className={styles.title}>{title}</h3>}
          {aside && <span className={styles.aside}>{aside}</span>}
        </div>
        {children}
      </div>
    </article>
  );
}
