import Sidebar from "../components/sidebar"
import Products from "../components/Products/products"
import Bills from "../components/product_bils"

export default function Home() {
  return (<>
    <main className="flex flex-row gap-8">
      <Sidebar></Sidebar>
      <section className="flex flex-row w-11/12">
        <Products></Products>
        <Bills></Bills>
      </section>
    </main>
  </>)
}
