import { useRef } from "react";
import { postCategory } from "../../api/category";

export default function CategoryForm() {
  const categoryNameRef = useRef();
  const categoryDescriptionRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    postCategory(categoryNameRef.current.value, categoryDescriptionRef.current.value);
  };

  return (
    <div className="w-full flex justify-center items-center py-10 bg-gray-100">
      <div className="w-1/2 max-w-2xl bg-white p-8 shadow-md rounded-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Add Category
          </h2>

          <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-medium">Category Name</label>
            <input
              ref={categoryNameRef}
              type="text"
              className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-medium">Category Description</label>
            <input
              ref={categoryDescriptionRef}
              type="text"
              className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <button
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium transition w-full"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
