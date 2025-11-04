import { postSales } from "../../api/sales"
import { postSaleDetail } from "../../api/sale-detail"
import { useState, useRef, useEffect } from "react"
import { countSubtotal } from "../../utils/countBills"

export default function PaymentForm({ productOrders, togglePaymentForm, handleToggleReceipt }) {
  const [total, setTotal] = useState(0)
  const [changeAmount, setChangeAmount] = useState(0)
  const customerMoneyRef = useRef()


  useEffect(() => {
    setTotal(countSubtotal(productOrders))

  }, [productOrders])

  const handleChangeAmountInput = (e) => {

    const customerMoney = Number(e.target.value)

    if (customerMoney > total) {
      setChangeAmount(customerMoney - total)
    } else {
      setChangeAmount(NaN)
    }
  }

  const completedPayment = async () => {
    const sales = await postSales(1, total, customerMoneyRef.current.value, changeAmount, 1)

    productOrders.forEach(order => {
      postSaleDetail(sales.id, order.id, order.amount, order.amount * order.selling_price)
    });

    handleToggleReceipt(sales)
  }

  return (<>
    <div className="w-1/3 px-4">
      <div>
        <p>Payment Detail</p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="bg-gray-300 py-2 px-4 rounded-lg">
          <div className="flex flex-row justify-between font-bold text-xl">
            <div className="">Total</div>
            <div className="">Rp.{total}</div>
          </div>
        </div>
        <div>
          <label htmlFor="">Customer Money</label>
          <input className="border" type="text" onChange={handleChangeAmountInput} ref={customerMoneyRef} />
        </div>
        <div className="bg-gray-300 py-2 px-4 rounded-lg">
          <div className="flex flex-row justify-between font-bold text-xl">
            <div className="">Change Amount</div>
            <div className="">Rp.{changeAmount}</div>
          </div>
        </div>
        <div className="w-full flex flex-row gap-4">
          <button className="w-1/2 bg-purple-600 text-white" onClick={completedPayment}>Completed</button>
          <button className="w-1/2 bg-red-500 text-white" onClick={togglePaymentForm}>Cancel</button>
        </div>
      </div>
    </div>
  </>)
}
