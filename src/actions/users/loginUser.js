import { ApiEndpoints } from '../../libs/apiEndpoints';
import { AuthToken } from '../../libs/authToken';
import { setUser, setErrorMsg } from '../';



export const loginUser = (user, history) => (dispatch, getState) => {
  return ApiEndpoints.login(user, 
    res => {
      if (res.statusText === "Unauthorized") {
        dispatch(setErrorMsg("Incorrect username or password"));
        return res;
      } else {
        return res;
      }}
    ).then(data => {
      if (data && data.authToken !== undefined) {
        AuthToken.save(data.authToken);
        dispatch(setUser(data.user));
        history.push(getState().destination);
      }
    });
};
