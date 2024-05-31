import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.github.com',
    
})

export default {
    getRepos(user, params = {}) {
       return api.get(`/users/${user}/repos`, { params })
    },
    getRepoDetails(user, repo) {   
        return api.get(`/repos/${user}/${repo}`)
    },
    searchRepos(query, params = {}) {
        return api.get(`/search/repositories?q=${query}+user:${params.username}+in:name`, { params });
    }

}






