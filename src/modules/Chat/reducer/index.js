import * as authenAction from "./action";
import {
  INCREMENT_LOADING,
  DECREMENT_LOADING,
  ADD_NEW_MESSAGE,
  REMOVE_MESSAGE,
  UPDATE_MESSAGE
} from "./type";

const initialState = {
  loading: false,
  response: null,
  data: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_LOADING:
      return {
        ...state,
        loading: state.loading + action.payload > 0 ? true : false
      };
    case DECREMENT_LOADING:
      return {
        ...state,
        loading: state.loading - action.payload <= 0 ? false : true
      };
    case ADD_NEW_MESSAGE:
      return {
        ...state,
        response: action.payload
      };
    case REMOVE_MESSAGE:
      return {
        ...state,
        response: action.payload
      };
    case UPDATE_MESSAGE:
      return {
        ...state,
        response: action.payload
      };
    default:
      return state;
  }
};

export default {
  initialState,
  reducer,
  action: authenAction
};
