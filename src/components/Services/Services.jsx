import { Container, Header } from "@common";
import { images } from "@assets";
import styles from "./Services.module.css";

export default function Services({ items }) {
  return (
    <Container>
      <Header eyebrow="CATEGORY" title="We Offer Best Services" />
      <ul className={styles.grid}>
        {items.map((service) => (
          <li key={service.id} className={styles.item}>
            <img className={styles.icon} src={images[service.icon]} alt="" />
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.text}>{service.text}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
}
