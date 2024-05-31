<script setup>
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <main>
    <TheWelcome
      v-motion-slide-bottom
      :delay="500"
      :enter="{ opacity: 1, y: 0, scale: 1, transition: { duration: '800' } }"
    />
  </main>
</template>
