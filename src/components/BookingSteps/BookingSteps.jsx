import { Container, Header } from "@common";
import { images } from "@assets";
import styles from "./BookingSteps.module.css";

export default function BookingSteps({ steps, trip }) {
  return (
    <Container className={styles.section}>
      <div>
        <Header eyebrow="Easy and Fast" title="Book Your Next Trip In 3 Easy Steps" align="left" />
        <ol className={styles.steps}>
          {steps.map((step) => (
            <li key={step.id} className={styles.step}>
              <img src={images[step.icon]} alt="" className={styles.stepIcon} />
              <div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className={styles.visual}>
        <article className={styles.trip}>
          <img className={styles.tripImage} src={images[trip.image]} alt={trip.title} />
          <h3 className={styles.tripTitle}>{trip.title}</h3>
          <p className={styles.tripMeta}>
            {trip.dates} <span>|</span> {trip.author}
          </p>
          <div className={styles.tripIcons} aria-hidden="true">
            <span>
              <svg viewBox="0 0 24 24"><path d="M5 19c8 0 14-6 14-14C11 5 5 11 5 19zm0 0l7-7" /></svg>
            </span>
            <span>
              <svg viewBox="0 0 24 24"><path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2zM9 4v14M15 6v14" /></svg>
            </span>
            <span>
              <svg viewBox="0 0 24 24"><path d="M21 3L3 10l7 3 3 7z" /></svg>
            </span>
          </div>
          <div className={styles.tripFooter}>
            <span>{trip.people} people going</span>
            <svg className={styles.heart} viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z" />
            </svg>
          </div>
        </article>

        <article className={styles.ongoing}>
          <img src={images[trip.ongoing.image]} alt="" className={styles.ongoingImage} />
          <div>
            <span className={styles.ongoingLabel}>Ongoing</span>
            <h4 className={styles.ongoingTitle}>{trip.ongoing.title}</h4>
            <p className={styles.ongoingProgress}>
              <span>{trip.ongoing.progress}%</span> completed
            </p>
            <div className={styles.bar}>
              <div style={{ width: `${trip.ongoing.progress}%` }} />
            </div>
          </div>
        </article>
      </div>
    </Container>
  );
}
