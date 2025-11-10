import { useEffect, useState } from "react"
import { getImageUrl } from "../../api/image.js"
import { getCategory } from "../../api/category.js"
import { formatToRupiah } from "../../utils/currency.js"

export default function ProductInfo({ product }) {
  const [category, setCategory] = useState([])
  const [sellingPrice, setSellingPrice] = useState(0)
  const [costPrice, setCostPrice] = useState(0)


  useEffect(() => {
    const fetchData = async () => {
      const categoryData = await getCategory(product.category_id)

      setCategory(categoryData)

      setSellingPrice(formatToRupiah(product.selling_price))
      setCostPrice(formatToRupiah(product.cost_price))
    }

    fetchData()
  }, [product])

  return (<>
    <div className="w-full h-screen flex justify-center items-center overflow-hidden">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-md p-6 flex flex-col gap-5 border border-gray-200">

        <div className="w-full h-64 overflow-hidden rounded-lg">
          <img
            src={getImageUrl(product.image_url)}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold text-gray-800">{product.name}</p>
          <p className="text-gray-600 text-sm">{category.name}</p>
        </div>

        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
          <div className="text-sm">
            <p className="font-semibold text-gray-700">Cost Price</p>
            <p className="text-gray-800">{costPrice}</p>
          </div>

          <div className="text-sm">
            <p className="font-semibold text-gray-700">Selling Price</p>
            <p className="text-green-600 font-bold">{sellingPrice}</p>
          </div>

          <div className="text-sm text-right">
            <p className="font-semibold text-gray-700">Stock</p>
            <p className={`${product.stock ? "text-gray-800" : "text-red-800"}`}>{product.stock}</p>
          </div>
        </div>

      </div>
    </div>
  </>)
}
