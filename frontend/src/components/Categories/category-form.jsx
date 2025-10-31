import { useRef, useState, useEffect } from "react"
import { postCategory } from "../../api/category"

export default function CategoryForm() {

  const categoryNameRef = useRef()
  const categoryDescriptionRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()

    postCategory(categoryNameRef.current.value, categoryDescriptionRef.current.value)
  }

  return (<>
    <div className="w-1/2 ">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <p>Category Name: </p>
          <input ref={categoryNameRef} type="text" className="border" />
        </div>
        <div>
          <p>Category Description: </p>
          <input ref={categoryDescriptionRef} type="text" className="border" />
        </div>
        <div>
          <button className="border pointer" type="submit">Submit</button>
        </div>
      </form>

    </div>
  </>)
}
