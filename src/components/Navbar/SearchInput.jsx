import { useState } from "react";
import { FiSearch } from "react-icons/fi";

function SearchInput() {
  const [inputFocus, setInputFocus] = useState(false);

  return (
    <div className="search_input w-1/2 h-1/2">
      <form className="w-full h-full text-[#191919]">
        <div
          className={`w-full h-full flex bg-[#F2F2F2]`}
          style={{ borderRadius: "8px" }}
        >
          <div
            className={`flex w-[90%] border-2 ${
              inputFocus ? "border-blue-600" : "border-transparent"
            }`}
            style={{ borderRadius: "8px 0 0 8px" }}
          >
            <label className="w-[10%]">
              <span className="flex justify-center items-center h-full">
                <FiSearch />
              </span>
            </label>
            <input
              type="search"
              name="search"
              placeholder="Rechercher parmi 542 426 montres"
              className="w-[90%] h-full bg-transparent outline-none"
              onFocus={() => setInputFocus(true)}
              onBlur={() => setInputFocus(false)}
            />
          </div>
          {inputFocus && (
            <div
              className="cancel_btn w-[10%] h-full overflow-hidden"
              onClick={() => setInputFocus(false)}
            >
              <button className="w-full h-full text-xs underline hover:text-blue-400">
                <span>Annuler</span>
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default SearchInput;
