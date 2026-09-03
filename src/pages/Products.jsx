import React from "react";
import { useMemo, useState } from "react";
import products from "../data/products.js";
import ProductGrid from "../components/ProductGrid.jsx";

function Products() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const categories = ["All", ...new Set(products.map((product) => product.category))];

  const filteredProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;
      const matchesSearch =
        !normalized ||
        `${product.name} ${product.category} ${product.description}`
          .toLowerCase()
          .includes(normalized);

      return matchesCategory && matchesSearch;
    });
  }, [category, query]);

  return (
    <main className="container page products-page">
      <div className="page-heading products-heading">
        <div>
          <p className="eyebrow">ELECTROSITY COLLECTION</p>
          <h1>All Products</h1>
          <p>Modern devices and accessories for your everyday setup.</p>
        </div>
        <span className="product-count">{filteredProducts.length} products</span>
      </div>

      <div className="toolbar">
        <label className="search-box">
          <span>⌕</span>
          <input
            type="search"
            placeholder="Search products..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Search products"
          />
        </label>

        <div className="filters" aria-label="Product categories">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "filter active" : "filter"}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <ProductGrid products={filteredProducts} />
    </main>
  );
}

export default Products;