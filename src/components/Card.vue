<script setup>
    import { defineProps } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter()
    const {certifikat}= defineProps(['certifikat'])

    function goDetails(){
        router.push({name: 'certifikat',params:{id:certifikat.id}})
    }
</script>

<template>
<div class="card-content">
<div class="card-grid lg:w-96  bg-base-100 shadow-xl mx-auto rounded-xl" @click="goDetails()">
        <figure><img :src="certifikat.imageUrl" alt="Shoes" class="rounded-xl" /></figure>
    <div class="card-body p-2 mt-8">
        <h2 class="card-title text-[#4ed492] font-bold">{{ certifikat.name }}</h2>
        <p class="text-[#e6e6e6]">{{ certifikat.description }}</p>
        <div class="card-actions justify-end p-2 mt-4">
            <button class="bg-[#4ed492] px-4 py-2 rounded-lg text-[#151515]">Details</button>
        </div>
    </div>
</div>

</div>
</template>

<style scoped>
    .card-content{
        justify-content: space-between;
        gap: 5px; 
    }
    .card-grid{
        overflow: hidden;
        position: relative;
        margin-bottom: 20px;
    }
    .card-grid img{
        transition: transform 0.3s ease;
    }
    .card-grid:hover img{
        transform: scale(1.2);  
    }
    @media (max-width: 768px) {
    .card-content{
        display: inline;
        justify-content: space-between;
    }
    .card-grid{
        width: 250px;
        margin-bottom: 40px;
       
    }
  }
</style>