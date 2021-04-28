
export const handleErrors = (response, url) => {
  if (!response.ok) {
    response.json()
      .then(res => {
        throw Error("For url: " + url + " " + res.error.message);
      });
  }
  return response;
};
