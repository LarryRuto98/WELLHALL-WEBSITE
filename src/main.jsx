import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorBoundary from "./ErrorBoundary"; // Ensure this file exists or remove this line

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary> {/* Ensure this component exists or remove it */}
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);