import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { CartItems } from "./products";
import { NavBar } from "./Navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: CartItems
    };
  }

  handleIncrease = (item) => {
    const updateQuantity = item.value++;
    this.setState({ updateQuantity });
  };

  handleDecrease = (item) => {
    if (item.value > 0) {
      const updateQuantity = item.value--;
      this.setState({ updateQuantity });
    }
  };

  render() {
    return (
      <div>
        <NavBar
          itemList={this.state.items}
          handleIncrease={this.handleIncrease}
          handleDecrease={this.handleDecrease}
        />
      </div>
    );
  }
}

export default App;