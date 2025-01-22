import "./App.css";
import { HeroSection } from "./components/mainBaner/HeroSection";
import { FavouriteCoffee } from "./components/FavouriteCoffee/FavouriteCoffee";
import { About } from "./components/About/About";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <FavouriteCoffee />
      <About />
    </div>
  );
}

export default App;
