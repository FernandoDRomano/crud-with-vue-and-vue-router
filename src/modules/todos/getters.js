export function done(state){
    return state.todos.filter(todo => todo.status)
}

export function incomplete(state){
    return state.todos.filter(todo => !todo.status)
}