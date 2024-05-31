<template>
    <div className="error-page">
            <h1>404 Error Page</h1>
            <p>The requested page does not exist.</p>
            <p>
                <i>Not Found</i>
            </p>
            <p>
                <a href="/">Go back to Home Page</a>
            </p>
        </div>
</template>

<style scoped>
    .error-page {
        text-align: center;
        margin-top: 200px;
        padding-inline: 5%;
    }

    .error-page h1 {
        font-size: 3rem;
        font-weight: 700;
    }

    .error-page p {
        font-size: 1.5rem;
        font-style: italic;
        margin-top: 10px;
    }
</style>