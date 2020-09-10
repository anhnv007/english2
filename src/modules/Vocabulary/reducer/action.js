import {
  DecrementLoading,
  IncrementLoading,
  setNewWord,
  setAllWord,
  setRemoveWord,
  setUpdateWord
} from "./type";
import { firebaseApp } from "app/firebaseConfig";

export const OnAddWord = (body, dispatch) => {
  dispatch(IncrementLoading);
  return firebaseApp
    .database()
    .ref(`word/`)
    .child(`${body.isUser}`)
    .push({
      eng_word: body.word,
      vn_mean: body.mean,
      isImportant: body.is_important
    })
    .then(async data => {
      dispatch(setNewWord(data));
      return dispatch(DecrementLoading);
    })
    .catch(error => {
      dispatch(DecrementLoading);
    });
};

export const OnRemoveWord = (body, dispatch) => {
  dispatch(IncrementLoading);
  return firebaseApp
    .database()
    .ref(`word/`)
    .child(`${body.isUser}/${body.key}`)
    .remove()
    .then(() => {
      const data = { success: true };
      dispatch(setRemoveWord(data));
      return dispatch(DecrementLoading);
    })
    .catch(error => {
      dispatch(DecrementLoading);
    });
};

export const OnUpdateWord = (body, dispatch) => {
  dispatch(IncrementLoading);
  var updates = {};
  updates[`word/${body.isUser}/${body.key}`] = {
    eng_word: body.word,
    vn_mean: body.mean,
    isImportant: body.is_important
  };
  return firebaseApp
    .database()
    .ref()
    .update(updates)
    .then(() => {
      const data = { success: true };
      dispatch(setUpdateWord(data));
      return dispatch(DecrementLoading);
    })
    .catch(error => {
      dispatch(DecrementLoading);
    });
};
