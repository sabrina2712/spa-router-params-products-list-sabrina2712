import React, { Component } from "react";
import "./home.css";

export default class Home extends Component {
  onClickHandler = () => {};
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="header">Welcome Visitor</h1>
          <button className="product-button" onClick={this.onClickHandler}>
            Go to Products
          </button>
        </div>
      </div>
    );
  }
}
