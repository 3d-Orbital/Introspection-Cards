<template>
    <div v-on:click="toggle">
        <div :class="`flex flex-row p-2 border-2 rounded-md h-96 max-h-fit w-64 max-w-64 mx-1 my-2 mx-2 ${borderColor} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`" v-if="showFront">
            <div class="" >
                <h2 class="uppercase">{{ title }}</h2>
                <div class="flex flex-colubm justify-center items-center ">
                    <div class="">
                        <img class="rounded-full bg-transparent h-24 w-24 max-w24 max-h-24" :src="`/images/${image1}.png`">
                    </div>
                </div>
               <div class="text-center pt-1 pb-2">
                    <p class="text-sm break-words">{{ content }}</p>
                    <p class="py-1 text-sm break-words" >{{ section }}</p>
                    <p class="py-1 text-sm break-words">{{ footer }}</p>
                </div>
           </div>
        </div>
        <div :class="`flex flex-row p-2 border-2 rounded-md h-96 max-h-96 w-64 max-w-64 mx-1 my-2 mx-2 ${borderColor} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`"  v-else>
           <div class="card-inner flex items-center cursor-pointer" >
            <div class="p-4">
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
  .card-inner {
     cursor: pointer;
     transition: transform 0.5s ease;
  }

  .card-inner:hover {
     transform: scale(1.06);
  }

</style>