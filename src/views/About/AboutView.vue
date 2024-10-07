<script setup lang="ts">
import Perfil from '@/components/portfolio/Perfil.vue';
import Experiencie from '@/components/portfolio/Experiencie.vue';
import Skill from '@/components/portfolio/Skill.vue';
import { works, projects, perfil } from '../../data/portfolio/experience';
import Projects from '../../components/portfolio/Projects.vue';
import Education from '../../components/portfolio/Education.vue';


</script>

<template>
    <main class="min-h-screen mt-10 lg:flex text-white grid">
        <section class="mx-10 lg:w-1/2 space-y-10">
            <Perfil
            :perfil="perfil"
            />

            <h2 class=" text-2xl ml-5 mt-10 font-bold">Educacion</h2>
            <Education />
        </section>

        <section class="relative lg:w-1/2">
            <h2 class=" text-2xl ml-5 mt-10 font-bold">Experiencia</h2>
            <div class="space-y-5 mb-5">
                <Experiencie 
                v-for="work in works"
                :work="work"
                />
            </div>
            
            <h2 class=" text-2xl font-bold">Proyectos</h2>
            <div class="mb-10 grid grid-cols-2 gap-2 p-4">
                <Projects
                v-for="project in projects"
                :project="project"
                />
                
            </div>
            <h2 class=" text-2xl font-bold">Habilidades</h2>
            <div class="mb-10">
                <Skill />
            </div>
        </section>


    </main>
</template>
