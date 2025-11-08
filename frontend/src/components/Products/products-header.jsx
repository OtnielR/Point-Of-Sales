import { useState, useEffect, useRef } from "react";

export default function ProductsHeader({
  handleSearchInput,
  handleSelectChange,
  handlePriceFilter,
  handleResetFilter,
  handleSortByName,
  handleSortByPrice,
  handleSortByStock,
  categories,
}) {
  const [isShowCategories, setIsShowCategories] = useState(false);
  const [isShowFilter, setIsShowFilter] = useState(false);
  const selectCategoryRef = useRef();
  const [currentCategory, setCurrentCategory] = useState("General");

  const minPriceInputRef = useRef();
  const maxPriceInputRef = useRef();

  const toggleShowCategories = () => {
    setIsShowCategories(!isShowCategories);
  };

  const toggleShowFilter = () => {
    setIsShowFilter(!isShowFilter);
  };

  const handlePriceChange = () => {
    let minPrice = minPriceInputRef.current.value;
    let maxPrice = maxPriceInputRef.current.value;

    handlePriceFilter(minPrice, maxPrice);
  };

  const handleCategoryChange = (e) => {
    let category = e.target.value;

    if (category == "") {
      setCurrentCategory("General");
    } else {
      setCurrentCategory(category);
    }

    toggleShowCategories();
    handleSelectChange(e);
  };

  return (
    <>
      <div className="pt-6">
        <p className="font-bold">Items</p>
        <div className="flex flex-row justify-between items-center gap-48">
          <div className="relative flex flex-row items-center">
            <div className=" flex flex-row items-center">
              <div
                className="w-28 text-2xl cursor-pointer font-bold"
                onClick={toggleShowCategories}
              >
                <p className="pointer">{currentCategory}</p>
              </div>
              <div className="">
                <img
                  className={`h-8 transition-transform ${
                    isShowCategories ? "rotate-180" : "rotate-0"
                  }`}
                  src="down-arrow.png"
                  alt=""
                />
              </div>
            </div>
            <div
              className={`w-full bg-white rounded-lg absolute top-10 left-0 shadow-xl ${
                isShowCategories ? "block" : "hidden"
              }`}
            >
              <div className={"flex flex-col"}>
                <button
                  className="hover:bg-gray-200 rounded-t-lg py-2"
                  onClick={handleCategoryChange}
                  value=""
                >
                  General
                </button>

                {categories.map((category, index) => {
                  return (
                    <button
                      className={`hover:bg-gray-200 py-2 ${
                        index + 1 == categories.length
                          ? "rounded-b-lg"
                          : "rounded-none"
                      }`}
                      onClick={handleCategoryChange}
                      value={category.name}
                      key={category.id}
                    >
                      {category.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-1 items-center gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search product..."
                onChange={handleSearchInput}
                className="w-full pl-11 pr-4 py-3 text-sm border border-gray-300 rounded-lg bg-gray-50 text-gray-800 outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 placeholder:text-gray-400 transition-all"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </div>
            <div className="relative bg-grey-600">
              <img
                className="w-8 transition-transform hover:scale-115"
                src="filter.png"
                alt=""
                onClick={toggleShowFilter}
              />
              <div
                className={`w-110 absolute bg-white px-4 py-4 z-50 shadow-xl rounded-lg translate-y-4 ${
                  isShowFilter ? "block" : "hidden"
                }`}
                style={{ transform: "translateX(-50%)" }}
              >
                <div className="flex flex-col gap-4">
                  <div className="w-full flex flex-row jusfity-between items-center">
                    <p className="w-full font-bold ">Filter Products</p>
                    <div>
                      <button
                        className="border border-purple-600 bg-purple-500 px-4 py-1 rounded-lg text-white"
                        onClick={handleResetFilter}
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">Prices</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex flex-col">
                        <label htmlFor="">Min Price</label>
                        <input
                          type="number"
                          className="border-b-2 text-center outline-none pt-4"
                          ref={minPriceInputRef}
                          onChange={handlePriceChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="">Max Price</label>
                        <input
                          type="number"
                          className="border-b-2 text-center outline-none pt-4"
                          ref={maxPriceInputRef}
                          onChange={handlePriceChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex flex-row jusfity-center">
                    <p className="w-full text-center font-bold">
                      Sort Products
                    </p>
                  </div>
                  <div>
                    <p>Name</p>
                    <p className="flex flex-row gap-2 justify-center">
                      <button
                        className="w-full border px-4 rounded-md text-white bg-purple-500"
                        onClick={() => handleSortByName(true)}
                      >
                        Ascending
                      </button>
                      <button
                        className="w-full border px-4 rounded-md text-white bg-purple-500"
                        onClick={() => handleSortByName(false)}
                      >
                        Descending
                      </button>
                    </p>
                  </div>
                  <div>
                    <p>Price</p>
                    <p className="flex flex-row gap-2">
                      <button
                        className="w-full border px-4 rounded-md text-white bg-purple-500"
                        onClick={() => handleSortByPrice(true)}
                      >
                        Ascending
                      </button>
                      <button
                        className="w-full border px-4 rounded-md text-white bg-purple-500"
                        onClick={() => handleSortByPrice(false)}
                      >
                        Descending
                      </button>
                    </p>
                  </div>
                  <div>
                    <p>Stock</p>
                    <p className="flex flex-row gap-2">
                      <button
                        className="w-full border px-4 rounded-md text-white bg-black"
                        onClick={() => handleSortByStock(true)}
                      >
                        Ascending
                      </button>
                      <button
                        className="w-full border px-4 rounded-md text-white bg-black"
                        onClick={() => handleSortByStock(false)}
                      >
                        Descending
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
