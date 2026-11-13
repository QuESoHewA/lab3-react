import { Container, Header } from "@common";
import DestinationList from "@components/DestinationList/DestinationList";
import destinations from "@data/destinations.json";

export default function Destinations() {
  return (
    <Container>
      <Header eyebrow="Top Selling" title="Top Destinations" as="h1" />
      <DestinationList destinations={destinations} />
    </Container>
  );
}
