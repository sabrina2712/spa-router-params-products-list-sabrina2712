import React, { Component } from "react";
import data from "../data/products.json";
import "./product-details.css";

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let id = this.props.match.params.id;
    let product = data.find((e) => {
      return e.id === id;
    });
    let currentProductIndex = data.indexOf(product);
    let prevId;
    if (currentProductIndex > 0) {
      let prevProductIndex = currentProductIndex - 1;
      let prevProduct = data[prevProductIndex];
      prevId = prevProduct.id;
    }

    let nextId;
    if (currentProductIndex < data.length - 1) {
      let nextProductIndex = currentProductIndex + 1;
      let nextProduct = data[nextProductIndex];
      nextId = nextProduct.id;
    }

    if (!product) {
      return <div>product not found!</div>;
    }
    return (
      <>
        <div className="details-container">
          <div className="name">{product.name}</div>
          <div>
            <img className="image" src={product.image} alt="" />
          </div>
          <div className="description">{product.description}</div>
          <div className="price">${product.price}</div>
          <div className="buttons">
            {prevId ? (
              <button
                className="prev-button"
                onClick={() => {
                  this.props.history.push(`/products/${prevId}`);
                }}
              >
                Prev
              </button>
            ) : null}

            {nextId ? (
              <button
                className="next-button"
                onClick={() => {
                  this.props.history.push(`/products/${nextId}`);
                }}
              >
                Next
              </button>
            ) : null}
          </div>
        </div>
      </>
    );
  }
}
