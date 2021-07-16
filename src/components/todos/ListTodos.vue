<template>
    <div>
        <div class="flex flex-col w-full md:w-11/12 lg:w-4/5 mx-auto bg-white border-2 border-gray-300 rounded-xl shadow-xl">
        <h3 class="text-center text-xl md:text-2xl font-light py-3">{{title}}</h3>
            <ul class="pb-2" v-if="todos.length">
                <transition-group name="scale">
                    <item-todo v-for="todo in todos" :key="todo.id" :todo="todo"></item-todo>
                </transition-group>
            </ul>
        </div>
    </div>
</template>

<script>
    import ItemTodo from './ItemTodo.vue'

    export default {
        name: 'ListTodos',
        components:{
            ItemTodo
        },
        props:{
            todos:{
                type: Array,
                required: true
            },
            title:{
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>