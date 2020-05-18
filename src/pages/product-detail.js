import React, { Component } from "react";
import data from "../data/products.json";

export default class ProductDetail extends Component {
  render() {
    let id = this.props.match.params.id;
    let product = data.find((e) => {
      return e.id === id;
    });
    if (!product) {
      return <div>product not found!</div>;
    }
    return (
      <>
        <div>{product.name}</div>
        <div>
          <img className="image" src={product.image} alt />
        </div>
        <div className="descrip">{product.description}</div>
        <div className="price">${product.price}</div>
      </>
    );
  }
}
