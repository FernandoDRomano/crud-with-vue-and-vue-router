<template>
    <div>
        <h2 class="text-xl md:text-2xl lg:text-3xl text-center font-bold mb-2 md:mb-4">Crear Nueva Tarea</h2>
        <form-todo :todo="todo" button="Crear Tarea" @processForm="processForm"></form-todo>
    </div>
</template>

<script>
    import FormTodo from '@/components/todos/FormTodo.vue'
    import {mapActions} from 'vuex'
    export default {
        name: 'CreateTodo',
        data(){
            return{
                todo:{
                    text: ''
                }
            }
        },
        components:{
            FormTodo
        },
        methods:{
            ...mapActions({
                _addTodo: 'todos/addTodo'
            }),
            processForm(todo){
                this._addTodo(todo)
                this.$router.push({
                    name: 'list-todos'
                })
            }
        }
    }
</script>
