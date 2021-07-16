<template>
    <div>
        <h2 class="text-3xl text-center font-bold mb-4">Editar Tarea</h2>
        <form-todo :todo="todo" button="Editar Tarea" @processForm="processForm"></form-todo>
    </div>
</template>

<script>
    import FormTodo from '@/components/todos/FormTodo.vue'
    import {mapActions, mapState} from 'vuex'
    export default {
        name: 'UpdateTodo',
        data(){
            return{
                todo: null
            }
        },
        async mounted(){
            if (!this.selectedTodo) {
               await this._getTodo(this.$route.params.id)
            }
            
            this.todo = this.selectedTodo
        },
        computed:{
            ...mapState('todos', ['selectedTodo'])
        },
        components:{
            FormTodo
        },
        methods:{
            ...mapActions({
                _updateTodo: 'todos/updateTodo',
                _getTodo: 'todos/getTodo'
            }),
            processForm(todo){
                this._updateTodo(todo)
                this.$router.push({
                    name: 'list-todos'
                })
            },
        }
    }
</script>
