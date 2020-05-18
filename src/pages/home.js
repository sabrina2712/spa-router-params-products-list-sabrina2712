import React, { Component } from "react";
import "./home.css";

import { Route } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="header">Welcome Visitor</h1>
          <Route
            render={({ history }) => (
              <button
                onClick={() => {
                  history.push("/products");
                }}
              >
                Product list
              </button>
            )}
          />
        </div>
      </div>
    );
  }
}
