export default function Product({ product }) {
  console.log(product)
  return (<>
    <div className="bg-white px-4 py-4 rounded-2xl">
      <div className="w-full h-32 overflow-hidden">
        <img src={`http://localhost:8080${product.image_url}`} className="object-cover" alt="" />


      </div>
      <p>{product.name}</p>
      <p>{product.selling_price}</p>
    </div>
  </>)
}
