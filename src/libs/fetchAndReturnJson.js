import { handleErrors } from "./handleErrors";

export const fetchAndReturnJson = (url, parameters, errorHandling) => {

  return fetch(url, parameters)
    .then(res => {
      return handleErrors(res, url, errorHandling);
    })
    .then(res => {
      return res.json();
    })
    .catch(error => console.log(error)
    );
};
