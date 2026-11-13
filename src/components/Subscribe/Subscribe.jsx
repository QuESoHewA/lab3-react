import { useState } from "react";
import { Button, Container } from "@common";
import { images } from "@assets";
import styles from "./Subscribe.module.css";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
    setEmail("");
  }

  return (
    <Container>
      <div className={styles.panel}>
        <img className={styles.send} src={images.send} alt="" />
        <h2 className={styles.title}>Subscribe to get information, latest news and other interesting offers about Jadoo</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.field}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="3" />
              <path d="M4 7l8 6 8-6" />
            </svg>
            <input
              type="email"
              required
              placeholder="Your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <Button type="submit" variant="coral">
            Subscribe
          </Button>
        </form>
        {sent && <p className={styles.thanks}>Thank you for subscribing!</p>}
      </div>
    </Container>
  );
}
