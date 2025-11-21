<script setup lang="ts">
import { useRouter } from 'vue-router'

defineProps<{
    title: string
    icon: string
    tagline: string
}>()

const router = useRouter()

const goBack = () => {
    router.push('/')
}
</script>

<template>
    <section class="service-hero">
        <div class="hero-container">
            <button class="back-button" @click="goBack">
                ← Back to Services
            </button>
            <div class="hero-icon">{{ icon }}</div>
            <h1 class="service-title">{{ title }}</h1>
            <p class="service-tagline">{{ tagline }}</p>
        </div>
    </section>
</template>

<style scoped>
.service-hero {
    margin-top: 80px;
    padding: 4rem 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-align: center;
}

.hero-container {
    max-width: 800px;
    margin: 0 auto;
}

.back-button {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.3s;
    margin-bottom: 2rem;
}

.back-button:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateX(-5px);
}

.hero-icon {
    font-size: 5rem;
    margin-bottom: 1rem;
}

.service-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

.service-tagline {
    font-size: 1.5rem;
    opacity: 0.95;
    line-height: 1.6;
}

@media (max-width: 768px) {
    .service-title {
        font-size: 2rem;
    }

    .service-tagline {
        font-size: 1.2rem;
    }
}
</style>
