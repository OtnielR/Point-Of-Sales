import { postSales } from "../../api/sales"
import { postSaleDetail } from "../../api/sale-detail"
import { useState, useRef, useEffect } from "react"
import { countSubtotal } from "../../utils/countBills"
import { formatToRupiah } from "../../utils/currency"

export default function PaymentForm({ productOrders, togglePaymentForm, handleToggleReceipt }) {
  const [total, setTotal] = useState(0)
  const [stringTotal, setStringTotal] = useState(0)
  const [changeAmount, setChangeAmount] = useState(0)
  const [stringChangeAmount, setStringChangeAmount] = useState('')
  const customerMoneyRef = useRef()


  useEffect(() => {
    let newTotal = countSubtotal(productOrders)
    setTotal(newTotal)
    setStringTotal(formatToRupiah(newTotal))

  }, [productOrders])

  const handleChangeAmountInput = (e) => {

    const customerMoney = Number(e.target.value)


    if (customerMoney >= total) {
      let changeAmount = customerMoney - total
      setChangeAmount(changeAmount)
      setStringChangeAmount(formatToRupiah(changeAmount))
    } else {
      setChangeAmount(NaN)
      setStringChangeAmount("Not Enough Money")
    }
  }

  const completedPayment = async () => {
    const sales = await postSales(1, total, customerMoneyRef.current.value, changeAmount, 1)


    productOrders.forEach(order => {
      postSaleDetail(sales.id, order.id, order.amount, order.amount * order.selling_price)
    });

    console.log(sales)

    handleToggleReceipt(sales)
  }

  return (<>
    <div className="flex flex-col gap-2 px-4 ">
      <div>
        <p className="font-bold text-2xl">Payment Detail</p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="bg-gray-300 py-2 px-4 rounded-lg">
          <div className="flex flex-row justify-between font-bold text-xl">
            <div className="">Total</div>
            <div className="">: {stringTotal}</div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <label htmlFor="" className="font-semibold text-lg" >Customer Money</label>
          <input className="border rounded-lg mx-auto p-2 text-lg text-center " type="text" onChange={handleChangeAmountInput} ref={customerMoneyRef} />
        </div>
        <div className="bg-gray-300 py-2 px-4 rounded-lg">
          <div className="flex flex-row justify-between font-semibold text-lg">
            <div className="">Change Amount</div>
            <div className="">: {stringChangeAmount}</div>
          </div>
        </div>
        <div className="w-full flex flex-row gap-4">
          <button className="w-1/2 bg-purple-600 text-white rounded-lg p-2" onClick={completedPayment}>Completed</button>
          <button className="w-1/2 bg-red-500 text-white rounded-lg p-2" onClick={togglePaymentForm}>Cancel</button>
        </div>
      </div>
    </div>
  </>)
}
