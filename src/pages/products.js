import React, { Component } from "react";
import "./product.css";
import originalData from "../data/products.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [...originalData],
      isDescending: null,
      value: "",
    };
  }
  onAscendingClick = () => {
    this.setState((state) => {
      let data = state.data;
      data.sort((a, b) => {
        return a.price - b.price;
      });
      return { data: data, isDescending: false };
    });
  };

  onDescendingClick = () => {
    this.setState((state) => {
      let data = state.data;
      data.sort((a, b) => {
        return b.price - a.price;
      });
      return { data: data, isDescending: true };
    });
  };

  onResetHandler = () => {
    this.setState({ data: [...originalData], isDescending: null });
  };

  onChangeHandler = (e) => {
    let val = e.target.value;
    if (e.target.value.trim().length === 0) {
      this.setState({ data: [...originalData], value: val });
      return;
    }

    this.setState(() => {
      let result = [];
      result = originalData.filter((item) => {
        let words = item.name.split(" ");
        for (var i = 0; i < words.length; i++) {
          if (words[i].toUpperCase().startsWith(val.toUpperCase())) {
            return true;
          }
        }
        return false;
      });
      return { data: result, value: val };
    });
  };
  render() {
    let data = this.state.data;
    let label = "";
    if (this.state.isDescending !== null) {
      label = this.state.isDescending === true ? "Descending" : "Ascending";
    }

    let list = data.map((d) => {
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
    });
    return (
      <div className="main-container">
        <div className="button-container">
          <button onClick={this.onResetHandler}>Reset</button>
          <button onClick={this.onAscendingClick}>Ascending</button>
          <button onClick={this.onDescendingClick}>Descending</button>
        </div>
        <div name="name" className="filter">
          <div className="filter-text">Filter by name or description</div>
          <input
            onChange={this.onChangeHandler}
            value={this.state.value}
          ></input>
        </div>
        <div className="header-top">
          <div className="product-header" onClick={this.onClickHandler}>
            <FontAwesomeIcon icon={faAngleLeft} /> Product Lists{" "}
            <span className="list-label">{label}</span>
          </div>
        </div>

        <div>
          <div className="head-container">
            <div className="items-head">Name</div>
            <div className="items-head">Description</div>
            <div className="items-head">Price</div>
          </div>
          {data.length === 0 ? <div>No data found </div> : list}
        </div>
      </div>
    );
  }
}
