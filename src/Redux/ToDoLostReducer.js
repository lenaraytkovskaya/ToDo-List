const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS'
const ADD_NEW_TASK = 'ADD_NEW_TASK'
const DELETE_TASK = 'DELETE_TASK'
const EDIT_TASK = 'EDIT_TASK'

let initialState =
    {
        idCat: 0,
        tasks: [
            {id: 1, task: 'qwe', isDone: false},
            {id: 2, task: 'asd', isDone: false},
            {id: 3, task: 'zxc', isDone: true}]
    }


const ToDoListReducer = (state = initialState, action) => {
    switch (action.type){
        case CHANGE_TASK_STATUS:
            return {
                ...state,
                tasks: state.tasks.map(t => t.id === action.id ? {...t, isDone: !t.isDone} : t)
            }
        case ADD_NEW_TASK:
            return{
                ...state,
                newTaskText: '',
                tasks: [...state.tasks, {id: 4, task: action.newTaskText, isDone: false}]
            }
        case DELETE_TASK:
            return{
                ...state,
                tasks: state.tasks.filter(t => t.id !== action.id)
            }
        case EDIT_TASK:{
            return{
                ...state,
                tasks: state.tasks.map(t => t.id === action.id ? {...t, task: action.updateText} : t)
            }
        }
        default:
            return {...state}
    }
    return state
}

export const ChangeTaskStatus = (id) =>({type: CHANGE_TASK_STATUS, id})
export const AddNewTask = (newTaskText) => ({type: ADD_NEW_TASK, newTaskText})
export const DeleteTask = (id) => ({type: DELETE_TASK, id})
export const EditTask = (id, updateText) => ({type: EDIT_TASK, id, updateText})


export default ToDoListReducer;