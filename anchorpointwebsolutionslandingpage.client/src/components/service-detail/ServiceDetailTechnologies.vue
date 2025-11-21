<script setup lang="ts">
defineProps<{
    technologies: string[]
}>()
</script>

<template>
    <section class="service-technologies">
        <div class="container">
            <h2 class="section-title">Technologies We Use</h2>
            <div class="tech-tags">
                <span v-for="tech in technologies" :key="tech" class="tech-tag">
                    {{ tech }}
                </span>
            </div>
        </div>
    </section>
</template>

<style scoped>
.service-technologies {
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

.tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    max-width: 900px;
    margin: 0 auto;
}

.tech-tag {
    padding: 0.75rem 1.5rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 25px;
    font-size: 1rem;
    font-weight: 500;
    box-shadow: 0 4px 6px rgba(102, 126, 234, 0.2);
    transition: all 0.3s;
}

.tech-tag:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(102, 126, 234, 0.3);
}

@media (max-width: 768px) {
    .section-title {
        font-size: 2rem;
    }
}
</style>
