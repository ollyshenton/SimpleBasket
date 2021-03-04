import React, { Component } from "react";
import { connect } from "react-redux";

import {
  addToCart,
  removeOne,
  removeFromCart,
  removeAllCart,
  addOne
} from "../actions/cartActions";

class Basket extends Component {
  render() {
    const { cartItems, removeAllCart } = this.props;

    return (
      <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
        <h2>Basket</h2>
        {cartItems.length === 0 ? (
          "Basket is empty"
        ) : (
          <div>
            You have {cartItems.length} items in the basket.{" "}
            <i className=" "></i>
            <hr />
          </div>
        )}
        {cartItems.length > 0 && (
          <div className="flex rounded-lg h-full bg-gray-100 p-1 flex-col">
            <ul className="flex flex-col">
              {cartItems.map(item => (
                <li className="flex flex-row justify-end p-1" key={item.id}>
                  <p className="">{item.title}</p>
                  <p className="justify-end ml-2 mr-1">
                    Quantity: {item.count}
                  </p>

                  <button
                    className="justify-end text-gray-50 cursor-pointer bg-purple-600 rounded shadow-sm w-4"
                    onClick={e => this.props.addOne(this.props.cartItems, item)}
                  >
                    +
                  </button>
                  <button
                    className="justify-end text-gray-50 cursor-pointer bg-purple-600 rounded shadow-sm w-4 mr-1 ml-1"
                    onClick={e =>
                      this.props.removeOne(this.props.cartItems, item)
                    }
                  >
                    -
                  </button>
                  <button
                    className="justify-end text-gray-50 cursor-pointer bg-purple-600 rounded shadow-sm w-4"
                    onClick={e =>
                      this.props.removeFromCart(this.props.cartItems, item)
                    }
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <button
          className="justify-end text-gray-50 cursor-pointer bg-purple-600 rounded shadow-sm"
          onClick={removeAllCart}
        >
          Remove all
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  cartItems: state.cart.items
});
export default connect(mapStateToProps, {
  addToCart,
  addOne,
  removeOne,
  removeFromCart,
  removeAllCart
})(Basket);
