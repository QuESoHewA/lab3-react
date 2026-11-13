import { Card, Container, Header } from "@common";
import { images } from "@assets";
import hotels from "@data/hotels.json";
import styles from "./Pages.module.css";

export default function Hotels() {
  return (
    <Container>
      <Header eyebrow="Stay With Us" title="Hotels" as="h1" />
      <div className={styles.grid}>
        {hotels.map((hotel) => (
          <Card key={hotel.id} image={images[hotel.image]} imageAlt={hotel.title} title={hotel.title}>
            <p>{hotel.city}</p>
            <p className={styles.price}>{hotel.price}</p>
          </Card>
        ))}
      </div>
    </Container>
  );
}
