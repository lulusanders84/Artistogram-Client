export class AuthToken {

  static save(authToken){
    const authTokenStr = JSON.stringify(authToken);
    localStorage.setItem('authToken', authTokenStr);
  }

  static get() {
    return JSON.parse(localStorage.getItem('authToken'));
  }

}
 