<template>
  <div class="card-detail mt-32">
    <div class="card-content grid grid-cols-1  lg:w-[600px] shadow-xl rounded-lg mx-auto p-2">
        <div class="img-content">
            <img src="../assets/sertifikat10.png" alt="">
        </div>
        <div class="card-title mt-7">
            <h1 class="text-2xl font-bold text-[#4ed492]">Dicoding</h1>
        </div>
        <div class="card-descriptions">
            <p class="text-[#e6e6e6]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quia, ullam ad nesciunt suscipit vitae.</p>
        </div>
        <div class="card-years text-[#4ed492]">
            <p>Diterima 20 january 2024</p>
        </div>
        <button class="bg-white p-1 rounded-sm text-xl mt-4">
            <RouterLink to="/sertifikat">Back</RouterLink>
        </button>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>

</style>