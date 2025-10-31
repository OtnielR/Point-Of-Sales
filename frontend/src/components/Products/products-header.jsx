export default function ProductsHeader() {
  return (
    <>
      <div className="pt-6">
        <p className="font-bold">Items</p>
        <div className="flex flex-row justify-between items-center gap-48">
          <div className="flex flex-row gap-2 items-center">
            <div className="text-2xl font-bold">General</div>
            <div className="">
              <img className="h-8" src="down-arrow.png" alt="" />
            </div>
          </div>
          <div className="flex flex-row flex-1 items-center gap-4">
            <form className="flex-1">
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="search"
                  class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none "
                  required
                />
              </div>
            </form>
            <div className="bg-grey-600">
              <img className="w-8" src="filter.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
