<script setup lang="ts">
import { useRouter } from 'vue-router'
import NavigationBar from '../components/NavigationBar.vue'
import AppFooter from '../components/AppFooter.vue'

const router = useRouter()

const goBack = () => {
    router.push('/')
}
</script>

<template>
    <div class="service-detail-page">
        <NavigationBar />

        <div class="coming-soon">
            <div class="container">
                <div class="construction-icon">🚧</div>
                <h1>Pardon Our Dust!</h1>
                <p class="subtitle">We're crafting something special for you</p>
                <p class="description">
                    This service page is currently under construction. We're working hard to bring you
                    detailed information about our solutions. Check back soon!
                </p>
                <button @click="goBack" class="home-button">
                    ← Back to Home
                </button>
            </div>
        </div>

        <AppFooter />
    </div>
</template>

<style scoped>
.service-detail-page {
    width: 100%;
    overflow-x: hidden;
}

.coming-soon {
    min-height: calc(100vh - 80px);
    margin-top: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #f9fafb 0%, #ffffff 100%);
    padding: 4rem 2rem;
}

.container {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
}

.construction-icon {
    font-size: 6rem;
    margin-bottom: 2rem;
    animation: bounce 2s infinite;
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-20px);
    }
}

.coming-soon h1 {
    font-size: 3rem;
    font-weight: 700;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
}

.subtitle {
    font-size: 1.5rem;
    color: #4a5568;
    margin-bottom: 2rem;
    font-weight: 500;
}

.description {
    font-size: 1.1rem;
    color: #718096;
    line-height: 1.8;
    margin-bottom: 3rem;
}

.home-button {
    padding: 1rem 2.5rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 30px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
}

.home-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
}

/* Responsive Design */
@media (max-width: 768px) {
    .coming-soon h1 {
        font-size: 2rem;
    }

    .subtitle {
        font-size: 1.2rem;
    }

    .construction-icon {
        font-size: 4rem;
    }
}
</style>
