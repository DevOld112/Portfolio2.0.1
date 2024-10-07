<script setup lang="ts">
import { defineProps } from 'vue'
import type { Certificates } from '../../types/index'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Link from './Link.vue';

const props = defineProps<({
    certificate: Certificates
})>()



</script>

<template>
    <div class="flex gap-2 text-xl font-medium my-5">
        <FontAwesomeIcon :icon="['fas', 'scroll']"  />
        <h3>{{ props.certificate.certificateName }}</h3>
        <Link
        :link="props.certificate.link"
        />
        
    </div>

</template>