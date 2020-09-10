import {
  DecrementLoading,
  IncrementLoading,
  setNewWord,
  setAllWord
} from "./type";
import { firebaseApp } from "app/firebaseConfig";

export const OnAddWord = (body, dispatch) => {
  dispatch(IncrementLoading);
  console.log(body);
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
