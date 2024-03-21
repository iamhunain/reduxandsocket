import fetchDataFromApi from './Api';
export const printConsole = (value) => ({
    type: 'console',
    payload: value
});

// action.js
// actions.js

export const fetchDataRequest = () => ({
  type: 'FETCH_DATA_REQUEST'
});

export const fetchDataSuccess = (data) => ({
  type: 'FETCH_DATA_SUCCESS',
  payload: data
});

export const fetchDataFailure = (error) => ({
  type: 'FETCH_DATA_FAILURE',
  payload: error
});

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const data = await fetchDataFromApi(); // Call the API function
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};

  