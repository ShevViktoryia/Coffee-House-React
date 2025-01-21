import "./App.css";
import { HeroSection } from "./components/mainBaner/HeroSection";
import { FavouriteCoffee } from "./components/FavouriteCoffee/FavouriteCoffee";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <FavouriteCoffee />
    </div>
  );
}

export default App;
