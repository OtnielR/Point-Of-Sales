import { useState, useEffect, useRef } from "react";

export default function ProductsHeader({ handleSearchInput, handleSelectChange, handlePriceFilter, handleResetFilter, handleSortByName, handleSortByPrice, handleSortByStock, categories }) {
  const [isShowCategories, setIsShowCategories] = useState(false)
  const [isShowFilter, setIsShowFilter] = useState(false)
  const selectCategoryRef = useRef()

  const priceFilteredButton = [
    {
      minPrice: 0,
      maxPrice: 25_000,
      text: "0 - 25K"
    },
    {
      minPrice: 25_000,
      maxPrice: 50_000,
      text: "25K - 50K"
    },
    {
      minPrice: 50_000,
      maxPrice: 75_000,
      text: "50K - 75K"
    },
    {
      minPrice: 75_000,
      maxPrice: 100_000,
      text: "75K - 100K"
    },
  ]

  const toggleShowCategories = () => {
    setIsShowCategories(!isShowCategories)
  }

  const toggleShowFilter = () => {
    setIsShowFilter(!isShowFilter)
  }

  return (
    <>
      <div className="pt-6">
        <p className="font-bold">Items</p>
        <div className="flex flex-row justify-between items-center gap-48">
          <div className="flex flex-row items-center">
            <div className="text-2xl font-bold" onClick={toggleShowCategories}>
              <select ref={selectCategoryRef} onChange={handleSelectChange} className="appearance-none outine-none" name="" id="">
                <option value="">General</option>
                {categories.map((category) => <option key={category.id} value={category.name}>{category.name}</option>)}
              </select>
            </div>
            <div className="" >
              <img className={`h-8 transition-transform ${isShowCategories ? "rotate-180" : "rotate-0"}`} src="down-arrow.png" alt="" />
            </div>
          </div>
          <div className="flex flex-row flex-1 items-center gap-4">
            <form className="flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="search"
                  onChange={handleSearchInput}
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none "
                  required
                />
              </div>
            </form>
            <div className="relative bg-grey-600" >
              <img className="w-8 transition-transform hover:scale-115" src="filter.png" alt="" onClick={toggleShowFilter} />
              <div className={`w-110 absolute bg-white px-4 py-4 z-50 shadow-xl rounded-lg translate-y-4 ${isShowFilter ? "block" : "hidden"}`} style={{ transform: "translateX(-50%)" }}>
                <div>
                  <div className="w-full flex flex-row jusfity-center">
                    <p className="w-full text-center font-bold">Filter Products</p>
                  </div>
                  <div>
                    <div>
                      <button className="border px-4 py-2 rounded-lg" onClick={handleResetFilter}>Reset</button>
                    </div>
                  </div>
                  <div>
                    <div>
                      Prices
                    </div>
                    <div className="flex flex-row gap-4">
                      {priceFilteredButton.map((button, index) => (
                        <button
                          onClick={() => handlePriceFilter(button.minPrice, button.maxPrice)}
                          className="border w-1/4 "
                          key={index}
                        >{button.text}</button>
                      ))}
                    </div>
                  </div>
                  <div className="w-full flex flex-row jusfity-center">
                    <p className="w-full text-center font-bold">Sort Products</p>
                  </div>
                  <div>
                    <p>Name</p>
                    <p className="flex flex-row gap-2">
                      <button className="w-1/4 border px-4" onClick={() => handleSortByName(true)}>Ascending</button>
                      <button className="w-1/4 border px-4" onClick={() => handleSortByName(false)}>Descending</button>
                    </p>
                  </div>
                  <div>
                    <p>Price</p>
                    <p className="flex flex-row gap-2">
                      <button className="w-1/4 border px-4" onClick={() => handleSortByPrice(true)}>Ascending</button>
                      <button className="w-1/4 border px-4" onClick={() => handleSortByPrice(false)}>Descending</button>
                    </p>
                  </div>
                  <div>
                    <p>Stock</p>
                    <p className="flex flex-row gap-2">
                      <button className="w-1/4 border px-4" onClick={() => handleSortByStock(true)}>Ascending</button>
                      <button className="w-1/4 border px-4" onClick={() => handleSortByStock(false)}>Descending</button>
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
