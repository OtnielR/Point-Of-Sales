import Sidebar from "../components/sidebar"
import SalesLists from "../components/Sales/sales-lists"

export default function Sales() {
  return (<>
    <main className="flex flex-row gap-4">
      <Sidebar></Sidebar>
      <section className="flex flex-row w-11/12">
        <SalesLists></SalesLists>
      </section>
    </main>
  </>)
}
