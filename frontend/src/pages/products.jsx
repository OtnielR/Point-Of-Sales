import Sidebar from "../components/sidebar"
import ProductsForm from "../components/Products/products-form"

export default function Products() {
  return (<>
    <main className="flex flex-row gap-8">
      <Sidebar></Sidebar>
      <section className="flex flex-row w-11/12">
        <ProductsForm></ProductsForm>
      </section>
    </main>
  </>)
}
