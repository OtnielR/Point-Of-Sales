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

            <div className="flex items-center justify-center w-6 h-full  ">
              <button onClick={() => handleAddOrder(product)} className="w-12 bg-black rounded-full text-white text-center">+</button>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
