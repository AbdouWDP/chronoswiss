function BrandButton({ title, key }) {
  return (
    <button
      key={key}
      className="w-[calc(20%-8px)] h-14 bg-[#efecea] text-sm hover:text-blue-400 capitalize rounded-md shrink-0"
    >
      <span>{title}</span>
    </button>
  );
}

function FamousBrands() {
  const firstRowBrands = [
    "rolex",
    "breitling",
    "patek philippe",
    "jeager-leColture",
    "tudor",
    "panerai",
  ];
  const secondRowBrands = [
    "omega",
    "Audemars Piguet",
    "TAG heuer",
    "cartier",
    "seiko",
    "hublot",
  ];

  return (
    <section className="w-screen">
      <div className="w-[90%] m-auto py-16">
        <div className="w-full text-3xl font-semibold">
          <p>Marques Populaires</p>
        </div>
        <div className="brands_btns_container my-4 overflow-scroll">
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
      </div>
    </section>
  );
}

export default FamousBrands;
