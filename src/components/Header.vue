<script setup>
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";
import { reactive } from "vue";

const state = reactive({
  showSidebar: false,
});

const toggleSidebar = () => {
  state.showSidebar = !state.showSidebar;
  const sidebar = document.querySelector(".sidebar");
  state.showSidebar
    ? (sidebar.style.right = 0)
    : (sidebar.style.right = "-350px");
};
</script>

<template>
  <header>
    <h2>
      Ola<span>sunkanmi</span
      ><Icon icon="carbon:logo-github" width="1.1em" height="1.1em" />
    </h2>

    <nav class="nav-large-screen">
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/Repos">Repositories</RouterLink>
        </li>
        <li>
          <RouterLink to="/FourOfour">404</RouterLink>
        </li>
      </ul>
    </nav>

    <a href="https://github.com/ola3107" target="_blank">
      <button className="btn-large-screen">Go to Github</button>
    </a>
    <Icon
      icon="ci:hamburger-md"
      width="1.5rem"
      height="1.5rem"
      style="color: black"
      class="menu"
      @click="toggleSidebar"
    />
    <nav class="sidebar" >
      <ul>
        <Icon
          icon="iconoir:cancel"
          width="2rem"
          height="2rem"
          style="color: black"
          font-weight="900"
          @click="toggleSidebar"
        />
        <li @click="toggleSidebar">
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li @click="toggleSidebar">
          <RouterLink to="/Repos">Repositories</RouterLink>
        </li>
        <li @click="toggleSidebar">
          <RouterLink to="/FourOfour">404</RouterLink>
        </li>
      </ul>
      <button className="sidebar-large-screen">Go To Github</button>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10%;
  background: linear-gradient(180deg, #5b6a7a, #8f9aa5);
  z-index: 1000;
}

header h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: aliceblue;
}

header h2 span {
  color: black;
  font-weight: 700;
}

header nav ul {
  display: flex;
  list-style: none;
}

header nav ul li {
  margin-right: 1.5rem;
}

.menu {
  display: none;
}

.sidebar {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: -350px;
  height: 260px;
  width: 250px;
  z-index: 999;
  background-color: #5b6a7a;
  box-shadow: -10px 0 20px rgba(0, 0, 0, 0.2);
  padding: 10px 10px;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;
}

.sidebar ul {
  width: 100%;
  margin-block: 10px;
  flex-direction: column;
}

.sidebar ul li {
  width: 100%;
  color: white;
  margin-block-start: 10px;
  margin-inline-start: 10px;
}

.sidebar ul button {
  margin-block-start: 15px;
  margin-inline-start: 10px;
}

@media (max-width: 768px) {
  header {
    padding: 1rem 5%;
  }

  header h2 {
    font-size: 1.2rem;
  }

  .nav-large-screen {
    display: none;
  }

  .menu {
    display: block;
  }

  .btn-large-screen {
    display: none;
  }
}
</style>
