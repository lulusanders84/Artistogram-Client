import { setErrorMsg } from "./actions";

export const setError = (message) => dispatch => {
  dispatch(setErrorMsg(message));
};
