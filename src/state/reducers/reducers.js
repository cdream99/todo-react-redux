import todoReducer from "./todoReducer";
import { combineReducers } from "redux";


const reducers = combineReducers({
    todoList: todoReducer,
})


export default reducers;