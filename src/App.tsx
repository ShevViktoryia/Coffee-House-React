import "./App.css";
import { HeroSection } from "./components/mainBaner/HeroSection";
import { FavouriteCoffee } from "./components/FavouriteCoffee/FavouriteCoffee";
import { About } from "./components/About/About";
import { MobileApp } from "./components/MobileApp/MobileApp";
import { Footer } from "./layout/Footer/Footer";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <FavouriteCoffee />
      <About />
      <MobileApp />
      <Footer />
    </div>
  );
}

export default App;
