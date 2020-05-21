import React, { Component } from "react";
import "./home.css";
import data from "../data/products.json";

export default class Home extends Component {
  render() {
    let highestPricesObjArray = data
      .sort((a, b) => {
        return b.price - a.price;
      })
      .slice(0, 4);

    return (
      <div className="outer">
        <div className="container">
          <h1 className="header">Welcome Visitor</h1>

          <button
            className="product-button"
            onClick={() => {
              this.props.history.push("/products");
            }}
          >
            Product list
          </button>
        </div>
        <div className="price-label">
          {highestPricesObjArray.map((ele) => {
            return (
              <div className="price-container">
                <div className="price-name"> {ele.name}</div>
                <div className="price-home"> {ele.price}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
