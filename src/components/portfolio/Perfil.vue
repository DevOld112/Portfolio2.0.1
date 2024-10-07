<script setup lang="ts">
import { defineProps } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import type { Perfil } from '../../types/index'

const props = defineProps<({
    perfil: Perfil
})>()

</script>

<template>
    <div class="space-y-4">
        <figure class="print:hidden w-fit relative">
            <img src="../../../public/YO.png" alt="imagen personal" class="h-48 w-48">
            <div class="shadow-lg shadow-skin-hues">
                <div class="bg-orange-500 absolute -inset-y-8 right-0 w-px bg-skin-hue/50 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div class="bg-orange-500 absolute -inset-y-8 left-0 w-px bg-skin-hue/50 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div class="bg-orange-500 absolute -inset-x-8 bottom-0 h-px bg-skin-hue/50 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div class="bg-orange-500 absolute -inset-x-8 top-0 h-px bg-skin-hue/50 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>

            </div>
        </figure>
        
        <h1 class="text-4xl">{{ props.perfil.name }}</h1>
        <h3 class="text-2xl font-medium">{{ props.perfil.title }}</h3>
        <h4 class="text-xl"><font-awesome-icon :icon="['fas', 'globe']" /> {{ props.perfil.location }}</h4>
        <div class="flex gap-5 text-xl  text-orange-500 ml-10">
                <font-awesome-icon :icon="['fab', 'facebook']" />
                <font-awesome-icon :icon="['fab', 'linkedin']" />
                <font-awesome-icon :icon="['fab', 'twitter']" />
                <font-awesome-icon :icon="['fab', 'instagram']" />
        </div>
    </div>
    <div>
        <h1>Sobre Mi</h1>
        <p>{{ props.perfil.aboutMe }}</p>
    </div>
</template>