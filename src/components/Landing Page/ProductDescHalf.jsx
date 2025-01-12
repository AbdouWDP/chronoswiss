import { IoIosArrowForward } from "react-icons/io";
import { PiHouseLine } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import { FaStar } from "react-icons/fa";

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
        <PaddingLayout>
          <div>
            <div className="font-semibold">
              <h3>Expédition et vendeur</h3>
            </div>
            <div className="text-sm py-3">
              <span>L&apos;article est en stock</span>
            </div>
            <div className="capitalize">
              <a
                href=""
                className="font-semibold text-sm underline hover:text-blue-600"
              >
                Juwelier Burger
              </a>
              <div className="flex justify-between items-center text-sm">
                <div className="flex gap-2 items-center">
                  <div>
                    <span>Professionnel certifié</span>
                  </div>
                  <div>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 72 72"
                      >
                        <path fill="#1e50a0" d="M5 17h62v38H5z" />
                        <path fill="#d22f27" d="M5 17h62v13H5z" />
                        <path fill="#fff" d="M5 30h62v12H5z" />
                        <path
                          fill="none"
                          stroke="#000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 17h62v38H5z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="flex gap-1 items-center">
                  <div className="text-blue-700">
                    <span>
                      <FaStar />
                    </span>
                  </div>
                  <div>
                    <p>
                      <span className="font-semibold">4.8</span>
                      &nbsp;
                      <span>(2114)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PaddingLayout>
        <PaddingLayout>
          <div className="flex gap-2">
            <button className="w-12 aspect-square rounded-full border border-black flex justify-center items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="#000"
                    d="M16 3c-.625 0-1.246.21-1.781.594L12.563 4.75L10.655 5h-.031l-.031.031A3.39 3.39 0 0 0 8.03 7.594L8 7.625v.031l-.25 1.938l-1.156 1.5l-.032.031v.031c-.699 1.117-.73 2.559.032 3.625l1.187 1.656l.313 1.72l-3.219 4.905l-1.031 1.532h4.781l1.156 2.687L10.5 29l1.031-1.563l3.156-4.75c.848.348 1.805.38 2.626 0l3.156 4.75L21.5 29l.719-1.719l1.156-2.687h4.781l-1.031-1.532L24 18.313l.25-1.875l1.156-1.656l.032-.031v-.031c.699-1.117.73-2.528-.032-3.594L24.25 9.469l-.375-1.875h.031c-.004-.024-.027-.04-.031-.063c-.18-1.308-1.215-2.37-2.531-2.531h-.032l-1.875-.25l-1.656-1.156A3.07 3.07 0 0 0 16 3m0 2.031c.23 0 .457.07.625.188L18.406 6.5l.219.156l.25.032L21.063 7h.03c.45.05.762.363.813.813v.062l.407 2.219l.03.219l.157.187l1.281 1.781c.239.332.27.895-.031 1.375l-1.406 1.969l-.032.25L22 18.063v.03a1 1 0 0 1-.156.438l-.063.032v.03a.88.88 0 0 1-.593.313h-.063l-2.281.407l-.25.03l-.188.157l-1.781 1.281c-.332.239-.926.27-1.406-.031l-1.625-1.25l-.188-.156l-.281-.032L10.937 19h-.03a.89.89 0 0 1-.688-.438a1 1 0 0 1-.125-.375v-.062l-.406-2.281l-.032-.25l-.156-.188l-1.281-1.781c-.239-.332-.27-.926.031-1.406l1.25-1.625l.156-.188l.031-.281l.282-2.094c.004-.015.027-.015.031-.031a1.4 1.4 0 0 1 1-1c.016-.004.016-.027.031-.031l2.094-.282l.25-.03l.219-.157l1.781-1.281c.168-.117.395-.188.625-.188m6.906 15.219l1.532 2.344H22.03l-.25.625l-.687 1.593l-2.125-3.25l.468-.343l1.97-.344v.031c.023-.004.038-.027.062-.031a2.97 2.97 0 0 0 1.437-.625zm-13.812.031a2.85 2.85 0 0 0 1.562.719h.031l1.907.25l.437.344l-2.125 3.218l-.687-1.593l-.25-.625H7.563z"
                  />
                </svg>
              </span>
            </button>
            <button className="w-12 aspect-square rounded-full border border-black flex justify-center items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    color="#000"
                  >
                    <circle cx="17" cy="18" r="2" />
                    <circle cx="7" cy="18" r="2" />
                    <path d="M5 17.972c-1.097-.054-1.78-.217-2.268-.704s-.65-1.171-.704-2.268M9 18h6m4-.028c1.097-.054 1.78-.217 2.268-.704C22 16.535 22 15.357 22 13v-2h-4.7c-.745 0-1.117 0-1.418-.098a2 2 0 0 1-1.284-1.284C14.5 9.317 14.5 8.945 14.5 8.2c0-1.117 0-1.675-.147-2.127a3 3 0 0 0-1.926-1.926C11.975 4 11.417 4 10.3 4H2m0 4h6m-6 3h4" />
                    <path d="M14.5 6h1.821c1.456 0 2.183 0 2.775.354c.593.353.938.994 1.628 2.276L22 11" />
                  </g>
                </svg>
              </span>
            </button>
            <button className="w-12 aspect-square rounded-full border border-black flex justify-center items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                >
                  <g fill="#000" fill-rule="evenodd" clip-rule="evenodd">
                    <path d="M15.62 3.596L7.815 12.81l-.728-.033L4 8.382l.754-.53l2.744 3.907L14.917 3z" />
                    <path d="m7.234 8.774l4.386-5.178L10.917 3l-4.23 4.994zm-1.55.403l.548.78l-.547-.78zm-1.617 1.91l.547.78l-.799.943l-.728-.033L0 8.382l.754-.53l2.744 3.907l.57-.672z" />
                  </g>
                </svg>
              </span>
            </button>
            <button className="w-12 aspect-square rounded-full border border-black flex justify-center items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="#000"
                    d="M240 56v64a8 8 0 0 1-16 0V75.31l-82.34 82.35a8 8 0 0 1-11.32 0L96 123.31l-66.34 66.35a8 8 0 0 1-11.32-11.32l72-72a8 8 0 0 1 11.32 0L136 140.69L212.69 64H168a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8"
                  />
                </svg>
              </span>
            </button>
          </div>
        </PaddingLayout>
        <PaddingLayout>
          <div>
            <button className="w-full h-12 bg-transparent border border-[#191919] font-semibold rounded-md duration-300 hover:bg-[#EFECEA]">
              <span>Contacte le vendeur</span>
            </button>
          </div>
        </PaddingLayout>
      </div>
    </div>
  );
}

export default ProductDescHalf;
