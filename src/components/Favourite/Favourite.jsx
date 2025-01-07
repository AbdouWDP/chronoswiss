import { favouriteWatches } from "./favouriteWatches";

function WatchCard({ watch, key }) {
  return (
    <div
      key={key}
      className="w-[calc(25%-18px)] h-[70vh] bg-[#EFECEA] rounded-lg cursor-pointer group select-none"
    >
      <div className="w-full h-[85%] group">
        <img
          src={watch.img}
          alt=""
          className="w-full h-full bg-contain duration-500 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="w-full h-[15%]">
        <div className="w-[90%] h-full m-auto text-sm group-hover:text-blue-600 capitalize">
          <p>
            <span>{watch.brand}</span>
          </p>
          <p>
            <strong>{watch.name}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

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
      </div>
    </section>
  );
}

export default Favourite;
