import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { countCostPrices, countSellingPrice, countProfit } from "../../utils/countBills"
import { formatDate } from "../../utils/date"
import { formatToRupiah } from "../../utils/currency"
import Receipt from "../Receipt/receipt"

export default function SalesInfo({ sale, user, saleDetail, products, index }) {
  const [costPrices, setCostPrices] = useState(0)
  const [sellingPrices, setSellingPrices] = useState(0)
  const [profit, setProfit] = useState(0)
  const [dates, setDates] = useState()
  const [totalAmount, setTotalAmount] = useState(0)
  const [paidAmount, setPaidAmount] = useState(0)
  const [changeAmount, setChangeAmount] = useState(0)
  const [isShowReceipt, setIsShowReceipt] = useState(false)
  const [productOrders, setProductOrders] = useState([])


  useEffect(() => {
    console.log("World", sale)
    const countData = () => {
      setCostPrices(formatToRupiah(countCostPrices(products, saleDetail)))
      setSellingPrices(formatToRupiah(countSellingPrice(products, saleDetail)))
      setProfit(formatToRupiah(countProfit(products, saleDetail)))

      setTotalAmount(formatToRupiah(sale.total_amount))
      setPaidAmount(formatToRupiah(sale.paid_amount))
      setChangeAmount(formatToRupiah(sale.change_amount))

      setDates(formatDate(sale.created_at))

      const productsId = saleDetail.map(det => { return det.product_id })
      const currentProductOrders = products.filter(prod => productsId.includes(prod.id))

      currentProductOrders.forEach(order => {
        let currentSaleDetail = saleDetail.find(det => det.product_id === order.id)
        order.amount = currentSaleDetail.amount

      });

      setProductOrders(currentProductOrders)

    }

    countData()

  }, [products, sale])

  const handleToggleReceipt = () => {
    setIsShowReceipt(prev => !prev)
  }



  return (<>

    <div className={`${isShowReceipt ? "block" : "hidden"}`}>
      <Receipt saleId={sale.id} productOrders={productOrders} handleToggleReceipt={handleToggleReceipt} togglePaymentForm={(e) => { }}></Receipt>
    </div>
    <div className="w-full flex flex-col gap-8">
      <div>
        <p>Sales Info</p>
      </div>
      <div>
        <div className="w-full flex flex-row justify-between">
          <p>{user.username}</p>
          <p className="w-1/4">{dates}</p>
        </div>
      </div>
      <div className="flex flex-row gap-8">
        <div className="w-full flex flex-col gap-3">
          <div className="flex flex-row justify-between">
            <p>Total Amount: </p>
            <p className="w-1/4">{totalAmount}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Paid Amount: </p>
            <p className="w-1/4">{paidAmount}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Change Amount: </p>
            <p className="w-1/4">{changeAmount}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Cost Price: </p>
            <p className="w-1/4">{costPrices}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Selling Prices: </p>
            <p className="w-1/4">{sellingPrices}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Profit: </p>
            <p className="w-1/4">{profit}</p>
          </div>
        </div>

      </div>
      <div className="flex justify-center">
        <button className="w-1/2 bg-black text-white text-center px-2 py-2" onClick={handleToggleReceipt}>Print Receipt</button>
      </div>

    </div>
  </>)
}
