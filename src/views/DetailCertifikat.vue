<template>
  <div class="mb-4">
    <div class="card-detail mt-32">
    <div v-if="sertifikat" class="card-content grid grid-cols-1  lg:w-[600px] shadow-xl rounded-lg mx-auto p-2">
        <div class="img-content">
            <img :src="sertifikat.imageUrl" alt="">
        </div>
        <div class="card-title mt-7">
            <h1 class="text-2xl font-bold text-[#4ed492]">{{ sertifikat.name }}</h1>
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
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRoute } from 'vue-router';
import {ref,onMounted} from 'vue'
import { sertifikat } from '@/data';


const props = defineProps({
  sertifikat:{
    type:Object,
    required:true
  }
})

const route = useRoute()
const certifikat = ref(null)

onMounted(()=>{
  if(route.params.id === props.sertifikat.id){
    certifikat.value = props.sertifikat;
  }
})


</script>

<style scoped>

</style>