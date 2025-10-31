import { useRef, useState, useEffect } from "react"
import { getCategories } from "../../api/category"

export default function CategoryList() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCategories();
        console.log(data);
        setCategories(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  return (<>
    <div>
      <div>
        <p className="font-bold">Categories List</p>
      </div>
      <div>{categories.map(category => (<div>
        <p>{category.name}</p>
      </div>))}</div>
    </div>
  </>)

}
