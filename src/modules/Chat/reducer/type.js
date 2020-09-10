export const ADD_NEW_MESSAGE = "chat/ADD_NEW_MESSAGE";
export const REMOVE_MESSAGE = "chat/REMOVE_MESSAGE";
export const UPDATE_MESSAGE = "chat/UPDATE_MESSAGE";
export const INCREMENT_LOADING = "chat/INCREMENT_LOADING";
export const DECREMENT_LOADING = "chat/DECREMENT_LOADING";

export const setNewMessage = payload => {
  return {
    payload,
    type: ADD_NEW_MESSAGE
  };
};

export const setRemoveMessage = payload => {
  return {
    payload,
    type: REMOVE_MESSAGE
  };
};

export const setUpdateMessage = payload => {
  return {
    payload,
    type: UPDATE_MESSAGE
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
