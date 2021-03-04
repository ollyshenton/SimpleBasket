import React from "react";
import "./App.css";
import Products from "./components/Products";
import Basket from "./components/Basket";
import { Provider } from "react-redux";
import store from "./store";
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <h1>Shopping Cart Application</h1>
          <hr />
          <div className="row">
            <div className="col-md-8">
              <hr />
              <Products />
            </div>
            <div className="col-md-4">
              <Basket />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}
export default App;
