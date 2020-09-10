export const GET_ALL_WORD = "home/GET_ALL_WORD";
export const ADD_NEW_WORD = "home/ADD_NEW_WORD";
export const INCREMENT_LOADING = "home/INCREMENT_LOADING";
export const DECREMENT_LOADING = "home/DECREMENT_LOADING";

export const setAllWord = payload => {
  return {
    payload,
    type: GET_ALL_WORD
  };
};

export const setNewWord = payload => {
  return {
    payload,
    type: ADD_NEW_WORD
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
