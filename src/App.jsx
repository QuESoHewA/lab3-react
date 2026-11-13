import { useNavigation } from "@hooks/useNavigation";
import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";
import { Home, Destinations, Hotels, Flights, Bookings } from "@pages";
import navigation from "@data/navigation.json";
import footer from "@data/footer.json";

const PAGES = navigation.map((link) => link.id); // ["home", "destinations", "hotels", "flights", "bookings"]

function App() {
  const { currentPage, navigate } = useNavigation(PAGES);

  let page;
  if (currentPage === "home") {
    page = <Home navigate={navigate} />;
  } else if (currentPage === "destinations") {
    page = <Destinations />;
  } else if (currentPage === "hotels") {
    page = <Hotels />;
  } else if (currentPage === "flights") {
    page = <Flights />;
  } else if (currentPage === "bookings") {
    page = <Bookings />;
  }

  return (
    <>
      <Navbar links={navigation} currentPage={currentPage} navigate={navigate} />
      <main>{page}</main>
      <Footer data={footer} />
    </>
  );
}

export default App;
