<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/contact">Contact</NuxtLink>
                <NuxtLink to="/about">About</NuxtLink>
            </nav>
        </header>
        <div class="container">
            <NuxtPage />
        </div>

    </div>
</template>

<style scoped>
.container {
    margin: 32px;
    padding: 18px;
}

nav {
    background-color: #FAFAFA;
    padding: 8px 16px;
    display: flex;
    justify-content: center;
    gap: 32px;
}
</style>