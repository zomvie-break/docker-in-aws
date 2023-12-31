import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://" + window.location.host + ":8000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  if (products.length === 0) return "loading...";

  return (
    <>
      <h2>Products:</h2>
      {products &&
        products.map((product) => (
          <p>
            {product.name} - $ {product.price}
          </p>
        ))}
    </>
  );
}

export default Products;
