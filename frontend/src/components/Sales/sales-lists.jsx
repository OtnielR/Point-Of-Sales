import { useState, useEffect } from "react"
import { getSales } from "../../api/sales"
import { getUsers } from "../../api/users"
import { getSaleDetail } from "../../api/sale-detail"
import { getProducts } from "../../api/products"
import SalesList from "./sales-list"


export default function SalesLists() {
  const [sales, setSales] = useState([])
  const [users, setUsers] = useState([])
  const [saleDetails, setSaleDetail] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const salesData = await getSales()
      const usersData = await getUsers()
      const saleDetailData = await getSaleDetail()
      const productsData = await getProducts()

      setSales(salesData)
      setUsers(usersData)
      setSaleDetail(saleDetailData)
      setProducts(productsData)
    }
    fetchData()
  }, [])

  return (<>
    <div className="w-full px-8 py-8">
      <div>
        <p>Sales </p>

      </div>
      <div>
        <div className="flex flex-col gap-4">
          {sales.map((sale, index) => {
            const currentUser = users.find(user => user.id == sale.user_id)
            const currentSaleDetail = saleDetails.filter(saleDet => saleDet.sales_id == sale.id)
            const productsIds = currentSaleDetail.map(det => det.product_id)

            const currentProducts = products.filter((prod) =>
              productsIds.includes(prod.id)
            )


            return <SalesList key={sale.id} sale={sale} user={currentUser} saleDetail={currentSaleDetail} products={currentProducts} index={index + 1}></SalesList>
          })}

        </div>
      </div>
    </div>

  </>)
}
