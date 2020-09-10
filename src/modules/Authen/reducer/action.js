import {
  DecrementLoading,
  IncrementLoading,
  setRegister,
  setUser
} from "./type";
import { firebaseApp } from "app/firebaseConfig";
import { Storage } from "utils";
// export const OnLoginUser = (username, password) => async dispatch => {
//   try {
//     firebaseApp
//       .auth()
//       .signInWithEmailAndPassword(username, password)
//       .then(res => {
//         dispatch(onSetUser(res.user));
//         dispatch(setOnLogin(true));
//       })
//       .catch(function(error) {
//         console.log("error", error);
//       });
//   } catch (error) {}
//   dispatch(setOnLogin(false));
// };

export const OnRegisterUser = (body, dispatch) => {
  dispatch(IncrementLoading);

  return firebaseApp
    .auth()
    .createUserWithEmailAndPassword(body.username, body.password)
    .then(async response => {
      dispatch(setRegister(response));
      return dispatch(DecrementLoading);
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
      dispatch(DecrementLoading);
    });
};
