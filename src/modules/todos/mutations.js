const localstorage = window.localStorage

export function setTodos(state, todos){
    state.todos = todos
}

export function setTodo(state, todo){
    state.selectedTodo = todo
}


export function addTodo(state, todo){
    state.todos.push(todo)
    localstorage.setItem('todos', JSON.stringify(state.todos))
}

export function updateTodo(state, todo){
    const index = state.todos.findIndex(e => e.id === todo.id)
    state.todos[index] = todo

    localstorage.setItem('todos', JSON.stringify(state.todos))
}

export function deleteTodo(state, todo){
    state.todos = state.todos.filter(e => e.id !== todo.id)

    localstorage.setItem('todos', JSON.stringify(state.todos))
}

export function updateStatusTodo(state, payload){
    state.todos.find(t => t.id === payload.id).status = !payload.status

    localstorage.setItem('todos', JSON.stringify(state.todos))
}

export function setError(state, payload){
    state.messageError = payload
    state.error = true
    state.todos = []
}