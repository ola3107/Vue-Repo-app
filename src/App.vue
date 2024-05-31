<script setup>
import { RouterView } from "vue-router";
// import {Icon} from '@iconify/vue';
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header
    v-motion-slide-top
    :initial="{ opacity: 0, y: -100 }"
    :delay="500"
    :enter="{ opacity: 1, y: 0, scale: 1, transition: { duration: '1000' } }"
  />
  <RouterView />
  <Footer
    v-motion-slide-bottom
    :delay="1500"
    :enter="{ opacity: 1, y: 0, scale: 1, transition: { duration: '1000' } }"
  />
</template>
