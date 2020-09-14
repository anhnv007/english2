import {
  DecrementLoading,
  IncrementLoading,
  setRegister,
  setUser
} from "./type";
import { firebaseApp } from "app/firebaseConfig";
import { Storage } from "utils";
import md5 from "md5";

export const OnRegisterUser = (body, dispatch) => {
  dispatch(IncrementLoading);

  return firebaseApp
    .auth()
    .createUserWithEmailAndPassword(body.email, body.password)
    .then(async response => {
      console.log(response);
      response.user
        .updateProfile({
          displayName: body.username,
          photoURL: `http://gravatar.com/avatar/${md5(
            response.user.email
          )}?d=identicon`
        })
        .then(() => {
          dispatch(setRegister(response));
          return dispatch(DecrementLoading);
        });
    })
    .catch(error => {
      console.log(error);
      dispatch(DecrementLoading);
    });
};

export const OnLogin = (body, dispatch) => {
  dispatch(IncrementLoading);

  return firebaseApp
    .auth()
    .signInWithEmailAndPassword(body.username, body.password)
    .then(async response => {
      dispatch(setRegister(response));
      if (response && response.user) {
        await Storage.reset();
        await Storage.set("english.user", response.user);
        dispatch(setUser(response.user));
      }
      return dispatch(DecrementLoading);
    })
    .catch(error => {
      console.log(error);
      dispatch(DecrementLoading);
    });
};
