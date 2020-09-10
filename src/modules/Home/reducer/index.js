import * as authenAction from "./action";
import {
  ADD_NEW_WORD,
  INCREMENT_LOADING,
  DECREMENT_LOADING,
  GET_ALL_WORD
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
    case ADD_NEW_WORD:
      return {
        ...state,
        response: action.payload
      };
    case GET_ALL_WORD:
      return {
        ...state,
        data: action.payload
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
