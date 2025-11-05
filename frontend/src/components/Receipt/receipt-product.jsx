import { useState, useEffect } from "react"
import { formatToRupiah } from "../../utils/currency"

export default function ReceiptProduct({ product }) {
  const [sellingPrice, setSellingPrice] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    setSellingPrice(formatToRupiah(product.selling_price))

    let newTotalPrice = product.amount * product.selling_price
    setTotalPrice(formatToRupiah(newTotalPrice))
  }, [product])

  return (<>
    <div>
      <div>
        <p>{product.name}</p>
      </div>
      <div className="w-full flex flex-row justify-between">
        <p>{product.amount} X {sellingPrice}</p>
        <p>{totalPrice}</p>
      </div>
    </div>
  </>)
}
