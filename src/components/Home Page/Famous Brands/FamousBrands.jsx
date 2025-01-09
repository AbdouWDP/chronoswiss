import BrandsButtons from "./BrandsButtons";

function FamousBrands() {
  return (
    <section className="w-screen py-16">
      <div className="w-[90%] m-auto">
        <div className="w-full text-3xl font-semibold">
          <p>Marques Populaires</p>
        </div>
        <BrandsButtons />
      </div>
    </section>
  );
}

export default FamousBrands;
