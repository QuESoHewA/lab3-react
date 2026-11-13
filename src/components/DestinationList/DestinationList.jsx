import { Card } from "@common";
import { images } from "@assets";
import styles from "./DestinationList.module.css";

export default function DestinationList({ destinations }) {
  return (
    <div className={styles.grid}>
      {destinations.map((place) => (
        <Card key={place.id} image={images[place.image]} imageAlt={place.title} title={place.title} aside={place.price}>
          <p className={styles.days}>
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 2L2 10.5l8.5 3L13.5 22z" fill="currentColor" />
            </svg>
            {place.days} Days Trip
          </p>
        </Card>
      ))}
    </div>
  );
}
