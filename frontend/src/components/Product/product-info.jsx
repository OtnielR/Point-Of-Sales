import { getImageUrl } from "../../api/image.js"

export default function ProductInfo({ product }) {
  return (<>
    <div className="w-1/2 h-full flex justify-center items-center">
      <div className="w-2/3 bg-white px-4 py-4 rounded-lg">
        <div className="w-full h-64 overflow-hidden p-4">
          <img className="object-cover w-full h-full rounded-lg" src={getImageUrl(product.image_url)} alt="" />

        </div>
        <div>
          <div>
            <p>{product.name}</p>
          </div>
          <div className="flex justify-between">
            <div>
              <p>Cost Price: {product.cost_price}</p>
              <p>Selling Price: {product.selling_price}</p>
            </div>
            <div>
              <p>Stock: {product.stock}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </>)
}
