import SalesProduct from "./sales-product"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { countCostPrices, countSellingPrice, countProfit } from "../../utils/countBills"
import { formatDate } from "../../utils/date"
import { formatToRupiah } from "../../utils/currency"

export default function SalesList({ sale, user, saleDetail, products, index }) {
  const [costPrices, setCostPrices] = useState(0)
  const [sellingPrices, setSellingPrices] = useState(0)
  const [profit, setProfit] = useState(0)
  const [dates, setDates] = useState()
  const [totalAmount, setTotalAmount] = useState(0)
  const [paidAmount, setPaidAmount] = useState(0)
  const [changeAmount, setChangeAmount] = useState(0)


  useEffect(() => {
    const countData = () => {
      setCostPrices(countCostPrices(products, saleDetail))
      setSellingPrices(countSellingPrice(products, saleDetail))
      setProfit(formatToRupiah(countProfit(products, saleDetail)))

      setTotalAmount(formatToRupiah(sale.total_amount))
      // setPaidAmount(formatToRupiah(sale.paid_amount))
      // setChangeAmount(formatToRupiah(sale.change_amount))

      setDates(formatDate(sale.created_at))
    }

    countData()

  }, [products, sale])



  return (<>
    <Link to={`/sale/${sale.id}`}>
      <div className="flex flex-row h-14 transition-transform hover:scale-102 items-center px-4 py-2 w-full bg-white rounded-lg shadow-lg">
        <div className="w-1/10">
          <p>#{sale.id}</p>
        </div >
        <div className="w-3/10">
          <p>{user.username}</p>
        </div>
        <div className="w-1/10">
          <p className="text-green-700">Completed</p>
        </div>
        <div className="w-2/10">
          {totalAmount}
        </div>
        <div className="w-2/10">
          <p className="text-green-700">{profit}</p>
        </div>
        <div className="w-2/10">
          {dates}
        </div>
      </div>
    </Link>

  </>)
}
