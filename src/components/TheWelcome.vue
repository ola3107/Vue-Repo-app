<script setup>
    import { RouterLink} from 'vue-router'
    


</script>

<template>
        <section className="home-main">
            <div className="welcome">
                <h1>Welcome to my Github Repository.</h1>
                <p>Here you can view existing repositories and go to my Github page.</p>
                <div className="btn-home" target="_blank">
                    <a href="https://github.com/ola3107">
                        <button>Go to Github</button>
                    </a>
                    <RouterLink to="/Repos"><button>See Repositories</button></RouterLink>
                </div>
            </div>
        </section>
</template>

<style scoped>
    section.home-main {
        margin-inline: 5%;
    }

    section .welcome {
        text-align: center;
        margin-top: 180px;
        margin-inline: auto;
        max-width: 600px;
    }

    .welcome h1 {
        font-size: calc(35px + 2vw);
        font-weight: 700;
        line-height: 1.2;
        color: #e9f1f5;
    }

    .welcome p {
        font-size: 20px;
        line-height: 1.2;
        font-style: italic;
        margin-top: 10px;
        color: #c3cbcf;
    }

    div.btn-home{
        margin-top: 20px;
        margin-inline: auto;
        max-width: 350px;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
</style>
