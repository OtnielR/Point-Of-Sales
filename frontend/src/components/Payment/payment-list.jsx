import { getImageUrl } from "../../api/image"

export default function PaymentList({ product, index }) {
  return (<>
    <div className="flex flex-row gap-4">
      <div>
        <p>{index}</p>
      </div>
      <div className="flex flex-row gap-4">
        <div className="w-20 h-20 overflow-hidden">
          <img
            src={getImageUrl(product.image_url)}
            className="w-full h-full object-cover rounded-xl"
            alt=""
          />
        </div>
        <div className="h-full flex flex-col justify-between py-2">
          <p>{product.name}</p>

          <div className="w-full flex flex-row justify-between gap-8">

            <div className="flex flex-row gap-4">

              <p>Rp. {product.selling_price}</p>
              <p>Amount: {product.amount}</p>

            </div>
            <div>
              <p className="font-bold">Total: Rp. {product.selling_price * product.amount}</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </>)
}
