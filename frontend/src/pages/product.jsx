import Sidebar from "../components/sidebar";
import ProductDetail from "../components/Product/product-detail";
import { useParams } from "react-router-dom";


export default function Product() {
  const { id } = useParams()



  return (<>
    <main className="flex flex-row gap-4">
      <Sidebar></Sidebar>
      <section className="flex flex-row w-11/12">
        <ProductDetail id={id}></ProductDetail>
      </section>
    </main>
  </>)

}
