import SalesProduct from "./sales-product"

export default function SalesProducts({ products, saleDetails }) {
  return (<>
    <div className="w-full">
      <div>
        <p>Products Detail</p>
      </div>
      <div className="flex flex-col gap-4">
        {saleDetails.map((det, index) => {
          const currentProducts = products.find(prod => prod.id === det.product_id)

          return <SalesProduct key={det.id} product={currentProducts} amount={det.amount} index={index}></SalesProduct>
        })}
      </div>

    </div>
  </>)
}
