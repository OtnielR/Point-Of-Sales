import { useEffect, useState } from "react";
import { getImageUrl } from "../../api/image";
import { formatToRupiah } from "../../utils/currency";

export default function SalesProduct({ product, amount, index }) {
  const [subTotal, setSubTotal] = useState(0)

  useEffect(() => {
    const currentSubTotal = amount * product.selling_price
    setSubTotal(formatToRupiah(currentSubTotal))
  }, [product])

  return (<>
    <div className="w-full flex flex-row gap-4">
      <div className="w-20 h-20 overflow-hidden">
        <img
          src={getImageUrl(product.image_url)}
          className="w-full h-full object-cover rounded-xl"
          alt="" />
      </div>
      <div className="flex flex-col flex-1 justify-between ">
        <div className="flex flex-row justify-between">
          <p className="font-bold text-lg">{product.name}</p>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col justify-between ">
            <p>Cost Price: {product.cost_price}</p>
            <p>Selling Price: {product.selling_price}</p>
          </div>
          <div>
          <p>Amount: {amount}</p>
            <p>Subtotal: {subTotal}</p>
          </div>
        </div>
      </div>
    </div>
  </>)

}
