import { Link } from "react-router-dom";

function WatchCard({ watch, id }) {
  return (
    <div
      key={id}
      className="w-[calc(25%-18px)] h-[70vh] bg-[#EFECEA] rounded-lg cursor-pointer group select-none"
    >
      <Link to={`/product/${watch.brand}/${id}`}>
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
      </Link>
    </div>
  );
}

export default WatchCard;
