export const UPDATE_PROFILE = "updateProfile/UPDATE_PROFILE";
export const INCREMENT_LOADING = "updateProfile/INCREMENT_LOADING";
export const DECREMENT_LOADING = "updateProfile/DECREMENT_LOADING";

export const setUpdateProfile = payload => {
  return {
    payload,
    type: UPDATE_PROFILE
  };
};

export const IncrementLoading = {
  payload: 1,
  type: INCREMENT_LOADING
};

export const DecrementLoading = {
  payload: 1,
  type: DECREMENT_LOADING
};
