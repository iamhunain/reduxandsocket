import { combineReducers, createStore } from "redux";
import reducer from './Reducer'
const rootreducer = combineReducers({ reducer })
const store = createStore(rootreducer)

export default store;