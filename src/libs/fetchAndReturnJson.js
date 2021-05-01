import { handleErrors } from "./handleErrors";

export const fetchAndReturnJson = (url, parameters, errorHandling, errorHandlingParams) => {

  return fetch(url, parameters)
    .then(res => {
      return handleErrors(res, url, errorHandling, errorHandlingParams);
    })
    .then(res => {
      return res.json();
    })
    .catch(error => console.log(error)
    );
};
