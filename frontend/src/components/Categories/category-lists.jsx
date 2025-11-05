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
    <div className="w-full flex justify-center items-center ">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-8 flex flex-col gap-6 border border-gray-100">
        
        <p className="text-2xl font-bold text-gray-800">
          Categories List
        </p>

        <div className="flex flex-col gap-3 max-h-[72vh] overflow-y-auto pr-1">
          {categories.length > 0 ? (
            categories.map(category => (
              <CategoryList
                category={category}
                key={category.id}
                onDelete={() => handleDelete(category.id)}
              />
            ))
          ) : (
            <p className="text-gray-500 text-center py-10">
              No categories found
            </p>
          )}
        </div>
      </div>
    </div>
  </>)

}
