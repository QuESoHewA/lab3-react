import Services from "@components/Services/Services";
import Partners from "@components/Partners/Partners";
import services from "@data/services.json";
import partners from "@data/partners.json";

export default function Flights() {
  return (
    <>
      <Services items={services} />
      <Partners items={partners} />
    </>
  );
}
