<template>
    <UCard v-if="value == cardState"
     v-on:click="toggle(cardState)" :class="`card mx-2 my-8 w-80 min-w-80 ${borderColor}`"  style="width: 20rem;" >
        <template #header>
            <h2 class="uppercase">{{ title }}</h2>
            <Placeholder class="h-10" />
        </template>
        <Placeholder class="h-32" />
        
        <div :class="`flex justify-item-center min-w-32 min-h-32 max-w-32 max-h-32`">      
            <img slot="image" class="card-img-top pb-2"  style="justify-content: center;" :src="`/images/${image1}.png`" alt="image1" />

        </div>
        <div class="text-center">
            <p class="card-text">{{ content }}</p>
            <p class="card-text py-2" >{{ section }}</p>
            <p class="card-text py-2">{{ footer }}</p>
        </div>
        <template #footer>
            <Placeholder class="h-8" />
            <p>{{ cardType }}</p>
        </template>
       
    </UCard>
    <UCard v-else :class="`card mx-2 my-8 w-80 min-w-80 ${borderColor}`"  style="width: 20rem;" >
        <div :class="`flex justify-center rounded-full min-w-32 min-h-32 max-w-full max-h-full`">      
            <img slot="image" class="card-img-top pb-2" :src="`/images/${imageBack}.png`" alt="Back" />
        </div>
               
    </UCard>
</template>

<script setup lang="ts">
import { _borderColor } from '#tailwind-config/theme';

defineProps({
    id: Number, 
    title: String,
    content: String,
    section: String,
    footer: String,
    cardType: String,
    borderColor: String,
    bacground: String,
    image1: String,
    image2: String,
    imageBack: String,
    value: String
})

const toggle = (value:string) => {
    if (cardState == 'show') {
        value = "show";
        console.log(value)
    } else {
        value = "hidden";
        console.log(value)
    }
}
var cardState = "show";

const color_border = _borderColor;

</script>


