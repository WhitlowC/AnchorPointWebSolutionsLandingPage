<script setup lang="ts">
defineProps<{
    description: string
}>()
</script>

<template>
    <section class="service-description">
        <div class="container">
            <p class="description-text">{{ description }}</p>
        </div>
    </section>
</template>

<style scoped>
.service-description {
    padding: 4rem 2rem;
    background: white;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.description-text {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #4a5568;
    text-align: center;
    max-width: 900px;
    margin: 0 auto;
}
</style>
