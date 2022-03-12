<template>
    <div>
        <div class="bg-blue-500 py-5 flex items-center px-3 md:px-0 justify-center">
            <img alt="Vue logo" src="../../assets/logo.png" class="h-12">
            <h1 class="text-center text-white text-lg sm:text-2xl font-light">CRUD Vue</h1>
        </div>
        <nav-vue></nav-vue>
    </div>
</template>

<script>
    import NavVue from './Nav.vue'
    export default {
        name: 'Header',
        components:{
            NavVue
        }
    }
</script>
