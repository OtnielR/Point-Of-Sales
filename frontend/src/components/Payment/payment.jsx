import PaymentLists from "./payment-lists"
import PaymentForm from "./payment-form"

export default function Payment({ showPayment, togglePaymentForm, productOrders }) {

  return (<>
    <div id="payment" className={`w-screen h-screen fixed top-0 left-0 z-50 ${showPayment ? "fixed" : "hidden"}`} >

      <div className="w-screen h-screen fixed top-0 left-0 bg-black opacity-70 z-50">

      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-9/12 px-8 py-8 rounded-lg z-80 bg-white">
          <div className="flex flex-row justify-between">
            <div className="">
              <p>Payment Form</p>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <PaymentLists productOrders={productOrders}></PaymentLists>
            <PaymentForm productOrders={productOrders} togglePaymentForm={togglePaymentForm}></PaymentForm>
          </div>
        </div>
      </div>
    </div >
  </>)
}
