import {
  DecrementLoading,
  IncrementLoading,
  setNewMessage,
  setRemoveMessage,
  setUpdateMessage
} from "./type";
import { firebaseApp } from "app/firebaseConfig";
import { orNull, orBoolean, orEmpty, orPath } from "utils/Selector";
export const onAddMessage = (body, dispatch) => {
  const profileUser = orPath(null, ["user", "providerData", 0], body);
  dispatch(IncrementLoading);
  return firebaseApp
    .database()
    .ref(`chats/`)
    .push({
      username: orNull("displayName", profileUser)
        ? orEmpty("displayName", profileUser)
        : orEmpty("email", profileUser),
      datetime: body.date_time,
      message: body.message
    })
    .then(async data => {
      dispatch(setNewMessage(data));
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
