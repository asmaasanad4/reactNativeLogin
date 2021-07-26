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
  addButtton: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.product],
        totalAmount: state.totalAmount + action.totalAmount,
        quantityAll: state.quantityAll + action.quantityAll,
        addButtton: true,
      };
    case ADD_QUANTITY:
      return {
        ...state,
        items: [...state.items],
        totalAmount: state.totalAmount + action.productPrice,
        quantityAll: state.quantityAll,
        addButtton: true,
      };
    case SUB_QUANTITY:
      return {
        ...state,
        items: [...state.items],
        totalAmount: state.totalAmount - action.productPrice,
        quantityAll: state.quantityAll,
        addButtton: true,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: [...state.items],
        totalAmount: state.totalAmount - action.productPrice,
        quantityAll: state.quantityAll - 1,
        addButtton: false,
      };
    default:
      return state;
  }
};

export default reducer;
