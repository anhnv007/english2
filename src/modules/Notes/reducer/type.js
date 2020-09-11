export const ADD_NEW_NOTE = "notes/ADD_NEW_NOTE";
export const REMOVE_NOTE = "notes/REMOVE_NOTE";
export const UPDATE_NOTE = "notes/UPDATE_NOTE";
export const INCREMENT_LOADING = "notes/INCREMENT_LOADING";
export const DECREMENT_LOADING = "notes/DECREMENT_LOADING";

export const setNewNote = payload => {
  return {
    payload,
    type: ADD_NEW_NOTE
  };
};

export const setRemoveNote = payload => {
  return {
    payload,
    type: REMOVE_NOTE
  };
};

export const setUpdateNote = payload => {
  return {
    payload,
    type: UPDATE_NOTE
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
