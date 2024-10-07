<script setup lang="ts">
import { defineProps } from 'vue';
import type { Curses } from '../../types/index'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


const props = defineProps<({
    curse: Curses
})>()

</script>

<template>
    <div class="flex my-5 font-medium gap-2">
        <FontAwesomeIcon :icon="['fas', 'graduation-cap']"  />
        <h3>{{  props.curse.curseName }}</h3>
        -
        <h3>{{ props.curse.plataform }}</h3>
    </div>
</template>