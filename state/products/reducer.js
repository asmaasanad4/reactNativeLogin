import { SET } from "./action";

const initialState = {
  availableProducts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET:
      return {
        ...state,
        availableProducts: action.products,
      };
    default:
      return state;
  }
};

export default reducer;
