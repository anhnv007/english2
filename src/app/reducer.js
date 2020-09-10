export const INCREMENT_LOADING = "app/INCREMENT_LOADING";
export const DECREMENT_LOADING = "app/DECREMENT_LOADING";

export const IncrementLoading = {
  payload: 1,
  type: INCREMENT_LOADING
};

export const DecrementLoading = {
  payload: 1,
  type: DECREMENT_LOADING
};

const initialState = {
  counter: 0,
  message: null,
  code: null,
  type: "error",
  actionName: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_LOADING:
      return {
        counter: state.counter + action.payload
      };
    case DECREMENT_LOADING:
      return {
        counter:
          state.counter - action.payload < 0
            ? 0
            : state.counter - action.payload
      };
    default:
      return state;
  }
};

export default {
  initialState,
  reducer
};
