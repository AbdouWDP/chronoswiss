import FamousBrands from "./Famous Brands/FamousBrands";
import Herosection from "./HeroSection/Home/Herosection";
import Navbar from "./Navbar/Navbar";
import HeaderNavigation from "./Navigation/HeaderNavigation";

function Home() {
  return (
    <>
      <Navbar />
      <HeaderNavigation />
      <Herosection />
      <FamousBrands />
    </>
  );
}

export default Home;
