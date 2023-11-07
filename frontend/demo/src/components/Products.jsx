import React, { useEffect, useState } from "react";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h2>Products:</h2>
      {products &&
        products.map((products) => {
          <p>
            {products.name} - $ {products.price}
          </p>;
        })}
    </>
  );
}

export default Product;
