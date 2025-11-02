import { useState, useEffect } from "react"
import { countCostPrices, countSellingPrice, countProfit } from "../../utils/countBills"
import SalesProduct from "./sales-product"

export default function SalesList({ sale, user, saleDetail, products, index }) {
  const [costPrices, setCostPrices] = useState(0)
  const [sellingPrices, setSellingPrices] = useState(0)
  const [profit, setProfit] = useState(0)

  useEffect(() => {
    const countData = () => {
      setCostPrices(countCostPrices(products, saleDetail))
      setSellingPrices(countSellingPrice(products, saleDetail))
      setProfit(countProfit(products, saleDetail))

    }

    countData()

  }, [products])



  return (<>
    <div className="flex flex-col gap-4 bg-white px-4 py-4">
      <div className="flex flex-row gap-4">
        <div>
          <p>{index}</p>
        </div>
        <div>
          <p>{user.username} | {user.role}</p>
        </div>
        <div>
          <p>{sale.created_at}</p>
        </div>
      </div>
      <div className="flex flex-row gap-8">
        <div className="w-1/3">
          <div>
            <p>Sale Detail</p>
          </div>
          <div className="flex flex-row gap-8">
            <div>
              <p>Total Amount: {sale.total_amount}</p>
              <p>Paid Amount: {sale.paid_amount}</p>
              <p>Change Amount: {sale.change_amount}</p>
            </div>
            <div>
              <p>Cost Prices: {costPrices}</p>
              <p>Selling Prices: {sellingPrices}</p>
              <p>Profit: {profit}</p>
            </div>

          </div>
        </div>
        <div className="flex-1">
          <div>
            <p>Products Detail</p>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-4">
              {products.map((product, index) => {
                const amount = saleDetail.find(det => det.product_id === product.id).amount

                return <SalesProduct key={product.id} index={index} product={product} amount={amount}></SalesProduct>
              })}
            </div>
          </div>
        </div>


      </div>
    </div>
  </>)
}
