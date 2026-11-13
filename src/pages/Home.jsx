import { Container, Header } from "@common";
import Hero from "@components/Hero/Hero";
import Services from "@components/Services/Services";
import DestinationList from "@components/DestinationList/DestinationList";
import BookingSteps from "@components/BookingSteps/BookingSteps";
import Testimonials from "@components/Testimonials/Testimonials";
import Partners from "@components/Partners/Partners";
import Subscribe from "@components/Subscribe/Subscribe";
import services from "@data/services.json";
import destinations from "@data/destinations.json";
import steps from "@data/steps.json";
import trip from "@data/trip.json";
import testimonials from "@data/testimonials.json";
import partners from "@data/partners.json";

export default function Home({ navigate }) {
  return (
    <>
      <Hero onFindMore={() => navigate("destinations")} />
      <Services items={services} />
      <Container>
        <Header eyebrow="Top Selling" title="Top Destinations" />
        <DestinationList destinations={destinations} />
      </Container>
      <BookingSteps steps={steps} trip={trip} />
      <Testimonials items={testimonials} />
      <Partners items={partners} />
      <Subscribe />
    </>
  );
}
