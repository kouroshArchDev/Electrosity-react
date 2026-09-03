import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

function Cart() {
  const {
    cart,
    cartTotal,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart
  } = useCart();

  if (!cart.length) {
    return (
      <main className="container page">
        <div className="empty-cart">
          <div className="empty-icon">🛒</div>
          <p className="eyebrow">YOUR BAG</p>
          <h1>Your Cart Is Empty</h1>
          <p>Discover something new for your setup.</p>
          <Link to="/products" className="primary-button">Browse Products</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container page cart-page">
      <div className="page-heading">
        <p className="eyebrow">YOUR SELECTION</p>
        <h1>Your Cart</h1>
      </div>

      <div className="cart-layout">
        <section className="cart-items">
          {cart.map((item) => (
            <article className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <span className="muted">{item.category}</span>
                <h3>{item.name}</h3>
                <strong>${item.price.toLocaleString()}</strong>
                <div className="quantity-control">
                  <button onClick={() => decreaseQuantity(item.id)} aria-label="Decrease quantity">−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)} aria-label="Increase quantity">+</button>
                </div>
              </div>
              <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
            </article>
          ))}

          <button className="clear-button" onClick={clearCart}>Clear cart</button>
        </section>

        <aside className="cart-summary">
          <p className="eyebrow">SUMMARY</p>
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Items</span>
            <span>{cart.reduce((n, item) => n + item.quantity, 0)}</span>
          </div>
          <div className="summary-row total-row">
            <span>Total</span>
            <strong>${cartTotal.toLocaleString()}</strong>
          </div>
          <button className="checkout-button">Proceed to Checkout</button>
          <p className="checkout-note">Demo checkout for portfolio purposes.</p>
          <Link to="/products" className="continue-link">Continue Shopping →</Link>
        </aside>
      </div>
    </main>
  );
}

export default Cart;