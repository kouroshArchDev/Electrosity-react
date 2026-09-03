import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`} className="product-image-wrap">
        <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
        <span className="product-category">{product.category}</span>
      </Link>

      <div className="product-info">
        <div className="rating">★ {product.rating} <span>({product.reviews})</span></div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>

        <div className="product-bottom">
          <strong>${product.price.toLocaleString()}</strong>
          <button
            className="add-button"
            onClick={() => addToCart(product)}
            aria-label={`Add ${product.name} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;