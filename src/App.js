import React from "react";
import Products from "./components/Products";
import Basket from "./components/Basket";
import { Provider } from "react-redux";
import store from "./store";
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container mx-auto px-4">
          <Basket />

          <div className="min-h-screen bg-gray-10 py-6 flex flex-col justify-center sm:py-12">
            <Products />
          </div>
        </div>
      </Provider>
    );
  }
}
export default App;
