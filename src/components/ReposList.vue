<template>
  <div class="feature">
    <input
      type="text"
      class="search-repo"
      v-model="github.search"
      placeholder="Search Repositories"
      @keyup="searchRepos"
    />
    <p class="no-repo">no repo found!!!</p>
  </div>
  <div>
    <div class="repo-body">
      <div class="repo-item" v-for="repo in github.repos" :key="repo.id">
        <div className="repo-item-top">
          <RouterLink
            :to="{
              name: 'RepoDetails',
              params: { username: user, id: repo.name },
            }"
          >
            <h2>{{ repo.name }}</h2>
          </RouterLink>
          <p>{{ repo.visibility }}</p>
        </div>
        <div class="repo-item-body">
          <p>{{ repo.language }}</p>
          <p>{{ repo.created_at }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="skelenton" style="font-size: 100px" v-if="github.initialLoading">
    <repoSkelenton />
  </div>
  <div class="pag-btn">
    <button @click="handlePrev">Prev</button>
    <span>{{ github.currentPage }} / {{ github.totalPage }}</span>
    <button @click="handleNext">Next</button>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { reactive } from "vue";
import api from "../service/api";
import repoSkelenton from "./repoSkelenton.vue";

const user = "ola3107";
const github = reactive({
  repos: [],
  currentPage: 1,
  perPage: 4,
  totalPage: 0,
  search: "",
  initialLoading: true,
});

fetchTotalPage();

function fetchTotalPage() {
    api.getRepos(user).then((repo) => {
        github.totalPage = Math.ceil(repo.data.length / github.perPage);
        fetchRepos();
    });
}

function fetchRepos() {
    api.getRepos(user, { per_page: github.perPage, page: github.currentPage })
    .then((repo) => {
      github.repos = repo.data;
      github.initialLoading = false;
    }).catch((error) => {
      console.error("Error fetching repos:", error);
    });
}

function searchRepos() {
    if (github.search.trim() === "") {
        fetchRepos();
        document.querySelector(".pag-btn").style.display = "block";
    } else {
    api.searchRepos(github.search, { username: user })
    .then((response) => {
    if (response.data.items.length || response.data.items.length === 0) {
        document.querySelector(".pag-btn").style.display = "none";
    }

    if (!response.data.items.length) {
      document.querySelector(".no-repo").style.display = "block";
      setTimeout(() => {
        github.initialLoading = false;
        document.querySelector(".no-repo").style.display = "none";
      }, 1000);
    }
    github.repos = response.data.items;
    console.log(github.repos);
    })
    .catch((error) => {
    console.error("Error searching repos:", error);
    });
  }
}

function handleNext() {
  if (github.currentPage < github.totalPage) {
    github.currentPage++;
  } else {
    github.currentPage = 1;
  }
  fetchRepos();
}

function handlePrev() {
  if (github.currentPage > 1) {
    github.currentPage--;
  } else {
    github.currentPage = github.totalPage;
  }
  fetchRepos();
}
</script>

<style scoped>
.feature {
  text-align: center;
  margin-top: 30px;
}

.feature input {
  width: 300px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: aliceblue;
  font-size: 1rem;
}

.feature .no-repo {
  display: none;
  font-size: 1.5rem;
  font-weight: 700;
  color: red;
}

.repo-body {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 10px auto;
  width: 100%;
}

.repo-item {
  width: 500px;
  max-width: 500px;
  padding: 20px 20px;
  border: 1px dotted rgba(126, 65, 184, 0.72);
  border-radius: 5px;
  box-shadow: 3px 3px 4px 5px rgba(0, 0, 0, 0.1);
  margin-block: 10px;
}

.repo-item-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.repo-item-top h2 {
  font-size: 1.2rem;
  font-weight: 700;
  color: aliceblue;
}

.repo-item-top p {
  font-size: 0.8rem;
  font-style: italic;
  border: 1px solid;
  padding: 1px 10px;
  border-radius: 20px;
  font-weight: 700;
}

.repo-item .repo-item-body p {
  font-size: 1rem;
  margin-top: 10px;
  font-weight: 700;
  font-style: italic;
}

.pag-btn {
  text-align: center;
  margin-top: 20px;
  margin-inline: auto;
  width: 300px;
}

.pag-btn span {
  font-size: 1.2rem;
  margin-inline: 8px;
  color: white;
}

@media screen and (max-width: 768px){

  .repo-item {
    padding: 10px 10px;
    max-width: 400px;
    max-width: 350px;
  }

  .repo-item h2 {
    font-size: 1.2rem;
    color: aliceblue;
  }

  .repo-item p {
    font-size: 0.9rem;
  }
}
</style>
