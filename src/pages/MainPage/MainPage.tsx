import { About } from "../../components/About/About";
import { FavouriteCoffee } from "../../components/FavouriteCoffee/FavouriteCoffee";
import { HeroSection } from "../../components/mainBaner/HeroSection";
import { MobileApp } from "../../components/MobileApp/MobileApp";
import { Footer } from "../../layout/Footer/Footer";
import { Header } from "../../layout/Header/Header";

const MainPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <FavouriteCoffee />
      <About />
      <MobileApp />
      <Footer />
    </>
  );
};

export default MainPage;
