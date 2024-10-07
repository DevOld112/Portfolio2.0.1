<script setup lang="ts">
import Tecnologie from '@/components/tech-tools/Tecnologie.vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'



const tecnologies = [
    { name: 'vuejs' },
    { name: 'nodejs' },
    { name: 'express' },
    { name: 'tailwindcss' },
    { name: 'postgresql' },
    { name: 'mongodb'},
    { name: 'react' },
    { name: 'html'},
    { name: 'css' },
    { name: 'javascript' },
    { name: 'typescript' },
];


</script>

<template>
    <div class="mt-10 mb-10">
        <Carousel
            :perPage="1"
            :autoplay="100"
            :wrap-around="true"
            :loop="true"
            :navigationEnabled="true"
            :transition="1000"
            :itemsToShow="3.5"
        >
        <slide v-for="(tec, index) in tecnologies" key="slide">
            <div class="flex justify-center gap-10 mt-4">
            <Tecnologie
                :tecnologie="tec"
            />
        </div>
        </slide>
        </Carousel>
    </div>
</template>