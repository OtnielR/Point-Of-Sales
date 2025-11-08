import { formatToRupiah } from "../../utils/currency";
import { Link } from "react-router-dom";
import { getImageUrl } from "../../api/image";
import { useState, useEffect } from "react";


export default function Product({ product, category, handleAddOrder }) {
  const [sellingPrice, setSellingPrice] = useState(0)

  useEffect(() => {
    setSellingPrice(formatToRupiah(product.selling_price))
  }, [product])

  return (
    <>
      <div className="flex flex-col gap-2 bg-white px-4 py-4 rounded-2xl">
        <div className="w-full h-38 overflow-hidden">
          <img

            src={getImageUrl(product.image_url)}
            className="object-cover w-full h-full rounded-lg"

            alt=""
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <Link to={`product/${product.id}`} className="font-bold text-xl hover:underline">{product.name}</Link>
            <p className="text-md">{category.name}</p>
          </div>
          <div className='flex flex-row justify-between'>
            <div>
              <p className="font-bold">{sellingPrice}</p>
              <p className="font-bold">Stock: {product.stock}</p>
            </div>

            <div className="flex justify-center items-center rounded-full hover:bg-green-100 p-2 transition">
              <button onClick={() => handleAddOrder(product)} className="w-8 rounded-full text-white text-center">
                <img src="plus.png" alt="" className="w-8" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
