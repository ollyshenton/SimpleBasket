import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/cartActions";
import data from "../data/product.json";

class Products extends Component {
  componentDidMount() {
    // this.props.fetchProducts();
  }
  render() {
    const { cartItems } = this.props;
    const productItems = data.map(product => (
      <div className="col-md-4 my-5" key={product.id}>
        <div className="thumbnail text-center">
          <a
            href={`#${product.id}`}
            onClick={e => this.props.addToCart(this.props.cartItems, product)}
          >
            <img src={`products/${product.sku}_2.jpg`} alt={product.title} />
            <p>{product.title}</p>
          </a>
          <b>{product.price}</b>
          <button
            className="btn btn-primary"
            onClick={e => this.props.addToCart(cartItems, product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    ));

    return <div className="row">{productItems}</div>;
  }
}
const mapStateToProps = state => ({
  cartItems: state.cart.items
});
export default connect(mapStateToProps, { addToCart })(Products);
