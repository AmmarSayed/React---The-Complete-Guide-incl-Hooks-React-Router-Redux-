import React from "react";
import ReactDOM from "react-dom/client";

// import ProductsProvider from "./context/products-context";
import configStore from "./components/hooks-store/products-store";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

configStore();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
