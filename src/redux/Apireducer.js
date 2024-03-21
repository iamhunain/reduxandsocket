// reducer.js
const initialState = {
    data: null,
    loading: true,
    error: null
  };
  
  const Apireducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DATA_REQUEST':
        console.log('run')
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'FETCH_DATA_SUCCESS':
        console.log('succes')
        console.log(action.payload);
        return {
          ...state,
          loading: false,
          data: action.payload
        };
      case 'FETCH_DATA_FAILURE':
        console.log('error')
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default Apireducer;
  