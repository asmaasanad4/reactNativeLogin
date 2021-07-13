import { SET } from "./action";

export const setData = (products) => {
  return {
    type: SET,
    products,
  };
};
