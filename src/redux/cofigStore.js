import { combineReducers, createStore, applyMiddleware, compose } from "redux"
import word from "../redux/modules/word"
import thunk from "redux-thunk"

// export const history = createBrowserHistory()

const middlewares = [thunk]

const enhancer = applyMiddleware(...middlewares)

const rootReducer = combineReducers({ word })

const store = createStore(rootReducer, enhancer)

export default store
