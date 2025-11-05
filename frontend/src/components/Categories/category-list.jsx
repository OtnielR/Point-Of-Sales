export default function CategoryList({ category, onDelete }) {
  console.log(category);
  return (
    <>
      <div className="w-full flex flex-row justify-between p">
        <div className="flex flex-row justify-between bg-white shadow-lg w-full h full items-center py-2 px-6 rounded-2xl ">
          <div className="w-1/2">
            <p className="font-bold">{category.name}</p>
            <p className="w-full text-wrap">{category.description}</p>
          </div>
          <div>
            <button
              onClick={onDelete}
              className="text-center rounded-full flex justify-center items-center text-2xl font-bold h-10 text-red-600"
            >
              <img src="delete.png" alt="" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
