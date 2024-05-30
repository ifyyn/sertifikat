<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue'

</script>

<template>
  <div class="container" id="app">
    <Header/>

    <RouterView/>
  </div>
</template>


<style scoped>
  #app{
    text-align: center;
    background-color: #151515;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    #app{
      width: 350px;
    }
  }
</style>