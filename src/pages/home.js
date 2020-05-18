import React, { Component } from "react";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="header">Welcome Visitor</h1>

          <button
            onClick={() => {
              this.props.history.push("/products");
            }}
          >
            Product list
          </button>
        </div>
      </div>
    );
  }
}
