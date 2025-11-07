export default function CategoryList({ category, onDelete }) {
  console.log(category);

  return (
    <div className="w-full">
      <div className="bg-white shadow-lg rounded-xl w-full flex items-center justify-between p-4 border border-gray-100">
        <div>
          <p className="font-bold text-lg text-gray-800">{category.name}</p>
          <p className="text-sm text-gray-600">{category.description}</p>
        </div>

        <button
          onClick={onDelete}
          className="flex justify-center items-center rounded-full hover:bg-red-100 p-2 transition"
        >
          <img src="delete.png" alt="delete" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
