  
<template>
    <h2>Component Deck</h2>
    <div class="flex flex-row">
        
        <Card v-for="card in cards" :key="card.id" :="card" ></Card>
    </div>
</template>
<script setup lang="ts">
import { cards } from '~/server/api/cards.json'

</script> 

