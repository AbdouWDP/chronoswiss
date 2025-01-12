import FooterLinksList from "./FooterLinksList";

function Footer() {
  return (
    <footer className="w-screen bg-[#1A253C]">
      <div className="w-[90%] m-auto">
        <div className="py-[4rem] flex justify-between">
          <div className="w-2/5 h-full text-white font-semibold flex flex-col gap-4">
            <h2 className="text-xl">Newsletter de Chrono24</h2>
            <a
              href="#"
              className="w-3/5 h-11 text-sm border border-white hover:border-blue-600 flex justify-center items-center rounded-md"
            >
              Inscrivez-vous gratuitement
            </a>
          </div>
          <div className="w-2/5 h-full text-white font-semibold flex flex-col gap-4">
            <h2 className="w-3/4 text-xl self-end">Paramètres</h2>
            <a
              href="#"
              className="w-3/4 h-11 text-sm self-end border border-white hover:border-blue-600 pl-4 flex items-center rounded-md"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 72 72"
                >
                  <path fill="#fff" d="M5 17h62v38H5z" />
                  <path fill="#1e50a0" d="M5 17h21v38H5z" />
                  <path fill="#d22f27" d="M46 17h21v38H46z" />
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
              &nbsp;
              <span>FR | Francais | EUR</span>
            </a>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-500"></div>
        <FooterLinksList />
      </div>
    </footer>
  );
}

export default Footer;
