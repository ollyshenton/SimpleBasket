import {
  ADD_TO_CART,
  ADD_ONE,
  REMOVE_ONE,
  REMOVE_FROM_CART,
  REMOVE_ALL_CART
} from "./types";

export const addToCart = (items, product) => dispatch => {
  const cartItems = items.slice();
  let productAlreadyInCart = false;

  cartItems.forEach(cp => {
    if (cp.id === product.id) {
      cp.count += 1;
      productAlreadyInCart = true;
    }
  });

  if (!productAlreadyInCart) {
    cartItems.push({ ...product, count: 1 });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: ADD_TO_CART, payload: { cartItems } });
};

export const addOne = (items, product) => dispatch => {
  const cartItems = items.slice();

  cartItems.forEach(cp => {
    if (cp.id === product.id) {
      cp.count += 1;
    }
  });

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: ADD_ONE, payload: { cartItems } });
};

export const removeOne = (items, product) => dispatch => {
  const cartItems = items.slice();

  cartItems.forEach(cp => {
    if (cp.id === product.id) {
      if (cp.count < 2) {
        cp.count = 1;
      } else {
        cp.count -= 1;
      }
    }
  });

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: REMOVE_ONE, payload: { cartItems } });
};

export const removeFromCart = (items, product) => dispatch => {
  const cartItems = items.slice().filter(a => a.id !== product.id);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
};

export const removeAllCart = (items, product) => dispatch => {
  const cartItems = [];
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: REMOVE_ALL_CART, payload: { cartItems } });
};
