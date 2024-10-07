<script setup lang="ts">
import { certificates, curses } from '../../data/portfolio/experience'
import Certificate from '../tech-tools/Certificate.vue'
import Curses from '../tech-tools/Curses.vue';

</script>

<template>

    <div>
        <h2 class="text-xl font-bold italic">Cursos</h2>
        <Curses
        v-for="curse in curses"
        :curse="curse"
        />
    </div>

    <div>
        <h2 class="text-xl font-bold italic">Certificados</h2>
        <Certificate
        v-for="certificate in certificates"
        :certificate="certificate"
        />
    </div>
    

</template>