import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products.js";
import ProductGrid from "../components/ProductGrid.jsx";

function Home() {
  const featured = products.filter((product) => product.featured);

  return (
    <main>
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-copy">
            <p className="eyebrow">THE FUTURE OF EVERYDAY TECH</p>
            <h1>Technology that <span>fits your life.</span></h1>
            <p className="hero-text">
              Curated electronics, smart gadgets, and accessories designed for the
              way you live, work, and play.
            </p>
            <div className="hero-actions">
              <Link to="/products" className="primary-button">Shop Collection</Link>
              <a href="#featured" className="secondary-button">Explore Featured</a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="hero-device">E</div>
            <div className="hero-glow" />
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="container benefit-grid">
          <div><strong>01</strong><span>Curated tech</span></div>
          <div><strong>02</strong><span>Fast delivery</span></div>
          <div><strong>03</strong><span>Secure checkout</span></div>
          <div><strong>04</strong><span>Reliable support</span></div>
        </div>
      </section>

      <section className="container section" id="featured">
        <div className="section-heading">
          <div>
            <p className="eyebrow">HANDPICKED</p>
            <h2>Featured Products</h2>
          </div>
          <Link to="/products" className="text-link">View all →</Link>
        </div>
        <ProductGrid products={featured} />
      </section>

      <section className="category-banner">
        <div className="container category-content">
          <div>
            <p className="eyebrow">EXPLORE THE COLLECTION</p>
            <h2>Build your perfect setup.</h2>
          </div>
          <Link to="/products" className="dark-button">See Everything</Link>
        </div>
      </section>
    </main>
  );
}

export default Home;