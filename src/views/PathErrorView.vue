<script setup>
import FourOfour from "../components/FourOfour.vue";
</script>

<template>
  <FourOfour
    v-motion-slide-bottom
    :delay="500"
    :enter="{ opacity: 1, y: 0, scale: 1, transition: { duration: '800' } }"
  />
</template>
