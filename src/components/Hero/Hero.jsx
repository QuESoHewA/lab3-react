import { Button, Container } from "@common";
import { images } from "@assets";
import styles from "./Hero.module.css";

export default function Hero({ onFindMore }) {
  return (
    <section className={styles.hero}>
      <img className={styles.image} src={images.hero} alt="Traveler sitting on a suitcase" />
      <Container spacing={false} className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Best Destinations around the world</span>
          <h1 className={styles.title}>
            Travel, <span className={styles.underline}>enjoy</span> and live a new and full life
          </h1>
          <p className={styles.text}>
            Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening.
            Park gate sell they west hard for the.
          </p>
          <div className={styles.actions}>
            <Button onClick={onFindMore}>Find out more</Button>
            <button className={styles.play}>
              <span className={styles.playIcon} aria-hidden="true" />
              Play Demo
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
