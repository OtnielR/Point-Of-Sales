import { useRef, useState, useEffect } from "react"
import { postProducts } from "../../api/products"
import { getCategories } from "../../api/category"

export default function ProductsForm() {
  const [preview, setPreview] = useState(null)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function fetchData() {
      const data = await getCategories();
      setCategories(data);
    }

    fetchData();
  }, []);


  const productNameRef = useRef()
  const productCategoryRef = useRef()
  const productCostPriceRef = useRef()
  const productSellingPriceRef = useRef()
  const productStockRef = useRef()
  const productImageRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const name = productNameRef.current.value
    const categoryId = productCategoryRef.current.value
    const costPrice = productCostPriceRef.current.value
    const sellingPrice = productSellingPriceRef.current.value
    const stock = productStockRef.current.value
    const image = productImageRef.current.files[0]

    postProducts(name, categoryId, costPrice, sellingPrice, stock, image)

  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setPreview(URL.createObjectURL(file))
    }
  }

  return (<>
    <div className="w-1/2 ">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <p>Product Name: </p>
          <input ref={productNameRef} type="text" className="border" />
        </div>
        <div>
          <p>Product Category: </p>
          <select ref={productCategoryRef} className="border" name="" id="" >
            {categories.map(category => (<option value={category.id} key={category.id}>{category.name}</option>))}
          </select>
        </div>
        <div>
          <p>Product Cost Price: </p>
          <input ref={productCostPriceRef} type="text" className="border" />
        </div>
        <div>
          <p>Product Selling Price: </p>
          <input ref={productSellingPriceRef} type="text" className="border" />
        </div>
        <div>
          <p>Product Stock: </p>
          <input ref={productStockRef} type="text" className="border" />
        </div>
        <div>
          <div>
            <p>Product Image: </p>
            <input ref={productImageRef} type="file" className="border" onChange={handleFileChange} />
          </div>
          <div id="preview-image">
            {preview && (<img src={preview} alt="" />)}
          </div>
        </div>




        <div>
          <button className="border pointer" type="submit">Submit</button>
        </div>
      </form>

    </div>
  </>)
}
