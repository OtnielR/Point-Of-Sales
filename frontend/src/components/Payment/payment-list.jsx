import { useState, useEffect } from "react"
import { getImageUrl } from "../../api/image"
import { formatToRupiah } from "../../utils/currency"


export default function PaymentList({ product, index }) {
  const [sellingPrice, setSellingPrice] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    setSellingPrice(formatToRupiah(product.selling_price))

    let newTotalPrice = product.selling_price * product.amount
    setTotalPrice(formatToRupiah(newTotalPrice))
  }, [product])

  return (<>
    <div className="flex flex-row gap-8">
      <div className="flex justify-center items-center">
        <p className="flex font-bold text-lg" >{index}</p>
      </div>
      <div className="flex flex-row gap-4">
        <div className="w-20 h-20 overflow-hidden">
          <img
            src={getImageUrl(product.image_url)}
            className="w-full h-full object-cover rounded-xl"
            alt=""
          />
        </div>
        <div className="h-full flex flex-col justify-between py-2">
          <p>{product.name}</p>

          <div className="w-full flex flex-row justify-between gap-6">

            <div className="flex flex-row gap-4">

              <p >{sellingPrice}</p>
              <p>Amount: {product.amount}</p>

            </div>
            <div>
              <p className="font-bold">Total: {totalPrice}</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </>)
}
