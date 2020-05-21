import React, { Component } from "react";
import "./product.css";

import ProductDetail from "./product-detail";
import originalData from "../data/products.json";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [...originalData] };
  }
  onAscendingClick = () => {
    this.setState((state) => {
      let data = state.data;
      data.sort((a, b) => {
        return a.price - b.price;
      });
      return { data: data };
    });
  };

  onDescendingClick = () => {
    this.setState((state) => {
      let data = state.data;
      data.sort((a, b) => {
        return b.price - a.price;
      });
      return { data: data };
    });
  };

  onResetHandler = () => {
    console.log("here in reset");
    this.setState({ data: [...originalData] });
  };

  render() {
    let data = this.state.data;
    return (
      <div className="main-container">
        <div className="button-container">
          <button onClick={this.onResetHandler}>Reset</button>
          <button onClick={this.onAscendingClick}>Ascending</button>
          <button onClick={this.onDescendingClick}>Descending</button>
        </div>
        <div className="product-header" onClick={this.onClickHandler}>
          Product Lists:
        </div>

        <div>
          <div className="head-container">
            <div className="items-head">Name</div>
            <div className="items-head">Description</div>
            <div className="items-head">Price</div>
          </div>
          {data.map((d) => {
            return (
              <div
                className="product-items"
                onClick={() => {
                  this.props.history.push(`/products/${d.id}`);
                }}
              >
                <div className="items">{d.name}</div>
                <div className="items">{d.slug}</div>
                <div className="items">{d.price}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
