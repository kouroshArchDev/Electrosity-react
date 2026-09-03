import React from "react";
import ProductCard from "./ProductCard.jsx";

function ProductGrid({ products }) {
  if (!products.length) {
    return <div className="no-results">No products found in this category.</div>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;