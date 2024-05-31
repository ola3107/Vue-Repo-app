<template>
  <section class="main-repos">
    <section
      class="repo-head"
      v-motion-pop
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { duration: 500 } }"
    >
      <h2>Repositories</h2>
      <p>Here you can view all the repositories available.</p>
    </section>
    <ReposList />
  </section>
</template>

<script setup>
import ReposList from "../components/ReposList.vue";
</script>

<style scoped>
section.main-repos {
  margin-inline: 5%;
  margin-block: 90px;
  z-index: 0;
}

.repo-head {
  text-align: center;
  margin-top: 20px;
  margin-inline: auto;
  max-width: 600px;
  line-height: 1;
}

.repo-head h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #e9f1f5;
}

.repo-head p {
  font-size: 1.2rem;
  font-style: italic;
  margin-top: 10px;
  color: #c3cbcf;
}
</style>
