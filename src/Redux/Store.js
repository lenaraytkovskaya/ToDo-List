import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import NavBarReducer from "./NavBarReducer";
import ToDoListReducer from "./ToDoLostReducer";

let reducers= combineReducers(
    {
        navbar: NavBarReducer,
        taskList: ToDoListReducer
    });

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store=store;
export default store;