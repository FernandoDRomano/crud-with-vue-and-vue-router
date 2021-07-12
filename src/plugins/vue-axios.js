import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

const BaseUrl = 'http://localhost:3000'
axios.defaults.baseURL = BaseUrl

Vue.use(VueAxios, axios)