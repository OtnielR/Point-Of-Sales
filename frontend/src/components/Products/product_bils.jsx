import React from "react";
import { useEffect, useState } from "react";
import ProductOrder from "./product-order";


function product_bils({ productOrders }) {
  return (
    <div className="w-1/3 h-screen px-4 py-8">
      <div className="bg-white flex flex-col gap-3 h-full py-2 px-6">
        <div className="title">
          <h1 className="font-bold text-2xl">Current Order</h1>
        </div>
        <div className="user">
          <p className="">Fachri Solihin</p>
        </div>

        <div className="flex flex-col flex-1 overflow-y-scroll gap-4">
          {productOrders.map((product) => (
            <ProductOrder product={product}></ProductOrder>
          ))}
        </div>
        <div className="container flex flex-col gap-3">
          <div className="bg-gray-300 mt-10 py-4 px-6 rounded-lg">
            <div className="flex flex-row justify-between">
              <p className="">Subtotal</p>
              <p className="">Rp.0000</p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="">Discount</p>
              <p className="">Rp.0000</p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="">Service Charge</p>
              <p className="">Rp.0000</p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="">Tax</p>
              <p className="">Rp.0000</p>
            </div>
          </div>
          <div className="bg-gray-300 py-4 px-6 rounded-lg">
            <div className="flex flex-row justify-between font-bold text-xl">
              <div className="">Total</div>
              <div className="">Rp.0000</div>
            </div>
          </div>
          <div className="button flex justify-center py-2 bg-violet-700 rounded-lg    ">
            <button className="text-white">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default product_bils;
