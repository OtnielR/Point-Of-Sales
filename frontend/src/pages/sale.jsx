import Sidebar from "../components/sidebar"
import SalesDetail from "../components/Sales/sales-detail"
import { useParams } from "react-router-dom"

export default function Sale() {
  const { id } = useParams()
  return (<>
    <main className="flex flex-row gap-4">
      <Sidebar></Sidebar>
      <section className="flex flex-row w-11/12">
        <SalesDetail id={id}></SalesDetail>
      </section>
    </main>
  </>)
}
