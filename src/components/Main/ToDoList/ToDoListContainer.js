import {connect} from "react-redux";
import React from "react";
import ToDoList from "./ToDoList";
import {AddNewTask, ChangeTaskStatus, DeleteTask, EditTask} from "../../../Redux/ToDoLostReducer";

let mapStateToProps = (state) => {
    return {
        state: state.taskList
    }
}

let CategoriesContainer = connect(mapStateToProps, {ChangeTaskStatus, AddNewTask, DeleteTask, EditTask})(ToDoList)
export default CategoriesContainer