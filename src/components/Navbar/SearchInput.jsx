import { useState } from "react";

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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M10 18a7.95 7.95 0 0 0 4.897-1.688l4.396 4.396l1.414-1.414l-4.396-4.396A7.95 7.95 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8s3.589 8 8 8m0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6s-6-2.691-6-6s2.691-6 6-6"
                  />
                </svg>
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
