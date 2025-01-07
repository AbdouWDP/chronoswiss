import { watchesCategories } from "./watchCategories";

function Categories() {
  return (
    <section className="w-screen py-10">
      <div className="w-[90%] m-auto">
        <div className="text-3xl font-semibold py-4">
          <h1>Découvrez Chrono24</h1>
        </div>
        <div className="w-full flex gap-2 flex-wrap">
          {watchesCategories.map((category, index) => {
            return (
              <div
                key={index}
                className="watch_card w-[calc(25%-6px)] h-64 cursor-pointer"
              >
                <div className="w-full h-4/5 rounded-lg overflow-hidden">
                  <img
                    src={category.img}
                    alt=""
                    className="w-full h-full object-cover object-left"
                  />
                </div>
                <div className="w-full h-1/5 flex items-center font-semibold select-none">
                  <span>{category.title}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full h-11 my-10">
          <div className="all_categories_btn w-1/5 h-full m-auto">
            <button className="w-full h-full border border-[#191919] rounded-md text-sm font-semibold duration-200 hover:bg-[#EFECEA]">
              <span>Toutes les catégories</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
