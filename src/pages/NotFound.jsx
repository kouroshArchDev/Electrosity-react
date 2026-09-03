import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="container page not-found">
      <p className="eyebrow">404</p>
      <h1>Page Not Found</h1>
      <p>This page doesn't exist. Let's get you back to ELECTROSITY.</p>
      <Link to="/" className="primary-button">Back Home</Link>
    </main>
  );
}

export default NotFound;