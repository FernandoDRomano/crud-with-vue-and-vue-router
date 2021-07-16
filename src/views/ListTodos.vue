<template>
    <div>
        <h2 class="text-2xl sm:text-3xl text-center font-bold mb-4">Listado de Tareas</h2>
        <div class="grid grid-cols-1 mx-3 sm:mx-6 md:mx-0 gap-3 md:gap-0 md:grid-cols-2">
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
