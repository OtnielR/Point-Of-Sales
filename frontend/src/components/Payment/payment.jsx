import PaymentLists from "./payment-lists"
import PaymentForm from "./payment-form"
import TransparentBlackBackground from "../SharedComponents/transparent-black-background"
import Receipt from "../Receipt/receipt"
import { useState } from "react"

export default function Payment({ user, showPayment, togglePaymentForm, productOrders }) {
  const [isShowReceipt, setIsShowReceipt] = useState(false)
  const [saleId, setSaleId] = useState([])

  const handleToggleReceipt = (sales) => {
    setIsShowReceipt(prev => !prev)
    setSaleId(sales.id)
  }

  return (<>
    <div id="payment" className={`w-screen h-screen fixed top-0 left-0 z-50 ${showPayment ? "fixed" : "hidden"}`} >


      {isShowReceipt ?

        <Receipt user={user} saleId={saleId} togglePaymentForm={togglePaymentForm} handleToggleReceipt={handleToggleReceipt} productOrders={productOrders} onCancelRefresh={true}></Receipt>
        :

        <div className="w-full h-full flex justify-center items-center">

          <TransparentBlackBackground></TransparentBlackBackground>
          <div className="w-9/12 px-8 py-8 rounded-lg z-80">

            <div className="flex flex-row gap-5">

              <div className="flex-1 bg-white p-8 rounded-lg">

                <div className="font-bold text-xl">
                  <p>Payment Form</p>
                </div>
                <PaymentLists productOrders={productOrders}></PaymentLists>
              </div>

              <div className="bg-white py-8 px-20 rounded-lg">
                <PaymentForm user={user} productOrders={productOrders} togglePaymentForm={togglePaymentForm} handleToggleReceipt={handleToggleReceipt}></PaymentForm>

              </div>
            </div>
          </div>

        </div>
      }

    </div >
  </>)
}
