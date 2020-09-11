import {
  DecrementLoading,
  IncrementLoading,
  setNewNote,
  setRemoveNote,
  setUpdateNote
} from "./type";
import { firebaseApp } from "app/firebaseConfig";
// import { orNull, orEmpty, orPath } from "utils/Selector";
export const onAddNote = (body, dispatch) => {
  console.log(body);
  dispatch(IncrementLoading);
  return firebaseApp
    .database()
    .ref(`notes/`)
    .child(`${body.isUser}`)
    .push({
      title: body.title,
      note: body.note,
      date_time: body.date_time
    })
    .then(async data => {
      dispatch(setNewNote(data));
      return dispatch(DecrementLoading);
    })
    .catch(error => {
      console.log(error);
      dispatch(DecrementLoading);
    });
};

export const OnRemoveNote = (body, dispatch) => {
  dispatch(IncrementLoading);
  return firebaseApp
    .database()
    .ref(`notes/`)
    .child(`${body.isUser}/${body.key}`)
    .remove()
    .then(() => {
      const data = { success: true };
      dispatch(setRemoveNote(data));
      return dispatch(DecrementLoading);
    })
    .catch(error => {
      console.log(error);
      dispatch(DecrementLoading);
    });
};

export const OnUpdateNote = (body, dispatch) => {
  dispatch(IncrementLoading);
  var updates = {};
  updates[`notes/${body.isUser}/${body.key}`] = {
    title: body.title,
    note: body.note,
    date_time: body.date_time
  };
  return firebaseApp
    .database()
    .ref()
    .update(updates)
    .then(() => {
      const data = { success: true };
      dispatch(setUpdateNote(data));
      return dispatch(DecrementLoading);
    })
    .catch(error => {
      console.log(error);
      dispatch(DecrementLoading);
    });
};
