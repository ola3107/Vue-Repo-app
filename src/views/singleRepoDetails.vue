<template>
    <section>
                <div className="repo_details" v-if="repo">
                    <div className="details__name">
                        <h1>{{repo.name}}</h1>
                        <p>{{repo.description}}</p>
                    </div>
                    <div className="details__info">
                        <div className="details__info__item">
                            <p>Stars</p>
                            <p>{{repo.stargazers_count}}</p>
                        </div>
                        <div className="details__info__item">
                            <p>Watchers</p>
                            <p>{{repo.watchers}}</p>
                        </div>
                        <div className="details__info__item">
                            <p>Forks</p>
                            <p>{{repo.forks}}</p>
                        </div>
                        <div className="details__info__item">
                            <p>Open Issues</p>
                            <p>{{repo.open_issues}}</p>
                        </div>
                    </div>
                    
                    <div class="repo_url">
                        <a :href='repo.html_url' target="_blank">
                            View on GitHub
                        </a>
                    </div>
                </div>

                <div className="button-control">
                    <button @click="back">Back to Repositories</button>
                </div>
        </section>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
import api from '../service/api';
    import { defineProps, computed, onMounted, ref} from 'vue';
    import { useRouter } from 'vue-router';

    const props = defineProps({
        username: {
            type: String,
            required: true
        },
        id: {
            type: [String, Number],
            required: true
        }
    })

    const router = useRouter()

    const back = () => {
        router.go(-1)
    }

    const repo = ref(null)

    const username = computed(() => props.username)
    const id = computed(() => props.id)

    onMounted(() => {
        api.getRepoDetails(username.value, id.value).then((repos) => {
            console.log(repos.data)
            repo.value = repos.data
        }).catch((error) => {
            console.log(error)
        })
    })
   
</script>

<style scoped>
    .repo_details {
        width: 80%;
        border: 1px solid black;
        border-radius: 5px;
        border-radius: 10px;
        padding: 20px 20px;
        margin: auto;
        margin-top: 150px;
    }

    .repo_details h1 {
        font-size: 1.5rem;
        font-weight: 700;
        color: aliceblue;
        text-align: center;
    }

    .repo_details .details__name p {
        font-size: 1.2rem;
        text-align: center;
    }

    .repo_details .details__info {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 20px;
        text-align: center;
    }

    .details__info .details__info__item {
        border: 1px solid black;
        margin-top: 20px;
        width: 100px;
        font-weight: 700;
    }

    div.repo_url {
        margin-top: 55px;
        text-align: center;
    }

    .repo_details a {
        text-align: center;
        text-decoration: none;
        padding: 10px 20px;
        background-color: #5094af;
        color: white;
        border-radius: 5px;
        font-weight: 700;
    }

    section .button-control {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }

</style>