<script setup lang="ts">
import type { Projects } from '../../types/index';
import { useModalStore } from '@/stores/modal';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const store = useModalStore();
const props = defineProps<{
  project: Projects | null
}>();

const closeModal = () => {
  store.closeModalProject(props.project!);
};
</script>

<template>
  <div 
    class="fixed inset-0 bg-slate-800 bg-opacity-60 flex items-center justify-center z-50 p-4 sm:p-8"
    @click="closeModal"
  >
    <div 
      class="bg-slate-900 text-white p-8 rounded-xl shadow-2xl w-full max-w-5xl h-4/5 overflow-auto relative"
      @click.stop
    >
      <button 
        @click="closeModal" 
        class="absolute top-4 right-4 text-2xl font-bold hover:text-red-500 transform hover:rotate-90 transition duration-300"
      >
        &times;
      </button>
  
      <div class="mt-8 mx-4">
        
        <Carousel
          :perPage="1"
          :autoplay="3000"
          :wrap-around="true"
          :loop="true"
          :navigationEnabled="true"
          :transition="800"
          :itemsToShow="1" 
          class="rounded-lg overflow-hidden shadow-xl"
        >
          
          <slide v-for="(image, index) in props.project?.image" :key="index">
            
            <img 
              :src="'../../../public/' + props.project?.route + '/' + image + '.PNG'" 
              alt="Imagen del proyecto" 
              class="w-full h-auto rounded-lg transition duration-300 transform hover:scale-105 shadow-lg"
            />
          </slide>

          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>

      <div class="text-center mt-10 mx-6">
        <h1 class="text-4xl font-extrabold text-white mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          {{ props.project?.title }}
        </h1>
        <p class="text-lg leading-relaxed text-gray-300">{{ props.project?.description }}</p>
      </div>
  
      <div class="mt-10 text-white mx-6 bg-slate-700 p-6 rounded-lg shadow-inner">
        <p class="text-gray-300">{{ props.project?.detail }}</p>
      </div>
    </div>
  </div>
</template>
