export default function ReceiptProduct({ product }) {
  return (<>
    <div>
      <div>
        <p>{product.name}</p>
      </div>
      <div className="w-full flex flex-row justify-between">
        <p>{product.amount} X Rp. {product.selling_price}</p>
        <p>Rp. {product.amount * product.selling_price}</p>
      </div>
    </div>
  </>)
}
