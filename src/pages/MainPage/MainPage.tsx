import { About } from "../../components/About/About";
import { FavouriteCoffee } from "../../components/FavouriteCoffee/FavouriteCoffee";
import { HeroSection } from "../../components/mainBaner/HeroSection";
import { MobileApp } from "../../components/MobileApp/MobileApp";

const MainPage = () => {
  return (
    <>
      <HeroSection />
      <FavouriteCoffee />
      <About />
      <MobileApp />
    </>
  );
};

export default MainPage;
