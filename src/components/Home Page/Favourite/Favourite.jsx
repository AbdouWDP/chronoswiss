import WatchCard from "./FavWatchCard";
import FavWatchText from "./FavWatchText";
import { favWatchText, favouriteWatches } from "./favouriteWatches";

function Favourite() {
  return (
    <section className="w-screen py-12">
      <div className="w-[90%] m-auto">
        <div className="text-3xl font-semibold pb-6">
          <h2>Nos modèles favoris</h2>
        </div>
        <div className="w-full flex gap-6 flex-wrap">
          {favouriteWatches.map((watch) => (
            <WatchCard watch={watch} key={watch.id} />
          ))}
        </div>
        <div className="flex gap-x-4 gap-y-2 flex-wrap py-8">
          {favWatchText.map((watch) => (
            <FavWatchText watch={watch} key={watch.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Favourite;
