
export const handleErrors = (response, url, customErrorHandling) => {
  if (!response.ok) {
    const res = customErrorHandling(response)
    res.json()
      .then(res => {
        throw Error("For url: " + url + " " + res.error.message);
      });
  }
  return response;
};
