import Categories from "./Categories/Categories";
import FamousBrands from "./Famous Brands/FamousBrands";
import Favourite from "./Favourite/Favourite";
import Footer from "./Footer/Footer";
import Guarantee from "./Guarantee/Guarantee";
import Herosection from "./HeroSection/Home/Herosection";
import Ig from "./IG/Ig";
import Navbar from "./Navbar/Navbar";
import HeaderNavigation from "./Navigation/HeaderNavigation";
import Us from "./Us/Us";

function Home() {
  return (
    <>
      <Navbar />
      <HeaderNavigation />
      <Herosection />
      <FamousBrands />
      <Us />
      <Guarantee />
      <Categories />
      <Favourite />
      <Ig />
      <Footer />
    </>
  );
}

export default Home;
