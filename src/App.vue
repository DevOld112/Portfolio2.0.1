<script setup lang="ts">
import { onMounted, onUpdated, computed } from 'vue';
import {  RouterView } from 'vue-router'
import Header from './components/index/Header.vue';
import Footer from './components/index/Footer.vue'
import AOS from 'aos'


AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
})

onMounted(() => {
  AOS.refresh();
});

onUpdated(() => {
  AOS.refresh();
});

</script>

<template>
  <Header />

  <RouterView
    class="min-h-screen "
    data-aos="fade-left"
    data-aos-duration="500"
  />

  <Footer />

</template>

