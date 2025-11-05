import { useState, useEffect } from "react"
import ProductInfo from "./product-info"
import ProductEditForm from "./product-edit-form"
import { getProduct } from "../../api/products"

export default function ProductDetail({ id }) {
  const [product, setProduct] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProduct(id)

      setProduct(data)

    }

    fetchData()
  }, [])

  return (<>
    <div className="w-full flex flex-row">
      <ProductInfo product={product}></ProductInfo>
      <ProductEditForm product={product}></ProductEditForm>
    </div>
  </>)
}
