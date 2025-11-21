<script setup lang="ts">
defineProps<{
    features: string[]
}>()
</script>

<template>
    <section class="service-features">
        <div class="container">
            <h2 class="section-title">What We Offer</h2>
            <div class="features-grid">
                <div v-for="feature in features" :key="feature" class="feature-item">
                    <span class="feature-icon">✓</span>
                    <span class="feature-text">{{ feature }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.service-features {
    padding: 4rem 2rem;
    background: #f9fafb;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1a1a1a;
    text-align: center;
    margin-bottom: 3rem;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
}

.feature-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    transition: all 0.3s;
}

.feature-item:hover {
    transform: translateX(10px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.feature-icon {
    width: 30px;
    height: 30px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-weight: 600;
}

.feature-text {
    font-size: 1.05rem;
    color: #1a1a1a;
}

@media (max-width: 768px) {
    .features-grid {
        grid-template-columns: 1fr;
    }

    .section-title {
        font-size: 2rem;
    }
}
</style>
