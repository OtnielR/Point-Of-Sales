import Sidebar from "../components/sidebar"
import CategoryForm from "../components/Categories/category-form"
import CategoryList from "../components/Categories/category-list"

export default function Category() {
  return (<>
    <main className="flex flex-row gap-8">
      <Sidebar></Sidebar>
      <section className="flex flex-row w-11/12">
        <CategoryForm></CategoryForm>
        <CategoryList></CategoryList>
      </section>
    </main>
  </>)
}
