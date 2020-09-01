import {applyMiddleware, combineReducers, createStore} from "redux";
import mainPageReducer from "./mainPageReduer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    mainPage: mainPageReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store;
