import { useState } from "react";
import { Container, Header } from "@common";
import { images } from "@assets";
import styles from "./Testimonials.module.css";

export default function Testimonials({ items }) {
  const [active, setActive] = useState(0);
  const current = items[active];
  const next = items[(active + 1) % items.length];

  const prev = () => setActive((active - 1 + items.length) % items.length);
  const forward = () => setActive((active + 1) % items.length);

  return (
    <Container className={styles.section}>
      <div>
        <Header eyebrow="TESTIMONIALS" title="What People Say About Us." align="left" />
        <div className={styles.dots}>
          {items.map((item, index) => (
            <button
              key={item.id}
              className={`${styles.dot} ${index === active ? styles.dotActive : ""}`}
              onClick={() => setActive(index)}
              aria-label={`Testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className={styles.slider}>
        <div className={styles.stack}>
          <blockquote className={styles.card}>
            <img className={styles.avatar} src={images[current.avatar]} alt={current.name} />
            <p className={styles.quote}>“{current.quote}”</p>
            <footer>
              <cite className={styles.name}>{current.name}</cite>
              <span className={styles.place}>{current.place}</span>
            </footer>
          </blockquote>
          <div className={styles.back} aria-hidden="true">
            <span className={styles.name}>{next.name}</span>
            <span className={styles.place}>{next.place}</span>
          </div>
        </div>

        <div className={styles.arrows}>
          <button onClick={prev} aria-label="Previous">
            <svg viewBox="0 0 16 10"><path d="M1 9l7-7 7 7" /></svg>
          </button>
          <button onClick={forward} aria-label="Next">
            <svg viewBox="0 0 16 10"><path d="M1 1l7 7 7-7" /></svg>
          </button>
        </div>
      </div>
    </Container>
  );
}
