import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import reducer from "./login/reducer";
import {thunk }from "redux-thunk";
import reducer from "./reducer";

const rootReducer = combineReducers({
  CropDatas: reducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
