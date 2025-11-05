import TransparentBlackBackground from "../SharedComponents/transparent-black-background"
import ReceiptProduct from "./receipt-product"
import { getSale } from "../../api/sales"
import { getUser } from "../../api/users"
import { getSaleDetailBySalesId } from "../../api/sale-detail"
import { useEffect, useState } from "react"
import { formatDate } from "../../utils/date"
import { countSubtotal } from "../../utils/countBills"
import { formatToRupiah } from "../../utils/currency"

export default function Receipt({ saleId, togglePaymentForm, handleToggleReceipt, productOrders }) {
  const [sale, setSale] = useState([])
  const [saleDate, setSaleDate] = useState("")
  const [user, setUser] = useState([])
  const [saleDetail, setSaleDetail] = useState([])
  const [subTotal, setSubTotal] = useState(0)
  const [total, setTotal] = useState(0)
  const [paidAmount, setPaidAmount] = useState(0)
  const [changeAmount, setChangeAmount] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const saleData = await getSale(saleId)
      const userData = await getUser(saleData.user_id)
      const saleDetailData = await getSaleDetailBySalesId(saleId)

      console.log(saleData)
      console.log(userData)
      console.log(saleDetailData)

      setSale(saleData)
      setUser(userData)

      setSaleDate(formatDate(saleData.created_at))

      setSubTotal(formatToRupiah(countSubtotal(productOrders)))
      setTotal(formatToRupiah(countSubtotal(productOrders)))
      setPaidAmount(formatToRupiah(saleData.paid_amount))
      setChangeAmount(formatToRupiah(saleData.change_amount))
    }

    fetchData()

  }, [saleId, productOrders])

  const handlePrint = () => {
    window.print()
  }

  const handleCancel = () => {
    handleToggleReceipt(0)
    togglePaymentForm()
  }

  return (<>
    <div className="w-screen h-screen fixed top-0 left-0 z-50">
      <TransparentBlackBackground></TransparentBlackBackground>
      <div className="receipt flex fixed w-full h-full justify-center items-center z-70">
        <div className="w-1/3 flex flex-col gap-8 bg-white px-4 py-4 rounded-lg">
          <div className="w-full flex flex-col gap-6">
            <div className="w-full">
              <p className="w-full text-center font-bold text-2xl">Receipt</p>
            </div>
            <div className="w-full flex flex-row justify-between">
              <div>
                <div className="font-bold">
                  <p>DGF STORE</p>
                </div>
                <div className="w-2/3">
                  <p>{saleDate}</p>
                </div>
              </div>
              <div className="w-1/4">
                {user.username}
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-2">
              {productOrders.map((order) => <ReceiptProduct key={order.id} product={order} key={productOrders.id}></ReceiptProduct>)
              }
            </div>
            <hr />
            <div>
              <div className="w-full flex flex-row justify-between">
                <p>Sub Total: </p>
                <p>{subTotal}</p>
              </div>
              <div className="w-full flex flex-row justify-between font-bold">
                <p>Total: </p>
                <p>{total}</p>
              </div>
              <div className="w-full flex flex-row justify-between">
                <p>Bayar (cash): </p>
                <p>{paidAmount}</p>
              </div>
              <div className="w-full flex flex-row justify-between">
                <p>Kembali</p>
                <p>{changeAmount}</p>
              </div>
            </div>

          </div>

          <div>
            <div className="receipt-buttons w-full flex flex-row gap-4">
              <button className="receipt-buttons w-1/2 border bg-black text-white rounded-lg py-2" onClick={handlePrint}>Print Receipt</button>
              <button className="receipt-buttons w-1/2 border bg-red-500 text-white rounded-lg py-2" onClick={handleCancel}>Cancel</button>
            </div>
          </div>

        </div>

      </div>

    </div>
  </>)

}
