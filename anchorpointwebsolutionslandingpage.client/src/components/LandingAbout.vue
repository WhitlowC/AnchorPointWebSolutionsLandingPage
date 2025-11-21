<script setup lang="ts">
import type { Feature } from '@/types/feature';
import { ref } from 'vue'

const features = ref<Feature[]>([
    {
        number: '01',
        title: 'Expert Team',
        description: 'Seasoned professionals with years of industry experience'
    },
    {
        number: '02',
        title: 'Modern Stack',
        description: 'Cutting-edge technologies for future-proof solutions'
    },
    {
        number: '03',
        title: 'Client-First',
        description: 'Your success is our priority, every step of the way'
    }
])
</script>

<template>
    <section id="about" class="about">
        <div class="about-content">
            <h2 class="section-title">Why Choose Us</h2>
            <div class="features">
                <div v-for="feature in features" :key="feature.number" class="feature">
                    <div class="feature-number">{{ feature.number }}</div>
                    <h3>{{ feature.title }}</h3>
                    <p>{{ feature.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about {
    padding: 6rem 2rem;
    background: white;
}

.about-content {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 1rem;
}

.features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    margin-top: 3rem;
}

.feature {
    text-align: left;
}

.feature-number {
    font-size: 3rem;
    font-weight: 700;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
}

.feature h3 {
    font-size: 1.5rem;
    color: #1a1a1a;
    margin-bottom: 0.5rem;
}

.feature p {
    color: #4a5568;
    line-height: 1.6;
}
</style>
