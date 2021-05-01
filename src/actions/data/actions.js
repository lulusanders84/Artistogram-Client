export const SET_ERROR_MSG = 'SET_ERROR_MSG';
export const setErrorMsg = (message) => ({
  type: SET_ERROR_MSG,
  message,
})

export const SAVE_DESTINATION = 'SAVE_DESTINATION';
export const saveDestination = (destination) => ({
  type: SAVE_DESTINATION,
  destination,
})

export const SET_LOADING = 'SET_LOADING';
export const setLoading = (loading) => ({
  type: SET_LOADING,
  loading,
})
