import * as authenAction from "./action";
import {
  REGISTER,
  LOGIN,
  USER,
  INCREMENT_LOADING,
  DECREMENT_LOADING
} from "./type";

const initialState = {
  loading: 0,
  response: null,
  user: null
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
    case REGISTER:
      return {
        ...state,
        response: action.payload
      };
    case LOGIN:
      return {
        ...state,
        response: action.payload
      };
    case USER:
      return {
        ...state,
        response: action.payload,
        user: action.payload
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
