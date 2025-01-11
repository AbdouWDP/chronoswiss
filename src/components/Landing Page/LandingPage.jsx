import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ImagesHalf from "./ImagesHalf";
import Footer from "../Footer/Footer";
import ProductDescHalf from "./ProductDescHalf";

function LandingPage() {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="w-screen">
      <Navbar />
      <div className="w-full pt-6 pb-16">
        <div className="w-[90%] m-auto flex">
          <ImagesHalf />
          <ProductDescHalf />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
