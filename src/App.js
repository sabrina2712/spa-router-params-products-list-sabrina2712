import React from "react";

import "./App.css";
import Home from "./pages/home";
import Products from "./pages/products";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductDetail from "./pages/product-detail";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/products/:id" component={ProductDetail} />
        <Route path="/products" component={Products} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
