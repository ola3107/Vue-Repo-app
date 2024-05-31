<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer>
    <p>
      &copy; <span>{{ currentYear }}</span> Olasunkanmi github repo. All rights
      reserved.
    </p>
  </footer>
</template>

<style scoped>
footer {
  background-color: #5b6a7a;
  color: white;
  text-align: center;
  padding: 5px 0;
  width: 100%;
  position: fixed;
  bottom: 0;
}

footer p {
  font-size: 0.8rem;
  font-style: italic;
}

footer a {
  color: white;
  font-weight: 700;
}

footer p a:hover {
  color: black;
}
</style>
