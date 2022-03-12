<template>
    <div class="text-center">
        <h2 class="text-8xl font-light   mt-6 mb-4">Error 404</h2>
        <p class="text-lg font-light">
            Esta página no existe. Intenta volver al <router-link :to="{ name: 'Home' }">Inicio</router-link>
        </p>
    </div>
</template>

<script>
    export default{
       name: "Error-404" 
    }
</script>
