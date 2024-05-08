<template>
    <div v-on:click="toggle">
        <div class="card" v-if="showFront">
            <div class="card-inner" >
                <h2 class="uppercase">{{ title }}</h2>
                <div class="flex justify-center items-center ">
                    <div class="">
                        <img class="rounded-full bg-transparent h-24 w-24 max-w24 max-h-24" :src="`/images/${image1}.png`">  
                    </div>
                </div>
                    <div class="text-center p-2">
                    <p class="card-text">{{ content }}</p>
                    <p class="card-text py-2" >{{ section }}</p>
                    <p class="card-text py-2">{{ footer }}</p>
                </div>
           </div>
        </div>
        <div :class="`flex flex-nowrap items-center p-2 border-2 rounded-md mx-1 my-2 ${borderColor} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`"  v-else>
           <div class="card-inner cursor-pointer " >
            <div class="h-96 max-h-96 w-64 max-w-64">
                <img class="" :src="`/images/${imageBack}.png`"  alt="Card Back">
            </div>
              
           </div>
        </div>
    </div>
 </template>
 
 <script setup lang="ts">
    import { defineProps, ref } from 'vue'
 
    defineProps({
    id: Number, 
    title: String,
    content: String,
    section: String,
    footer: String,
    cardType: String,
    borderColor: String,
    background: String,
    image1: String,
    image2: String,
    imageBack: String,
    value: String
})
 
    const showFront = ref(false)
 
    const toggle = () => {
       showFront.value = !showFront.value
    };
 </script>
  
<style scoped>
  .card {
     display: flex;
     flex-direction: column;
     align-items: center;
     width: 200px;
     height: 300px;
     margin: 10px;
     border: 1px solid #ccc;
     border-radius: 5px;
  }

  .card-inner {
     width: 100%;
     height: 200px;
     cursor: pointer;
     transition: transform 0.5s ease;
  }

  .card-inner:hover {
     transform: scale(1.1);
  }

  .card-title {
     margin-top: 10px;
  }


</style>