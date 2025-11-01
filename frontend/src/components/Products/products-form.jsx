import { useRef, useState, useEffect } from "react";
import { postProducts } from "../../api/products";
import { getCategories } from "../../api/category";

export default function ProductsForm() {
  const [preview, setPreview] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getCategories();
      setCategories(data);
    }
    fetchData();
  }, []);

  const productNameRef = useRef();
  const productCategoryRef = useRef();
  const productCostPriceRef = useRef();
  const productSellingPriceRef = useRef();
  const productStockRef = useRef();
  const productImageRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = productNameRef.current.value;
    const categoryId = productCategoryRef.current.value;
    const costPrice = productCostPriceRef.current.value;
    const sellingPrice = productSellingPriceRef.current.value;
    const stock = productStockRef.current.value;
    const image = productImageRef.current.files[0];

    postProducts(name, categoryId, costPrice, sellingPrice, stock, image);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 ">
      <div className="w-1/2 bg-white py-4 px-10 shadow-md rounded-lg">


      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-gray-800">Add Product</h2>
        <label
          htmlFor="file-upload"
          className="flex flex-col items-center justify-center w-48 h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition relative overflow-hidden"
        >
          {preview ? (
            <img
            src={preview}
            alt="Preview"
            className="absolute inset-0 object-cover w-full h-full rounded-lg"
            />
          ) : (
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-10 h-10 text-gray-400 mb-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16l4-4a4 4 0 015.657 0L21 20M15 10h.01M9 4h6M12 7v6"
                ></path>
              </svg>
              <p className="text-gray-600 font-medium">Upload Product Image</p>
              <p className="text-gray-400 text-sm">Click to select file</p>
            </div>
          )}

          <input
            id="file-upload"
            ref={productImageRef}
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept="image/*"
          />
        </label>

        <div>
          <p>Product Name:</p>
          <input
            ref={productNameRef}
            type="text"
            className="border rounded px-2 py-1 w-full  focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        <div>
          <p>Product Category:</p>
          <select
            ref={productCategoryRef}
            className="border rounded px-2 py-1 w-full  focus:ring-2 focus:ring-purple-500 outline-none"
          >
            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <p>Cost Price:</p>
          <input
            ref={productCostPriceRef}
            type="number"
            className="border rounded px-2 py-1 w-full  focus:ring-2 focus:ring-purple-500 outline-none"
            />
        </div>

        <div>
          <p>Selling Price:</p>
          <input
            ref={productSellingPriceRef}
            type="number"
            className="border rounded px-2 py-1 w-full  focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        <div>
          <p>Stock:</p>
          <input
            ref={productStockRef}
            type="number"
            className="border rounded px-2 py-1 w-full  focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium transition">
          Submit
        </button>
      </form>
            </div>
    </div>
  );
}
