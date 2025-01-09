import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { firstRowBrands, secondRowBrands } from "./rowBrands";
import BrandButton from "./BrandButton";
import { useRef, useState } from "react";

function BrandsButtons() {
  const brandsRef = useRef(null);
  const [isNextBrands, setIsNextBrands] = useState(false);

  function nextBrands() {
    brandsRef.current.scrollLeft += brandsRef.current.clientWidth;
    setIsNextBrands(true);
  }
  function prevBrands() {
    brandsRef.current.scrollLeft -= brandsRef.current.clientWidth;
    setIsNextBrands(false);
  }

  return (
    <>
      <div className="brands_btns_container my-4 relative">
        <div
          ref={brandsRef}
          className="brands_container w-full overflow-scroll scroll-smooth"
        >
          <div className="flex gap-2 w-full">
            {firstRowBrands.map((brand, index) => (
              <BrandButton title={brand} key={index} />
            ))}
          </div>
          <div className="flex gap-2 w-full mt-2">
            {secondRowBrands.map((brand, index) => (
              <BrandButton title={brand} key={index} />
            ))}
          </div>
        </div>
        {isNextBrands ? (
          <div
            className="button_prev_brands h-2/5 aspect-square rounded-md bg-white shadow-lg absolute top-1/2 left-1 -translate-y-1/2"
            onClick={prevBrands}
          >
            <button className="w-full h-full flex justify-center items-center text-lg hover:text-blue-400">
              <span>
                <IoIosArrowBack />
              </span>
            </button>
          </div>
        ) : (
          <div
            className="button_next_brands h-2/5 aspect-square rounded-md bg-white shadow-lg absolute top-1/2 right-1 -translate-y-1/2"
            onClick={nextBrands}
          >
            <button className="w-full h-full flex justify-center items-center text-lg hover:text-blue-400">
              <span>
                <IoIosArrowForward />
              </span>
            </button>
          </div>
        )}
      </div>
      <div className="brands_pagination w-full h-10 flex justify-center items-center gap-1">
        {isNextBrands ? (
          <>
            <button
              className="w-6 h-[3px] bg-[#cccccc] rounded-full hover:bg-blue-400 duration-200"
              onClick={prevBrands}
            ></button>
            <button className="w-12 h-[3px] bg-[#191919] rounded-full duration-200"></button>
          </>
        ) : (
          <>
            <button className="w-12 h-[3px] bg-[#191919] rounded-full duration-200"></button>
            <button
              className="w-6 h-[3px] bg-[#cccccc] rounded-full hover:bg-blue-400 duration-200"
              onClick={nextBrands}
            ></button>
          </>
        )}
      </div>
    </>
  );
}

export default BrandsButtons;
