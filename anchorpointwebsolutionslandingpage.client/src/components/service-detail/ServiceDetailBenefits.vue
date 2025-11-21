<script setup lang="ts">
defineProps<{
    benefits: string[]
    serviceTitle: string
}>()
</script>

<template>
    <section class="service-benefits">
        <div class="container">
            <h2 class="section-title">Why Choose Our {{ serviceTitle }} Services</h2>
            <div class="benefits-grid">
                <div v-for="(benefit, index) in benefits" :key="index" class="benefit-card">
                    <div class="benefit-number">{{ String(index + 1).padStart(2, '0') }}</div>
                    <p class="benefit-text">{{ benefit }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.service-benefits {
    padding: 4rem 2rem;
    background: white;
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

.benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.benefit-card {
    padding: 2rem;
    background: #f9fafb;
    border-radius: 15px;
    transition: all 0.3s;
}

.benefit-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.benefit-number {
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
}

.benefit-text {
    color: #4a5568;
    line-height: 1.7;
    font-size: 1.05rem;
}

@media (max-width: 768px) {
    .benefits-grid {
        grid-template-columns: 1fr;
    }

    .section-title {
        font-size: 2rem;
    }
}
</style>
