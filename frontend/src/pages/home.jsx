import Sidebar from "../components/sidebar"
import Products from "../components/Products/products"

export default function Home() {
  return (<>
    <main className="flex flex-row gap-8">
      <Sidebar></Sidebar>
      <section className="w-11/12">
        <Products></Products>
      </section>
    </main>
  </>)
}
