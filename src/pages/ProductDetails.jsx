import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data/products.js";
import { useCart } from "../context/CartContext.jsx";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <main className="container page not-found">
        <p className="eyebrow">404</p>
        <h1>Product Not Found</h1>
        <p>We couldn't find the product you're looking for.</p>
        <Link to="/products" className="primary-button">Back to Products</Link>
      </main>
    );
  }

  return (
    <main className="container page details-page">
      <Link to="/products" className="back-link">← Back to Products</Link>

      <div className="details-layout">
        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="details-info">
          <span className="product-category static">{product.category}</span>
          <div className="rating large">
            ★ {product.rating} <span>({product.reviews} reviews)</span>
          </div>
          <h1>{product.name}</h1>
          <p className="details-description">{product.description}</p>
          <div className="details-price">${product.price.toLocaleString()}</div>

          <button
            className="primary-button wide"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>

          <ul className="detail-points">
            {product.features.map((feature) => (
              <li key={feature}><strong>✓</strong>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;