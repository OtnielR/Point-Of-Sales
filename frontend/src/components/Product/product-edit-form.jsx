import { useRef, useState, useEffect } from "react";
import { putProducts, deleteProduct } from "../../api/products";
import { getCategories } from "../../api/category";
import { getImageUrl } from "../../api/image";
import { useNavigate } from "react-router-dom";

export default function ProductEditForm({ product }) {
  const [preview, setPreview] = useState(null);
  const [categories, setCategories] = useState([]);

  const productNameRef = useRef();
  const productCategoryRef = useRef();
  const productCostPriceRef = useRef();
  const productSellingPriceRef = useRef();
  const productStockRef = useRef();
  const productImageRef = useRef();

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      const data = await getCategories();
      setCategories(data);

      setPreview(getImageUrl(product.image_url))

    }
    function setRef() {
      productNameRef.current.value = product.name
      productCategoryRef.current.value = product.category_id
      productCostPriceRef.current.value = product.cost_price
      productSellingPriceRef.current.value = product.selling_price
      productStockRef.current.value = product.stock

    }


    fetchData();
    setRef()
  }, [product]);

  const handleSubmit = async (e) => {

    const name = productNameRef.current.value;
    const categoryId = productCategoryRef.current.value;
    const costPrice = productCostPriceRef.current.value;
    const sellingPrice = productSellingPriceRef.current.value;
    const stock = productStockRef.current.value;
    const image = productImageRef.current.files[0];

    putProducts(product.id, name, categoryId, costPrice, sellingPrice, stock, image, product.image_url);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleDeleteProduct = (e) => {
    deleteProduct(product.id)
    navigate("/")
  }

  return (
    <div className="w-full h-screen flex justify-center items-center overflow-hidden">
      <div className="w-full max-w-xl bg-white border border-gray-200 rounded-xl shadow-sm p-10 mx-auto overflow-y-auto max-h-[90vh]">

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Product</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <label
            htmlFor="file-upload"
            className="flex flex-col items-center justify-center w-48 h-48 border-2 border-gray-300 border-dashed rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition relative overflow-hidden mx-auto"
          >
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="absolute inset-0 object-cover w-full h-full rounded-xl"
              />
            ) : (
              <div className="flex flex-col items-center justify-center">
                <svg
                  className="w-10 h-10 text-gray-400 mb-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 16l4-4a4 4 0 015.657 0L21 20M15 10h.01M9 4h6M12 7v6" />
                </svg>
                <p className="text-gray-600 font-medium text-sm">Upload Image</p>
                <p className="text-gray-400 text-xs">Click to select file</p>
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

          <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-medium">Product Name</label>
            <input
              ref={productNameRef}
              type="text"
              className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-medium">Category</label>
            <select
              ref={productCategoryRef}
              className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-purple-500 outline-none"
              required
            >
              {categories.map(category => (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-medium">Cost Price</label>
            <input
              ref={productCostPriceRef}
              type="number"
              className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-medium">Selling Price</label>
            <input
              ref={productSellingPriceRef}
              type="number"
              className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-medium">Stock</label>
            <input
              ref={productStockRef}
              type="number"
              className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
          </div>


          <div className="grid grid-cols-2 gap-4">

            <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium transition" type="submit">
              Save Changes
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition" type="button" onClick={handleDeleteProduct}>
              Delete Product
            </button>

          </div>

        </form>
      </div>
    </div>

  );
}
