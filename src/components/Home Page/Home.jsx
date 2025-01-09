import Categories from "./Categories/Categories";
import FamousBrands from "./Famous Brands/FamousBrands";
import Favourite from "./Favourite/Favourite";
import Footer from "../Footer/Footer";
import Guarantee from "./Guarantee/Guarantee";
import Ig from "./IG/Ig";
import Us from "./Us/Us";
import Herosection from "../HeroSection/Home/Herosection";
import Navbar from "../Navbar/Navbar";

function Home() {
  return (
    <>
      <Navbar />
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
