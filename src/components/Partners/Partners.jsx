import { Container } from "@common";
import { images } from "@assets";
import styles from "./Partners.module.css";

export default function Partners({ items }) {
  return (
    <Container>
      <ul className={styles.list}>
        {items.map((partner) => (
          <li key={partner.id} className={styles.item}>
            <img src={images[partner.logo]} alt={partner.name} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
