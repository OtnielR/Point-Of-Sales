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
        <button onClick={onDelete} className="bg-red-400 text-center rounded-full w-6 h-6">
          x
        </button>
      </div>
    </div>
  </>)
}
