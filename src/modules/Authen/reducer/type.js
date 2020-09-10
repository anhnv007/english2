export const REGISTER = "authen/REGISTER";
export const LOGIN = "authen/LOGIN";
export const USER = "authen/USER";
export const INCREMENT_LOADING = "authen/INCREMENT_LOADING";
export const DECREMENT_LOADING = "authen/DECREMENT_LOADING";

export const setUser = payload => {
  return {
    payload,
    type: USER
  };
};

export const setRegister = payload => {
  return {
    payload,
    type: REGISTER
  };
};

export const setLogin = payload => {
  return {
    payload,
    type: LOGIN
  };
};

export const IncrementLoading = {
  payload: 1,
  type: INCREMENT_LOADING
};

export const DecrementLoading = {
  payload: 1,
  type: DECREMENT_LOADING
};
