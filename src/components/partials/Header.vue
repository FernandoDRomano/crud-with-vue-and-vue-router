<template>
    <div>
        <div class="bg-blue-500 py-5 flex items-center justify-center">
            <img alt="Vue logo" src="../../assets/logo.png" class="h-12">
            <h1 class="text-center text-white text-2xl font-light">Crud con VueRouter - Vuex y JsonServer</h1>
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
