import { IoIosArrowForward } from "react-icons/io";
import { PiHouseLine } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";

function PaddingLayout({ children }) {
  return <div className="mb-[25px]">{children}</div>;
}

function ProductDescHalf() {
  return (
    <div className="w-2/5">
      <div className="w-[90%] h-full m-auto">
        <PaddingLayout>
          <div className="pr_breadcrumb w-full">
            <nav className="flex gap-1">
              <a href="">
                <span>
                  <PiHouseLine />
                </span>
              </a>
              <IoIosArrowForward />
              <a href="" className="text-xs underline hover:text-blue-600">
                <span>Montres Rolex</span>
              </a>
              <IoIosArrowForward />
              <a href="" className="text-xs underline hover:text-blue-600">
                <span>Daytona</span>
              </a>
            </nav>
          </div>
        </PaddingLayout>
        <PaddingLayout>
          <div className="capitalize">
            <h2 className="text-2xl font-semibold">Rolex Daytona</h2>
            <h4>Steel black PVD</h4>
          </div>
        </PaddingLayout>
        <PaddingLayout>
          <div className="text-sm">
            <p>
              D&apos;occasion (Tres bon) | Année de fabrication 2011 | Avec
              boîte d&apos;origine | Avec papiers d&apos;origine
            </p>
          </div>
        </PaddingLayout>
        <PaddingLayout>
          <div>
            <div className="text-2xl font-semibold">
              <h2>14000$</h2>
            </div>
            <div className="text-sm">
              <p> + 200 € pour l&apos;envoi assuré vers : Algeria</p>
            </div>
          </div>
        </PaddingLayout>
        <PaddingLayout>
          <div>
            <button className="w-full h-12 bg-[#1a253c] text-white font-semibold rounded-md duration-300 hover:bg-[#374E80]">
              <span>Acheter</span>
            </button>
          </div>
        </PaddingLayout>
        <PaddingLayout>
          <div className="w-full bg-[#F2F2F2] py-4 border border-[#cccccc] flex justify-center items-center rounded-md">
            <div className="w-[90%]">
              <div className="font-semibold">
                <h2>La sécurité sur Chrono24 </h2>
              </div>
              <nav className="py-3">
                <ul>
                  <li className="flex gap-2 items-center">
                    <div className="text-2xl">
                      <span>
                        <IoMdClose />
                      </span>
                    </div>
                    <div className="text-xs">
                      <span>Pas de tiers de confiance</span>
                    </div>
                  </li>
                  <li className="flex gap-2 items-center">
                    <div className="text-2xl">
                      <span>
                        <IoMdCheckmark />
                      </span>
                    </div>
                    <div className="text-xs">
                      <span>Promesse d&apos;authenticité</span>
                    </div>
                  </li>
                  <li className="flex gap-2 items-center">
                    <div className="text-2xl">
                      <span>
                        <IoMdClose />
                      </span>
                    </div>
                    <div className="text-xs">
                      <span>Politique de retour du professionnel</span>
                    </div>
                  </li>
                </ul>
              </nav>
              <div className="text-xs">
                <span className="underline hover:text-blue-600">
                  En savoir plus sur la sécurité
                </span>
              </div>
            </div>
          </div>
        </PaddingLayout>
      </div>
    </div>
  );
}

export default ProductDescHalf;
