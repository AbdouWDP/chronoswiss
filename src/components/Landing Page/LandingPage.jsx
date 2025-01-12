import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ImagesHalf from "./ImagesHalf";
import Footer from "../Footer/Footer";
import ProductDescHalf from "./ProductDescHalf";
import { favouriteWatches } from "../Home Page/Favourite/favouriteWatches";
import WatchCard from "../Home Page/Favourite/FavWatchCard";

function LandingPage() {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="w-screen">
      <Navbar />
      <div className="w-full pt-6 pb-16">
        <div className="w-[90%] m-auto">
          <div className="flex">
            <ImagesHalf />
            <ProductDescHalf />
          </div>
          <div className="w-full">
            <div className="text-3xl font-semibold">
              <h2>Related Products</h2>
            </div>
            <div className="flex gap-2 overflow-scroll py-6">
              {favouriteWatches.map((watch) => (
                <WatchCard watch={watch} id={watch.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
