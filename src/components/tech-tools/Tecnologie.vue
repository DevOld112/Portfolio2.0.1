<script setup lang="ts">

import { defineProps } from 'vue';

const props = defineProps<{
  tecnologie: { name: string };
}>();

</script>

<template>
  <div class="my-10">
    <img :src="'/tecnologies/' + props.tecnologie?.name + '.svg'" alt="Tecnología" />
  </div>
</template>
