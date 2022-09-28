import ToDoListReducer, {
    AddNewTask,
    ChangeTaskStatus,
    DeleteTask, EditTask
} from "../Redux/ToDoLostReducer";

it('change status of task', function () {
    let action = ChangeTaskStatus(3)
    let state = {
        idCat: 0,
        tasks: [
            {id: 0, task: 'qwe', isDone: true},
            {id: 2, task: 'asd', isDone: true},
            {id: 3, task: 'zxc', isDone: false}]
    }
    let newState = ToDoListReducer(state, action)

    expect(newState.tasks[2].isDone).toBe(true)
});

it('add new task', function () {
    let action = AddNewTask('zxcvnbfsgb')
    let state = {
        idCat: 0,
        tasks: [
            {id: 0, task: 'qwe', isDone: true},
            {id: 2, task: 'asd', isDone: true},
            {id: 3, task: 'zxc', isDone: false}]
    }
    let newState = ToDoListReducer(state, action)

    expect(newState.tasks.length).toBe(4)
});
it('delete task', function () {
    let action = DeleteTask(1)
    let state = {
        idCat: 0,
        tasks: [
            {id: 0, task: 'qwe', isDone: true},
            {id: 1, task: 'asd', isDone: true},
            {id: 2, task: 'zxc', isDone: false}]
    }
    let newState = ToDoListReducer(state, action)

    expect(newState.tasks.length).toBe(2)
});

it('update task', function () {
    let action = EditTask(0, 'poi')
    let state = {
        idCat: 0,
        tasks: [
            {id: 0, task: 'qwe', isDone: true},
            {id: 1, task: 'asd', isDone: true},
            {id: 2, task: 'zxc', isDone: false}]
    }
    let newState = ToDoListReducer(state, action)

    expect(newState.tasks[0].task).toBe('poi')
});