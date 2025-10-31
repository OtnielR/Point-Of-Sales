import React, { useEffect, useState } from "react";
import { getProducts } from "../../api/products";
import { getCategories } from "../../api/category";
import Product from "./product";
import Bills from './product_bils'
import Header from "./products-header";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productOrders, setProductOrders] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const products = await getProducts();
        const categories = await getCategories();

        setProducts(products);
        setCategories(categories)

      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  const handleAddOrder = (product) => {
    if (productOrders.find(prod => prod.id === product.id)) {
      return
    }
    setProductOrders((prev) => [...prev, product])
  }

  return (
    <>
      <div className="flex flex-col w-2/3 gap-4">
        <Header></Header>
        <div id="products" className="w-full">
          <div className="grid grid-cols-3 gap-x-6 gap-y-6">
            {products.map((product) => {
              const category = categories.find(cat => cat.id === product.category_id)

              return <Product product={product} category={category} handleAddOrder={handleAddOrder} key={product.id}></Product>
            })}
          </div>
        </div>
      </div>
      <Bills productOrders={productOrders}></Bills>
    </>
  );
}
