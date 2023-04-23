const todoListId_1 = '12rt-fg67'
const todoListId_2 = '03rt-fg67'

const todoLists = [
    {
        id: todoListId_1,
        title: 'What to learn',
        filter: 'all',
    },
    {
        id: todoListId_2,
        title: 'What to buy',
        filter: 'all',
    },
]

const tasks = {
    [todoListId_1]: [
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'CSS', isDone: true},
        {id: 3, title: 'JS/TS', isDone: false}
    ],
    [todoListId_2]: [
        {id: 1, title: 'Egg', isDone: true},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Bread', isDone: false}
    ],
}

console.log(tasks[todoListId_1])
console.log(tasks['12rt-fg67'])
console.log(tasks[todoLists[0].id])


const setTodoList = ([]) => {
}
const setTasks = ([]) => {
}
const addTodoList = (title) => {
    const todoList = '1ps-12ds'
    const newTodo = {
        id: todoList,
        title: title,
        filter: 'all'
    }
    setTodoList([...todoList, newTodo])
    setTasks([...newTodo, setTodoList])
}


const changeStatus = (taskId, newStatus) => {

    //  тут подробно:
    // const todoListTasksForUpdate = tasks[todoListId_1]
    // const updatedTasksForTodoList = todoListTasksForUpdate.map(t => t.id === taskId ? {...t, isDone: newStatus} : t)
    // const copyTasks = {...tasks}
    // copyTasks[todoListId_1] = updatedTasksForTodoList
    // setTasks(copyTasks)


    // // краткая запись:
    setTasks({
        ...tasks,
        [todoListId_1]: tasks[todoListId_1].map(t => t.id === taskId ? {...t, isDone: newStatus} : t)
    })
}

const removeTask = (taskId, todoListId) => {
    const updateTasks = tasks[todoListId]
        .filter(t => t.id !== taskId)
    setTasks({
        ...tasks,
        [todoListId]: updateTasks
    })
}