<script setup>
import Card from '@/components/Card.vue';
import { sertifikat } from '@/data';
import { ref,computed } from 'vue';


const search = ref("")

const searchSertifikat  = computed(()=>{
  return sertifikat.filter(certifikat => certifikat.description.toLowerCase().includes(search.value.toLowerCase()))
})

</script>

<template>
  <div class="sertifikat-container">
    <div class="sertifikat-title text-white font-bold  text-start mb-4">
      All Certifikat
    </div>
    <div class="search text-start mb-7">
      <input v-model="search" type="text" placeholder="Search Sertifikat" class="px-6 py-1 rounded-full bg-[#151515] text-[#e6e6e6]">
    </div>
    <div class="card-content grid lg:grid-cols-3  mb-10 ">
      <Card v-for="certifikat in searchSertifikat" :key="certifikat.id" v-bind:certifikat="certifikat"/>
    </div>
  </div>
</template>


<style scoped>
  .sertifikat-container{
    margin-top: 80px;
    
  }
  input{
    border: none;
  }
</style>