import React, { useEffect, useState } from "react";
import { getProducts } from "../../api/products";
import { getCategories } from "../../api/category";
import Product from "./product";
import Bills from './product_bils'
import Header from "./products-header";
import Payment from "../Payment/payment";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [unFilteredProducts, setUnFilteredProducts] = useState([])
  const [categories, setCategories] = useState([]);
  const [productOrders, setProductOrders] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [selectValue, setSelectValue] = useState("")
  const [showPayment, setShowPayment] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        const products = await getProducts();
        const categories = await getCategories();

        setProducts(products);
        setUnFilteredProducts(products)
        setCategories(categories)

      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  const handleSearchInput = (e) => {
    const currentSearchInput = e.target.value.toLowerCase()

    setSearchInput(currentSearchInput)

    filteredProducts(currentSearchInput, selectValue)
  }

  const handleSelectChange = (e) => {
    const currentSelectValue = e.target.value

    setSelectValue(currentSelectValue)

    filteredProducts(searchInput, currentSelectValue)
  }

  const filteredProducts = (currentSearchInput, currentSelectValue) => {

    if (currentSelectValue === "" && currentSearchInput == "") {
      setProducts(unFilteredProducts)
      return
    }
    else if (currentSelectValue == "" && currentSearchInput !== "") {
      setProducts((prev) =>
        unFilteredProducts.filter(prod =>
          prod.name.toLowerCase().includes(currentSearchInput.toLowerCase())
        )
      )
    }
    else {

      const category = categories.find((cat) => cat.name === currentSelectValue)

      setProducts((prev) =>
        unFilteredProducts.filter(prod =>
          prod.category_id === category.id && prod.name.toLowerCase().includes(currentSearchInput.toLowerCase())
        )
      )
    }
  }

  const handleAddOrder = (product) => {
    product['amount'] = 1

    if (productOrders.find(prod => prod.id === product.id)) {
      return
    }
    setProductOrders((prev) => [...prev, product])
  }

  const togglePaymentForm = () => {
    setShowPayment(!showPayment)
    setProductOrders((prev) => [...prev])
  }

  const removeOrders = (product) => {
    setProductOrders((prev) => prev.filter(prod => prod.id !== product.id))
  }

  return (
    <>
      <Payment showPayment={showPayment} togglePaymentForm={togglePaymentForm} productOrders={productOrders}></Payment>
      <div className="flex flex-row flex-1 h-screen">
        <div className="flex flex-col flex-1 w-2/3 gap-4 h-screen">
          <Header handleSearchInput={handleSearchInput} handleSelectChange={handleSelectChange} categories={categories}></Header>
          <div id="products" className="w-full flex-1">
            <div className="grid grid-cols-3 gap-x-6 gap-y-6">
              {products.map((product) => {
                const category = categories.find(cat => cat.id === product.category_id)

                return <Product product={product} category={category} handleAddOrder={handleAddOrder} key={product.id}></Product>
              })}
            </div>
          </div>
        </div>
        <Bills productOrders={productOrders} removeOrders={removeOrders} togglePaymentForm={togglePaymentForm}></Bills>
      </div>
    </>
  );
}
