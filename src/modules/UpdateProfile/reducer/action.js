import { DecrementLoading, IncrementLoading, setUpdateProfile } from "./type";
import { firebaseApp } from "app/firebaseConfig";
import { Storage } from "utils";

export const onUpdateProfile = (body, dispatch) => {
  dispatch(IncrementLoading);
  var user = firebaseApp.auth().currentUser;
  user
    .updateProfile({
      email: body.email,
      displayName: body.username,
      photoURL: body.avatar_url
    })
    .then(async response => {
      console.log(response);
      await Storage.reset();
      await Storage.set("english.user", user);
      dispatch(setUpdateProfile(user));
      return dispatch(DecrementLoading);
    })
    .catch(function(error) {
      console.log(error);
      dispatch(DecrementLoading);
    });
};
