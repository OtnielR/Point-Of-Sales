import Sidebar from "../components/sidebar"
import CategoryForm from "../components/Categories/category-form"
import CategoryLists from "../components/Categories/category-lists"

export default function Category() {
  return (<>
    <main className="flex flex-row gap-8">
      <Sidebar></Sidebar>
      <section className="flex flex-row w-11/12">
        <CategoryForm></CategoryForm>
        <CategoryLists></CategoryLists>
      </section>
    </main>
  </>)
}
