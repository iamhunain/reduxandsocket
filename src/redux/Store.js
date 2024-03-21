import { applyMiddleware, combineReducers, createStore } from "redux";
import reducer from './Reducer';
import Apireducer from './Apireducer';
import { thunk } from "redux-thunk";
const rootReducer = combineReducers({
    reducer: reducer,
    apireducer: Apireducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;