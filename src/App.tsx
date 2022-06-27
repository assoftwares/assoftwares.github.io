import Header from "./Components/Header";
import Presentation from "./Components/Presentation";
import Products from "./Components/Products";
import Services from "./Components/Services";
import Customers from "./Components/Customers";
import Footer from "./Components/Footer";
import PopupWidget from "./Components/PopupWidget";

function App() {
  return (
    <>
      <div className="flex-col scroll-smooth">
        <Header />
        <Presentation />
        <Services />
        <Products />
        <Customers />
        <Footer />
      </div>
      <PopupWidget />
    </>
  );
}

export default App;
