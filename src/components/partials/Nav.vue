<template>
    <nav class="bg-blue-700 flex items-center justify-center">
        <router-link 
            class="px-5 text-white font-medium flex items-center py-2 hover:bg-green-300 hover:text-black transition-all duration-200 ease-in-out" 
            :to="{name: 'list-todos'}">
                <svg class="h-5 w-5 fill-current mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
                Listado de Tareas
        </router-link> 
        <router-link 
            class="px-5 text-white font-medium flex items-center py-2 hover:bg-green-300 hover:text-black transition-all duration-200 ease-in-out" 
            :to="{name: 'create-todo'}">
                <svg class="w-5 h-5 fill-current mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
                Crear Tarea
        </router-link>
    </nav>
</template>

<script>
    export default {
        name: 'Nav'
    }
</script>
