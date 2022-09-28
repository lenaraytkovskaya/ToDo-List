import React from 'react';
import style from './Main.module.css'
import CategoriesContainer from "./ToDoList/ToDoListContainer";

const Main = (props) => {
    return(
        <div className={style.container}>
            <CategoriesContainer/>
        </div>
    )
}
export default Main