import PaymentList from "./payment-list"

export default function PaymentLists({ productOrders }) {

  return (<>
    <div className="flex-1 h-full flex flex-col gap-8">
      <div>
        <p className="font-semibold text-lg">Payment Receipt</p>
      </div>
      <div className="flex flex-col h-92 overflow-y-scroll gap-4">
        {productOrders.map((product, index) => (
          <PaymentList product={product} index={index + 1} key={product.id}></PaymentList>
        ))}
      </div>
    </div>
  </>)
}
