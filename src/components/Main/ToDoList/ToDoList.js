import React from 'react';
import style from './ToDoLost.module.css'
import {useParams} from "react-router-dom";
import modalStyle from './../../NavBar/Categories/Categories.module.css'
import plus from './../../../img/Group 1.png'
import edit from './../../../img/edit.svg'
import deleteImg from './../../../img/delete.svg'
import Modal from "../../../Modal/Modal";

const Task = (props) =>{
    const [ModalActive, SetModalActive] = React.useState(false)

    let UpdateTask = (values) => {
        props.EditTask(props.id, values);
    }

    return (
        <div className={style.taskItem}>
            <span className={style.spanTask} onClick={() => {props.ChangeTaskStatus(props.id)}}>
                <div className={style.taskContainer}>
                    {props.task}
                </div>
            </span>

            <div className={style.buttonContainer}>
                <button onClick={() => (props.DeleteTask(props.id))} className={style.noneBtn}>
                    <img src={deleteImg} alt=""/></button>
                <button className={style.noneBtn} onClick={() => (SetModalActive(true))}>
                    <img src={edit} alt=""/></button>
                 <Modal active={ModalActive} setActive={SetModalActive} mainText={'Изменить задачу'}
                        functionName={UpdateTask} id={props.id} />
            </div>
          </div>
    )
}

const ToDoList = (props) => {
    // const params = useParams();
    // let idCat = +params.idCat

    let DoneTasks = props.state.tasks.map(p => p.isDone === true &&
        <Task isDone={p.isDone} id={p.id} task={p.task} ChangeTaskStatus={props.ChangeTaskStatus}
              EditTask={props.EditTask} DeleteTask={props.DeleteTask}/>)
    let ActiveTasks = props.state.tasks.map(p => p.isDone === false &&
        <Task isDone={p.isDone} id={p.id} task={p.task} ChangeTaskStatus={props.ChangeTaskStatus}
              EditTask={props.EditTask} DeleteTask={props.DeleteTask}/>)

    const [ModalActive, SetModalActive] = React.useState(false)

    let AddTask = (values) => {
        props.AddNewTask(values);
    }

    return (
        <div className={style.container}>
            <div className={style.newTask}>
                <button className={modalStyle.addButtonForm + ' ' + style.newTaskBtn}
                        onClick={() => (SetModalActive(true))}><img src={plus} alt=""/>Новая задача
                </button>
                <Modal active={ModalActive} setActive={SetModalActive} mainText={'Добавить новую задачу'}
                       functionName={AddTask}/>
            </div>

            <div className={style.activeTasks}>
               Активные задачи
               <div className={style.taskContent}>
                   {ActiveTasks}
               </div>
            </div>
            <div className={style.doneTasks}>
                Завершенные задачи
                <div className={style.taskContent + ' ' + style.done}>{DoneTasks}</div>
            </div>
        </div>
    )
}
export default ToDoList