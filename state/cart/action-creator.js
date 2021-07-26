import {
  ADD_QUANTITY,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SUB_QUANTITY,
} from "./actions";

export const addToCart = (product, totalAmount, quantityAll) => {
  return {
    type: ADD_TO_CART,
    product,
    totalAmount,
    quantityAll,
  };
};

export const remveFromCart = (productPrice) => {
  return {
    type: REMOVE_FROM_CART,
    productPrice,
  };
};

export const addQuantity = (productPrice) => {
  return {
    type: ADD_QUANTITY,
    productPrice,
  };
};

export const subtractQuantity = (productPrice) => {
  return {
    type: SUB_QUANTITY,
    productPrice,
  };
};
