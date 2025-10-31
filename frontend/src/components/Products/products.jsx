import React, { useEffect, useState } from "react";
import { getProducts } from "../../api/products";
import Product from "./product";
import Header from "./products-header";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts();
        console.log(data);
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col w-2/3 gap-4">
        <Header></Header>
        <div id="products" className="w-full">
          <div className="grid grid-cols-3 gap-x-4 gap-y-4">
            {products.map((product) => (
              <Product product={product} key={product.id}></Product>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
