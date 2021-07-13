import { LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT, TRY_LOGIN } from "./action";

const initialState = {
  loading: false,
  loggedIn: false,
  email: "",
  password: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TRY_LOGIN:
      return {
        ...state,
        loading: true,
        email: action.payload.email,
        password: action.payload.password,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        loggedIn: false,
      };
    case LOGOUT:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        email: "",
        password: "",
      };
    default:
      return state;
  }
};

export default reducer;
