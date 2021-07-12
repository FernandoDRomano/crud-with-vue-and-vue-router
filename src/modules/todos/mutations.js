export function setTodos(state, todos){
    state.todos = todos
}

export function setTodo(state, todo){
    state.selectedTodo = todo
}

// export function updateStateTodo(state, payload){
//     state.todos.find(t => t.id === payload.id).status = payload.status
// }

export function setError(state, payload){
    state.messageError = payload
    state.error = true
    state.todos = []
}