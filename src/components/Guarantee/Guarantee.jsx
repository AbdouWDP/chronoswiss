import GuaranteeList from "./GuaranteeList";

function Guarantee() {
  return (
    <section className="w-screen py-8">
      <div className="w-[90%] h-full m-auto rounded-lg overflow-hidden flex">
        <div className="w-1/2 bg-[#1A253C] flex justify-center items-center">
          <div className="w-4/5 h-4/5 text-white flex flex-col justify-between">
            <div className="text-3xl font-semibold">
              <h3>La Protection des Acheteurs de Chrono24</h3>
            </div>
            <GuaranteeList />
            <a
              href="#"
              className="w-3/5 h-12 border border-white hover:border-blue-400 rounded-md flex justify-center items-center font-semibold text-sm"
            >
              En savoir plus sur la sécurité
            </a>
          </div>
        </div>
        <div
          className="w-1/2 h-[90vh] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://static.chrono24.com/images/default/buyer-protection/buyer-protection-teaser/buyer-protection-teaser-sm.jpg)",
          }}
        ></div>
      </div>
    </section>
  );
}

export default Guarantee;
