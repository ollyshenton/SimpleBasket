import React from "react";
import Basket from "../Basket";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

describe("Basket", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      myState: { title: "Jungle Art Print Unframed", count: 2 }
    });
  });

  component = renderer.create(
    <Provider store={store}>
      <Basket />
    </Provider>
  );

  it("should render with given state from Redux store", () => {});
  // expect(wrapped).toMatchSnapshot();
});
