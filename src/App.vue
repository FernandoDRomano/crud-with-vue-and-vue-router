<template>
  <div id="app">
    <layout>
      <template v-slot:header>
        <header-vue></header-vue>
      </template>
      <template v-slot:main>
        <main-vue></main-vue>
      </template>
      <template v-slot:footer>
        <footer-vue></footer-vue>
      </template>
    </layout>
  </div>
</template>

<script>
  import Layout from './components/layout/Layout.vue'
  import HeaderVue from './components/partials/Header.vue'
  import FooterVue from './components/partials/Footer.vue'
  import MainVue from './components/partials/Main.vue'

  export default {
    name: 'App',
    components:{
      Layout,
      HeaderVue,
      FooterVue,
      MainVue
    }
  }
</script>
