
export const handleErrors = async (response, url, customErrorHandling, customErrorHandlingParams) => {
  if (!response.ok) {
    const res = customErrorHandling 
      ? await customErrorHandling(response, customErrorHandlingParams)
      : response;
    const noJson = res;
    res.json()
      .then(res => {
        throw Error("For url: " + url + " " + res.error.message);
      })
      .catch(error => {
        console.error(error)
        return noJson
      })
  }
  return response;
};
