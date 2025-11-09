import { useRef } from "react";
import { postCategory } from "../../api/category";

export default function CategoryForm() {
  const categoryNameRef = useRef();
  const categoryDescriptionRef = useRef();

  const handleSubmit = async (e) => {
    postCategory(categoryNameRef.current.value, categoryDescriptionRef.current.value);
  };

  return (
    <div className="w-full flex justify-center py-10 ">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-8 border border-gray-100">

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Add Category</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-medium">Category Name</label>
            <input
              ref={categoryNameRef}
              type="text"
              className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="Enter category name"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-medium">Category Description</label>
            <input
              ref={categoryDescriptionRef}
              type="text"
              className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="Enter category description"
              required
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
