import { getImageUrl } from "../../api/image";
export default function Product({ product, category, handleAddOrder }) {
  return (
    <>
      <div className="flex flex-col gap-2 bg-white px-4 py-4 rounded-2xl">
        <div className="w-full h-38 overflow-hidden">
          <img
            src={getImageUrl(product.image_url)}
            className="object-cover w-full h-full rounded-lg"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <p className="font-bold text-xl">{product.name}</p>
            <p className="text-md">{category.name}</p>
          </div>
          <div className='flex flex-row justify-between'>
            <div>
              <p className="font-bold">Rp. {product.selling_price}</p>
              <p className="font-bold">Stock: {product.stock}</p>
            </div>

            <div className="flex items-center justify-center w-6 h-full  ">
              <button onClick={() => handleAddOrder(product)} className="w-12 bg-black rounded-full text-white text-center">+</button>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
