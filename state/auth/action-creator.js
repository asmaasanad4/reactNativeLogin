import { LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT, TRY_LOGIN } from "./action";

export const tryLogin = (email, password) => {
  return {
    type: TRY_LOGIN,
    payload: {
      email,
      password,
    },
  };
};

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

export const loginfaild = () => {
  return {
    type: LOGIN_FAILED,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
