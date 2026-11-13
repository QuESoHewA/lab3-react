import BookingSteps from "@components/BookingSteps/BookingSteps";
import Subscribe from "@components/Subscribe/Subscribe";
import steps from "@data/steps.json";
import trip from "@data/trip.json";

export default function Bookings() {
  return (
    <>
      <BookingSteps steps={steps} trip={trip} />
      <Subscribe />
    </>
  );
}
