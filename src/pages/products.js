import React, { Component } from "react";
import { Route } from "react-router-dom";
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
      <div>
        <button onClick={this.onResetHandler}>Reset</button>
        <button onClick={this.onAscendingClick}>Ascending</button>
        <button onClick={this.onDescendingClick}>Descending</button>
        <div className="product-header" onClick={this.onClickHandler}>
          Product Lists:
        </div>

        <div className="product-container">
          <div className="product-items">
            <div className="items">Name</div>
            <div className="items">Description</div>
            <div className="items">Price</div>
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
                <div className="items">{d.description}</div>
                <div className="items">{d.price}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
