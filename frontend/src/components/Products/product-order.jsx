import { formatToRupiah } from "../../utils/currency"
import { useState, useEffect } from "react"

export default function ProductOrder({ product, removeOrders, handleProductAmount }) {
  const [productAmount, setProductAmount] = useState(1)
  const [sellingPrice, setSellingPrice] = useState(0)

  useEffect(() => {
    setSellingPrice(formatToRupiah(product.selling_price))
  }, [product])

  const increaseProductAmount = () => {
    setProductAmount(prev => prev + 1)
    product.amount += 1

    handleProductAmount()
    handlePriceChange()
  }

  const decreaseProductAmount = () => {
    if (productAmount > 1) {
      setProductAmount(prev => prev - 1)
      product.amount -= 1

    } else {
      removeOrders(product)
    }

    handleProductAmount()
    handlePriceChange()
  }

  const handlePriceChange = () => {
    let newPrice = product.amount * product.selling_price

    setSellingPrice(formatToRupiah(newPrice))
  }

  return (<>
    <div className="w-full flex flex-row gap-3">
      <div className="flex flex-row w-18 h-18 overflow-hidden">
        <img
          className="w-full h-full object-cover  rounded-xl"
          src={`http://localhost:8080${product.image_url}`}
          alt=""
          draggable="false"
        />
      </div>
      <div className="title flex flex-col flex-1 justify-between py-2 px-2">
        <h1 className="">{product.name}</h1>
        <div className="price flex justify-between">
          <h1 className="">{sellingPrice}</h1>
          <div className="button flex flex-row gap-4">

            <div className="w-6 h-6 bg-black rounded-full">
              <button onClick={decreaseProductAmount} className="w-full text-white">-</button>
            </div>

            <h1 className="font-bold">{productAmount}</h1>

            <div className="w-6 h-6 bg-black rounded-full">
              <button onClick={increaseProductAmount} className="w-full text-white ">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>)
}
