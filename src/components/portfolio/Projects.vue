<script setup lang="ts">
import { defineProps } from 'vue';
import type { Projects } from '../../types/index';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import ProjectDetail from '@/components/projects/ProjectDetail.vue';
import { useModalStore } from '@/stores/modal';

const store = useModalStore();

const props = defineProps<{
  project: Projects;
}>();


const openProjectModal = () => {
  store.openModalProject(props.project);

  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
  <div @click="openProjectModal" class="border rounded-md border-solid mt-5 bg-slate-700 p-4 hover:bg-orange-500 transition ease-in 0.3s cursor-pointer">
    <div class="flex gap-3 items-center justify-between text-xl font-bold">
      <div class="flex items-center gap-3">
        <FontAwesomeIcon :icon="['fas', 'folder']" />
        <h3>{{ props.project.title }}</h3>
      </div>
      <a class="hover:rotate-90 transition-transform duration-300" :href="props.project.repository" target="_blank">
        <FontAwesomeIcon :icon="['fas', 'code-branch']" />
      </a>
    </div>
    <div class="my-5 font-bold">
      <h5>{{ props.project.description }}</h5>
    </div>

    <ul v-for="feature in props.project.features" class="list-disc list-inside text-sm">
      <li>{{ feature }}</li>
    </ul>
  </div>


  <div 
    v-if="store.isModalOpen" 
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto"
  >

    <div class="bg-white p-5 rounded-md shadow-lg max-w-3xl w-full mx-4 my-8">
      <ProjectDetail
        :project="store.selectedProject"
        data-aos="fade-left"
      />
    </div>
  </div>
</template>
