import { useRef, useState, useEffect } from "react"
import { getCategories, deleteCategory } from "../../api/category"
import CategoryList from "./category-list";

export default function CategoryLists() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function fetchData() {
      const data = await getCategories();
      setCategories(data);
    }

    fetchData();
  }, []);

  async function handleDelete(id) {
    const res = await deleteCategory(id)
    setCategories((prev) => prev.filter((category) => category.id !== id))
  }

  return (<>
    <div className="w-1/2 flex flex-col gap-4 px-8 py-8">
      <div>
        <p className="font-bold text-xl">Categories List</p>
      </div>
      <div className="flex flex-col gap-8">
        {categories.map(category => (
          <CategoryList category={category} onDelete={() => handleDelete(category.id)} key={category.id} ></CategoryList>
        ))}
      </div>
    </div >
  </>)

}
