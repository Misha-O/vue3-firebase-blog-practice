<template>
    <header>
        <h1>Vue 3 Firebase blog practice</h1>
        <nav>
            <router-link :to="{ name: 'Home' }">Home</router-link>
            <router-link :to="{ name: 'Create' }">Create Post</router-link>
        </nav>
    </header>
</template>

<style>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
}
header h1 {
    color: #dfdfdf;
    font-size: 48px;
}
header a {
    color: #bbb;
    text-decoration: none;
    margin-left: 20px;
}
header a.router-link-active {
    color: #444;
    font-weight: bold;
}
</style>
