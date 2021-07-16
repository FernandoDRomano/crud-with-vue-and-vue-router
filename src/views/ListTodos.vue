<template>
    <div>
        <h2 class="text-3xl text-center font-bold mb-4">Listado de Tareas</h2>
        <div class="grid grid-cols-1 md:grid-cols-2">
            <list-todos :todos="_incomplete" title="Tareas Pendientes"></list-todos>
            <list-todos :todos="_complete" title="Tareas Finalizadas"></list-todos>
        </div>
    </div>
</template>

<script>
    import ListTodos from '@/components/todos/ListTodos.vue'
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: 'ListTodosPage',
        components:{
            ListTodos
        },
        mounted(){
            this._setTodos()
        },
        methods:{
            ...mapActions({
                _setTodos: 'todos/setTodos'
            })
        },
        computed:{
            ...mapGetters({
                _complete: 'todos/done',
                _incomplete: 'todos/incomplete'
            })
        }
    }
</script>
