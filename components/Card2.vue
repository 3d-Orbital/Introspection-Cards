<template>
    <div v-on:click="toggle" >
        <UCard :class="`card mx-2 my-8 w-80 min-w-80 ${borderColor}`"  v-if="cardState === 'show'">
            <template #header>
                <h2 class="uppercase">{{ title }}</h2>
            </template>
            <div :class="`flex min-w-32 min-h-32 max-w-32 max-h-32`">
                <img slot="image" class="card-img-top pb-2 justify-item-center" :src="`/images/${image1}.png`" alt="image1" />
            </div>
            <div class="text-center">
                <p class="card-text">{{ content }}</p>
                <p class="card-text py-2" >{{ section }}</p>
                <p class="card-text py-2">{{ footer }}</p>
            </div>
            <template #footer>
                <p>{{ cardType }}</p>
            </template>
        </UCard>
        <UCard :class="`card mx-2 my-8 w-80 min-w-80 ${borderColor}`"   v-else>
            <div :class="`flex inset-0 rounded-full min-w-32 min-h-32 max-w-full max-h-full`">      
                <img slot="image" class="card-img-top pb-2" :src="`/images/${imageBack}.png`" alt="Back" />
            </div>                   
        </UCard>
    </div>
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
    background: String,
    image1: String,
    image2: String,
    imageBack: String,
    value: String
})

const toggle = () => {
    cardState = cardState === 'show' ? 'hidden' : 'show';
    console.log(cardState + " <-state")
}

let cardState = "hiden"
const cardShow = "show"

const color_border = _borderColor

</script>


