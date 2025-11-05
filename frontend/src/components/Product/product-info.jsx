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
    <div className="w-1/2 h-full flex justify-center items-center">
      <div className="w-2/3 bg-white px-4 py-4 rounded-lg">
        <div className="w-full h-64 overflow-hidden p-4">
          <img className="object-cover w-full h-full rounded-lg" src={getImageUrl(product.image_url)} alt="" />

        </div>
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-bold">{product.name}</p>
            <p>{category.name}</p>
          </div>
          <div className="flex justify-between">
            <div>
              <p>Cost Price: {costPrice}</p>
              <p>Selling Price: {sellingPrice}</p>
            </div>
            <div>
              <p>Stock: {product.stock}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </>)
}
