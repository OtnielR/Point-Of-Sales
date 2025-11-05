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
      <div className="flex flex-col flex-1 justify-between py-2">
        <div className="flex flex-row justify-between gap-4">
          <p>{product.name}</p>
          <p>Amount: {amount}</p>
        </div>
        <div className="flex flex-row justify-between">
          <div className=" justify-between gap-4">
            <p>Cost Price: {product.cost_price}</p>
            <p>Selling Price: {product.selling_price}</p>
          </div>
          <div>
            <p>Subtotal: {subTotal}</p>
          </div>
        </div>
      </div>
    </div>
  </>)

}
