import { handleErrors } from "./handleErrors";

export const fetchAndReturnJson = (url, parameters) => {
  return fetch(url, parameters)
    .then(res => {
      return handleErrors(res, url);
    })
    .then(res => {
      return res.json();
    })
    .catch(error => console.log(error)
    );
};
