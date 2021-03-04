import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/cartActions";
import data from "../data/product.json";

class Products extends Component {
  componentDidMount() {}
  render() {
    const { cartItems } = this.props;
    const productItems = data.map(product => (
      <div
        key={product.id}
        className="max-w-sm  rounded shadow-sm order-double border-4 border-light-blue-500"
      >
        <div>
          <img src={product.image} alt={product.title} />
          <div className="m-2.5">
            <h2 className="font-mono">{product.title}</h2>
            <p className="text-sm">{product.brand.name}</p>
          </div>
          <ul className="m-2.5">
            {product.skus.map(item => {
              return (
                <li className="text-xs">
                  {item.description} - £{item.price}
                </li>
              );
            })}
          </ul>
          <button
            onClick={e => this.props.addToCart(cartItems, product)}
            className="text-sm font-mono text-gray-50 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 m-2.5 p-2.5 cursor-pointer"
          >
            Add to basket
          </button>
        </div>
      </div>
    ));

    return <div className="grid grid-cols-3 gap-4">{productItems}</div>;
  }
}
const mapStateToProps = state => ({
  cartItems: state.cart.items
});
export default connect(mapStateToProps, { addToCart })(Products);
