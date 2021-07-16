<template>
    <div class="container mx-auto min-h-screen py-4 bg-gray-200">
        <transition name="router-view-transition" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'Main'
    }
</script>
