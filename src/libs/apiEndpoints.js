import { AuthToken } from "./authToken";
import { fetchAndReturnJson } from "./fetchAndReturnJson";

const { API_BASE_URL } = require('../config');

export class ApiEndpoints {
  static methodParams = {
    POST: (body) => ({
      method: "POST",
      headers: {
              "Content-Type": "application/json",
          },
      body: JSON.stringify(body)
    }),
    PUT: (body) => ({
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${AuthToken.get()}`
      },
      body: JSON.stringify(body)
    })
  }
  static apiCall(method, endpoint, body, callback) {
    return fetchAndReturnJson(
      `${API_BASE_URL}/${endpoint}`, 
      ApiEndpoints.methodParams[method](body),
      callback
    )
  }

  static users(user) {
    return ApiEndpoints.apiCall("POST", "users", user)
  }

  static login(user, errorHandling) {
    return ApiEndpoints.apiCall("POST", "login", user, errorHandling)
  }

  static artistograms(data, action, username) {
    return ApiEndpoints.apiCall("PUT", `artistograms/${action}/${username}`, data)
  }
}