import {applyMiddleware, combineReducers, createStore} from "redux";
import postReducer from "./Redusers/post-reducer";



let reducers = combineReducers({
    postReducer:postReducer
})

export type RootState = ReturnType<typeof reducers>

export default reducers
