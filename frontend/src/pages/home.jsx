import Sidebar from "../components/sidebar"
import Products from "../components/Products/products"

export default function Home() {
  return (<>
    <main className="flex flex-row gap-4">
      <Sidebar></Sidebar>
      <section className="flex flex-row flex-1 w-11/12 h-screen">
        <Products></Products>
      </section>
    </main>
  </>)
}
