import React from "react";
import { useEffect, useState } from "react";
import ProductOrder from "./product-order";
import { countSubtotal } from "../../utils/countBills";
import { formatToRupiah } from "../../utils/currency";


function product_bils({ productOrders, removeOrders, togglePaymentForm }) {
  const [subTotal, setSubTotal] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [serviceCharge, setServiceCharge] = useState(0)
  const [tax, setTax] = useState(0)
  const [total, setTotal] = useState(0)

  const handleProductAmount = () => {
    let newSubTotal = countSubtotal(productOrders)
    setSubTotal(formatToRupiah(newSubTotal))

    let newTotal = countSubtotal(productOrders)
    setTotal(formatToRupiah(newTotal))
  }

  useEffect(() => {
    let newSubTotal = countSubtotal(productOrders)
    setSubTotal(formatToRupiah(newSubTotal))

    let newTotal = countSubtotal(productOrders)
    setTotal(formatToRupiah(newTotal))
  }, [productOrders])



  return (
    <div className="w-1/3 h-screen px-4 py-8">
      <div className="bg-white flex flex-col gap-3 h-full py-5 px-8 rounded-lg">
        <div className="title">
          <h1 className="font-bold text-2xl">Current Order</h1>
        </div>
        <div className="user">
          <p className="">Fachri Solihin</p>
        </div>

        <div className="flex flex-col flex-1 overflow-y-scroll gap-4">
          {productOrders.map((product) => (
            <ProductOrder key={product.id} product={product} removeOrders={removeOrders} handleProductAmount={handleProductAmount}></ProductOrder>
          ))}
        </div>
        <div className="container flex flex-col gap-3">
          <div className="bg-gray-300 py-4 px-6 rounded-lg">
            <div className="flex flex-row justify-between">
              <p className="">Subtotal</p>
              <p className="">{subTotal}</p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="">Discount</p>
              <p className="">Rp.{discount}</p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="">Service Charge</p>
              <p className="">Rp.{serviceCharge}</p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="">Tax</p>
              <p className="">Rp.{tax}</p>
            </div>
          </div>
          <div className="bg-gray-300 py-4 px-6 rounded-lg">
            <div className="flex flex-row justify-between font-bold text-xl">
              <div className="">Total</div>
              <div className="">{total}</div>
            </div>
          </div>
          <div className="button flex justify-center py-2 bg-purple-600 rounded-lg" onClick={togglePaymentForm}>
            <button className="text-white" >Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default product_bils;
