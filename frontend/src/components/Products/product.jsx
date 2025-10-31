export default function Product({ product, category, handleAddOrder }) {
  return (
    <>
      <div className="flex flex-col gap-2 bg-white px-4 py-4 rounded-2xl">
        <div className="w-full h-38 overflow-hidden">
          <img
            src={`http://localhost:8080${product.image_url}`}
            className="object-cover h-full rounded-lg"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <p className="font-bold text-xl">{product.name}</p>
            <p className="text-md">{category.name}</p>
          </div>
          <div className='flex flex-row justify-between'>
            <p className="font-bold">Rp. {product.selling_price}</p>

            <div className="w-6 h-6 bg-black rounded-full">
              <button onClick={() => handleAddOrder(product)} className="w-full text-white text-center">+</button>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
