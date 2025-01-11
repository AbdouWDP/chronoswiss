import { useState } from "react";
import { favouriteWatches } from "../Home Page/Favourite/favouriteWatches";

function ScrollImages({ image, index, selectedImage, setSelectedImage }) {
  return (
    <div
      className={`h-full w-1/5 shrink-0 rounded-md bg-gray-200 cursor-pointer ${
        index === selectedImage ? "opacity-100" : "opacity-40"
      } hover:opacity-100 duration-200 ease-in-out`}
      style={{
        border: index === selectedImage && "1px solid black",
      }}
      onClick={() => setSelectedImage(index)}
    >
      <img src={image} alt="" className="w-full h-full object-cover" />
    </div>
  );
}

function ImagesHalf() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="w-3/5">
      <div className="w-full aspect-square overflow-hidden rounded-xl bg-gray-200">
        <img
          src={favouriteWatches[selectedImage].img}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-24 flex items-center">
        <div className="scroll_images w-full h-4/5 flex gap-3 overflow-scroll">
          {favouriteWatches.map((watch, index) => {
            return (
              <ScrollImages
                image={watch.img}
                index={index}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ImagesHalf;
