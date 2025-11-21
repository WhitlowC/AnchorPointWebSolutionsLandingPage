<script setup lang="ts">
import { computed } from 'vue'
import type { Technology } from '../../types/serviceDetail'

const props = defineProps<{
    technologies: string[] | Technology[]
}>()

// Convert string array to Technology objects if needed
const techList = computed(() => {
    if (props.technologies.length === 0) return []

    // Check if first item is a string or Technology object
    if (typeof props.technologies[0] === 'string') {
        return (props.technologies as string[]).map(tech => ({
            name: tech,
            category: 'General',
            description: undefined,
            icon: undefined
        }))
    }
    return props.technologies as Technology[]
})

// Group technologies by category
const groupedTechnologies = computed(() => {
    const groups: Record<string, Technology[]> = {}

    techList.value.forEach(tech => {
        const category = tech.category || 'General'
        if (!groups[category]) {
            groups[category] = []
        }
        groups[category].push(tech)
    })

    return groups
})

const categoryOrder = ['Frontend', 'Backend', 'Database', 'Tools', 'Cloud', 'General']

const orderedCategories = computed(() => {
    return categoryOrder.filter(cat => groupedTechnologies.value[cat])
})
</script>

<template>
    <section class="service-technologies">
        <div class="container">
            <h2 class="section-title">Technologies We Use</h2>
            <p class="section-subtitle">
                We leverage cutting-edge technologies to deliver robust, scalable solutions
            </p>

            <div class="tech-categories">
                <div v-for="category in orderedCategories" :key="category" class="tech-category">
                    <h3 class="category-title">{{ category }}</h3>
                    <div class="tech-grid">
                        <div v-for="tech in groupedTechnologies[category]" :key="tech.name" class="tech-card">
                            <div class="tech-icon" v-if="tech.icon">
                                <img v-if="tech.icon.startsWith('/') || tech.icon.startsWith('http')" :src="tech.icon"
                                    :alt="tech.name + ' logo'" class="tech-logo" />
                                <span v-else>{{ tech.icon }}</span>
                            </div>
                            <div class="tech-content">
                                <h4 class="tech-name">{{ tech.name }}</h4>
                                <p v-if="tech.description" class="tech-description">
                                    {{ tech.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.service-technologies {
    padding: 5rem 2rem;
    background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
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
    margin-bottom: 1rem;
}

.section-subtitle {
    font-size: 1.125rem;
    color: #666;
    text-align: center;
    margin-bottom: 4rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}

.tech-categories {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.tech-category {
    animation: fadeInUp 0.6s ease-out;
}

.category-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #667eea;
    margin-bottom: 1.5rem;
    padding-left: 1rem;
    border-left: 4px solid #667eea;
}

.tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
}

.tech-card {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.5rem;
    background: white;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    transition: all 0.3s ease;
    cursor: default;
}

.tech-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.15);
    border-color: #667eea;
}

.tech-icon {
    font-size: 2.5rem;
    line-height: 1;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
}

.tech-logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.tech-content {
    flex: 1;
    min-width: 0;
}

.tech-name {
    font-size: 1.125rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 0.5rem;
}

.tech-description {
    font-size: 0.875rem;
    color: #666;
    line-height: 1.5;
    margin: 0;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    .service-technologies {
        padding: 3rem 1rem;
    }

    .section-title {
        font-size: 2rem;
    }

    .section-subtitle {
        font-size: 1rem;
        margin-bottom: 3rem;
    }

    .tech-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .tech-card {
        padding: 1.25rem;
    }

    .category-title {
        font-size: 1.25rem;
    }
}
</style>
