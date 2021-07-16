<template>
    <li class="flex items-center justify-between w-11/12 mx-auto py-2 border-b-2 border-gray-400 mb-1 px-2">
        <p class="text-base">{{todo.text}}</p>
        <div class="flex">
            <button @click="showViewUpdateTodo" class="flex items-center mr-1">
                <svg class="w-6 h-6 fill-current text-yellow-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
            </button>
            <button @click="_updateStatusTodo(todo)" class="flex items-center mr-1" v-if="todo.status">
                <svg class="w-6 h-6 fill-current text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
            </button>
            <button @click="_updateStatusTodo(todo)" class="flex items-center mr-1" v-else>
                <svg class="w-6 h-6 stroke-current text-purple-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <button @click="_deleteTodo(todo)" class="flex items-center">
                <svg class="w-6 h-6 fill-current text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>
    </li>
</template>

<script>
    import {mapActions, mapMutations} from 'vuex'

    export default {
        name: 'ItemTodo',
        props:{
            todo:{
                required: true,
                type: Object
            }
        },
        methods:{
            ...mapActions({
                _updateStatusTodo: 'todos/updateStatusTodo',
                _deleteTodo: 'todos/deleteTodo'
            }),
            ...mapMutations({
                _setTodo: 'todos/setTodo'
            }),
            showViewUpdateTodo(){
                this._setTodo(this.todo);

                this.$router.push({
                    name: 'update-todo',
                    params: {
                        id: this.todo.id
                    }
                })
            }
        }
    }
</script>
