export const GET_ALL_WORD = "vocabulary/GET_ALL_WORD";
export const ADD_NEW_WORD = "vocabulary/ADD_NEW_WORD";
export const REMOVE_WORD = "vocabulary/REMOVE_WORD";
export const UPDATE_WORD = "vocabulary/UPDATE_WORD";
export const INCREMENT_LOADING = "vocabulary/INCREMENT_LOADING";
export const DECREMENT_LOADING = "vocabulary/DECREMENT_LOADING";

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

export const setRemoveWord = payload => {
  return {
    payload,
    type: REMOVE_WORD
  };
};

export const setUpdateWord = payload => {
  return {
    payload,
    type: UPDATE_WORD
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
