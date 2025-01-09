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
              FR | Francais | EUR
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
