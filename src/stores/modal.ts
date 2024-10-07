import { defineStore } from "pinia";
import { ref } from "vue";
import type { Projects } from '../types/index'

export const useModalStore = defineStore('modal', () => {
    const isModalOpen = ref<boolean>(false)
    const selectedProject = ref<Projects | null>(null);
    
    
    const openModalProject = (project: Projects) => {
        selectedProject.value = project;
        isModalOpen.value = true
    }

    const closeModalProject = (project: Projects) => {
        selectedProject.value = project;
        isModalOpen.value = false
    }


    return {
        isModalOpen,
        selectedProject,
        openModalProject,
        closeModalProject
    }
})
