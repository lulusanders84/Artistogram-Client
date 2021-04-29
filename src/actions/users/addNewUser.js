import { ApiEndpoints } from '../../libs/apiEndpoints';
import { setErrorMsg, setLoginData, loginUser, clearLoginData } from '../';



export const addNewUser = (newUser, history) => (dispatch, getState) => {
  dispatch(setLoginData(newUser));
  return ApiEndpoints.user(newUser).then(res => {
    let error;
    if (res.location !== undefined) {
      error = res.location + " " + res.message;
      dispatch(setErrorMsg(error));
    } else {
      const username = res;
      const password = getState().loginData.password;
      let user = { username, password, };
      dispatch(loginUser(user, history));
    }
  }).then(() => {
    dispatch(clearLoginData());
  });
};
