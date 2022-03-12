import Vue from 'vue'

const localstorage = window.localStorage

export async function setTodos({commit}){
    if(!localstorage.getItem('todos')){
        localstorage.setItem('todos', JSON.stringify([]))
    }
        
    commit( 'setTodos', JSON.parse(localstorage.getItem('todos')) )
}

export async function getTodo({commit}, payload){
    // try {
    //     const {data} = await Vue.axios({
    //         method: 'GET',
    //         url: `todos/${payload}`
    //     })

    //     commit('setTodo', data);
    // } catch (e) {
    //     commit('setError', e.message)
    // }
    commit('setTodo', payload)
}

export async function addTodo({commit, dispatch}, payload){
    const todo = {
        id: Date.now(),
        text: payload.text,
        status: false
    }

    commit('addTodo', todo)
}

export async function deleteTodo({commit, dispatch}, payload){
    commit('deleteTodo', payload)
}

export async function updateTodo({commit, dispatch}, payload){
    commit('updateTodo', payload)
}

export async function updateStatusTodo({commit, dispatch}, payload){
    commit('updateStatusTodo', payload)
}