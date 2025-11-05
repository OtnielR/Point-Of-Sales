export default function CategoryList({ category, onDelete }) {
  console.log(category)
  return (<>
    <div className="flex flex-row justify-between">
      <div>
        <p className="font-bold">
          {category.name}
        </p>
        <p>
          {category.description}
        </p>
      </div>
      <div>
        <button onClick={onDelete} className="text-center rounded-full flex justify-center items-center text-2xl font-bold h-10 text-red-600">
          x
        </button>
      </div>
    </div>
  </>)
}
