import {
  ADD_QUANTITY,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SUB_QUANTITY,
} from "./actions";

const initialState = {
  items: [],
  totalAmount: 0,
  quantityAll: 0,
  quantity: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.product],
        totalAmount: state.totalAmount + action.totalAmount,
        quantityAll: state.quantityAll + action.quantity,
        quantity: state.quantity + action.quantity,
      };
    case ADD_QUANTITY:
      return {
        ...state,
        items: [...state.items],
        totalAmount: state.totalAmount + action.productPrice,
        quantityAll: state.quantityAll,
        quantity: state.quantity + action.quantity,
      };
    case SUB_QUANTITY:
      return {
        ...state,
        items: [...state.items],
        totalAmount: state.totalAmount - action.productPrice,
        quantityAll: state.quantityAll,
        quantity: state.quantity - 1,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: [...state.items],
        totalAmount: state.totalAmount - action.productPrice,
        quantityAll: state.quantityAll - 1,
        quantity: state.quantity - 1,
      };
    default:
      return state;
  }
};

export default reducer;
