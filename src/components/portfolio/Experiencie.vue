<script setup lang="ts">
import { defineProps } from 'vue';
import type { Work } from '../../types/index'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps<({
        work: Work
})>()

</script>

<template>
    <ul class="space-y-8 relative">
        <li class="relative pl-10">
        <div class="absolute left-3 top-4 transform -translate-y-1/3 w-3 h-3 bg-orange-500 rounded-full"></div>
        <div>
            <header id="experiencie" class=" font-semibold  mt-10 lg:flex grid gap-2 items-center">
                <span> {{ props.work.year }}</span>@ <p class="text-orange-500 ">{{ props.work.company  }}</p> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-orange-500 hover:text-orange-600 cursor-pointer inline-block w-4 h-4 ml-1 transition-transform translate-y-px shrink-0 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" aria-hidden="true"> <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path> </svg>
            </header>
            <h3 class="text-lg font-bold">{{ props.work.position }}</h3>
            <p>{{ props.work.location }}</p>
            <ul v-for="responsibilitie in props.work.responsibilities" class="list-disc list-inside mt-2 text-sm">
            <li class="text-lg">{{ responsibilitie }}</li>
            </ul>
            <div class="text-4xl flex gap-5 mt-5" >
                <FontAwesomeIcon class="bg-slate-500 rounded-lg" v-for="stack in props.work.stack" :icon="['fab', stack]" />
            </div>
        </div>
        </li>
    </ul>
</template>