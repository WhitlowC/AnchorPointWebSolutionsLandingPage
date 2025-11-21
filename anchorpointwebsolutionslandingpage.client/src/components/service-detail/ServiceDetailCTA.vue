<script setup lang="ts">
import { useRouter } from 'vue-router'

defineProps<{
    serviceTitle: string
}>()

const router = useRouter()

const scrollToContact = () => {
    router.push('/#contact')
}
</script>

<template>
    <section class="service-cta">
        <div class="container">
            <h2 class="cta-title">Ready to Get Started?</h2>
            <p class="cta-text">Let's discuss how our {{ serviceTitle }} services can help your business grow</p>
            <button class="cta-button" @click="scrollToContact">Contact Us Today</button>
        </div>
    </section>
</template>

<style scoped>
.service-cta {
    padding: 6rem 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-align: center;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.cta-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

.cta-text {
    font-size: 1.2rem;
    opacity: 0.95;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.cta-button {
    padding: 1.2rem 3rem;
    background: white;
    color: #667eea;
    border: none;
    border-radius: 30px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}
</style>
