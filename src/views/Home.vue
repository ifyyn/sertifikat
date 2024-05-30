<script setup>
import Card from '@/components/Card.vue';
</script>

<template>
  <div class="content">
    <div class="content-title text-center font-[900px] bg-gradient-to-bl from-[#2490d2] to-[#4ed492] bg-clip-text text-transparent">WELCOME TO MY WEBSITE</div>
    <div class="card-content">
   
  </div>
  </div>
</template>

<style scoped>
.content{
  margin: 0 auto;
}
.card-content{
  margin-top: 280px;
}
.content-title{
  font-size: 60px;
  font-weight: bold;
  width: 600px;
  margin: 10% 25% auto;
  text-align: center;
}
@media (max-width: 768px) {
  .content{
    width: 250px;
    text-align: center;
  }
  .content-title{
    font-size: 40px;
    width: 250px;
    text-align: center;
    /* margin-top: 200px; */
    margin: 150px auto;
  }
}
</style>