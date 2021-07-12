import Vue from 'vue'

export async function setTodos({commit}){
    try {
        const {data} = await Vue.axios({
            url: '/todos',
            method: 'GET'
        })
    
        commit('setTodos', data)
    } catch (e) {
        commit('setError', e.message)
    }
}

export async function addTodo({commit}, payload){
    try { 
        await Vue.axios({
            url: '/todos',
            method: 'POST',
            data:{
                id: Date.now(),
                text: payload.text,
                status: false
            }
        })
    } catch (e) {
        commit('setError', e.message)
    }
}

export async function deleteTodo({commit, dispatch}, payload){
    try { 
        await Vue.axios({
            url: `/todos/${payload.id}`,
            method: 'DELETE',
        })

        dispatch('setTodos')
    } catch (e) {
        commit('setError', e.message)
    }
}

export async function updateTodo({commit, dispatch}, payload){
    try {
        await Vue.axios({
            url: `/todos/${payload.id}`,
            method: 'PATCH',
            data:{
                text: payload.text,
            }            
        })

        dispatch('setTodos')
    } catch (e) {
        commit('setError', e.message)
    }
}

export async function updateStatusTodo({commit, dispatch}, payload){
    try {
        await Vue.axios({
            url: `/todos/${payload.id}`,
            method: 'PATCH',
            data:{
                status: payload.status,
            }            
        })

        dispatch('setTodos')
    } catch (e) {
        commit('setError', e.message)
    }
}