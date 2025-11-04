import { getImageUrl } from "../../api/image";

export default function SalesProduct({ product, amount, index }) {
  return (<>
    <div className="flex flex-row gap-4">
      <div className="w-20 h-20 overflow-hidden">
        <img
          src={getImageUrl(product.image_url)}
          className="w-full h-full object-cover rounded-xl"
          alt="" />
      </div>
      <div className="flex flex-col justify-between py-2">
        <div className="flex flex-row justify-between gap-4">
          <p>{product.name}</p>
          <p>Amount: {amount}</p>
        </div>
        <div className="flex flex-row justify-between gap-4">
          <p>Cost Price: {product.cost_price}</p>
          <p>Selling Price: {product.selling_price}</p>
        </div>
      </div>
    </div>
  </>)

}
