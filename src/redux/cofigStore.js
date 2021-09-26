import { combineReducers, createStore } from "redux"
import word from "../redux/modules/word"

const rootReducer = combineReducers({ word })

const store = createStore(rootReducer)

export default store
