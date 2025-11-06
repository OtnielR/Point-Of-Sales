import { useEffect, useState } from "react"
import { getUser } from "../../api/users.js"
import { getSaleDetailBySalesId } from "../../api/sale-detail.js"
import { getSale } from "../../api/sales.js"
import { getProducts } from "../../api/products.js"
import SalesProducts from "./sales-products.jsx"
import SalesInfo from "./sales-info.jsx"

export default function SalesDetail({ id }) {
  const [sale, setSale] = useState([])
  const [user, setUser] = useState([])
  const [saleDetails, setSaleDetails] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const saleData = await getSale(id)
      const userData = await getUser(saleData.user_id)
      const saleDetailsData = await getSaleDetailBySalesId(id)
      const productsData = await getProducts()

      setSale(saleData)
      setUser(userData)
      setSaleDetails(saleDetailsData)
      setProducts(productsData)

    }

    fetchData()
  }, [])

  return (<>
    <div className="w-full px-16 py-16">
      <div className="flex flex-row gap-5 px-6 py-6">
        <div className="w-1/2 bg-white py-10 px-10 rounded-lg shadow-xl">
          <SalesInfo user={user} sale={sale} products={products} saleDetail={saleDetails}></SalesInfo>
        </div>
        <div className="w-1/2 bg-white py-10 px-10 rounded-lg shadow-xl">
          <SalesProducts products={products} saleDetails={saleDetails}></SalesProducts>
        </div>
      </div>
    </div>
  </>)
}
