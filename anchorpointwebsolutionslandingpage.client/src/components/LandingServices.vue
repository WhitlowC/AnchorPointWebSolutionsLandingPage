<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { Service } from '../types/service'

const router = useRouter()

const services = ref<Service[]>([
    {
        title: 'Web Development',
        description: 'Custom websites and web applications built with modern technologies',
        icon: '🚀'
    },
    {
        title: 'AI Systems Integration',
        description: 'Intelligent automation and AI-powered solutions for your business',
        icon: '🤖'
    },
    {
        title: 'E-Commerce Solutions',
        description: 'Scalable online stores with seamless payment integration',
        icon: '🛒'
    },
    {
        title: 'Cloud Services',
        description: 'Reliable cloud hosting and infrastructure management',
        icon: '☁️'
    },
    {
        title: 'Data Warehousing',
        description: 'Enterprise data warehousing solutions and analytics infrastructure',
        icon: '🗄️'
    },
    {
        title: 'Excel Optimization',
        description: 'Data cleanup, advanced querying, and Excel workflow optimization',
        icon: '📊'
    },
    {
        title: 'Mobile Solutions',
        description: 'Responsive designs that work beautifully on any device',
        icon: '📱'
    },
    {
        title: 'Consulting',
        description: 'Strategic guidance for your digital transformation',
        icon: '💡'
    }
])

const getServiceId = (title: string): string => {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-')
}

const navigateToService = (serviceTitle: string) => {
    const serviceId = getServiceId(serviceTitle)
    router.push(`/services/${serviceId}`)
}
</script>

<template>
    <section id="services" class="services">
        <div class="section-header">
            <h2 class="section-title">Our Services</h2>
            <p class="section-subtitle">Comprehensive web solutions tailored to your needs</p>
        </div>
        <div class="services-grid">
            <div v-for="service in services" :key="service.title" class="service-card"
                @click="navigateToService(service.title)">
                <div class="service-icon">{{ service.icon }}</div>
                <h3 class="service-title">{{ service.title }}</h3>
                <p class="service-description">{{ service.description }}</p>
                <div class="learn-more">Learn More →</div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.services {
    padding: 6rem 2rem;
    background: #f9fafb;
}

.section-header {
    text-align: center;
    margin-bottom: 4rem;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 1rem;
}

.section-subtitle {
    font-size: 1.2rem;
    color: #4a5568;
}

.services-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.service-card {
    background: white;
    padding: 2.5rem;
    border-radius: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: all 0.3s;
    border: 1px solid rgba(0, 0, 0, 0.05);
    cursor: pointer;
    position: relative;
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-color: rgba(102, 126, 234, 0.3);
}

.service-icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
}

.service-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 1rem;
}

.service-description {
    color: #4a5568;
    line-height: 1.6;
    margin-bottom: 1rem;
}

.learn-more {
    color: #667eea;
    font-weight: 600;
    font-size: 0.95rem;
    margin-top: 1rem;
    opacity: 0;
    transition: opacity 0.3s;
}

.service-card:hover .learn-more {
    opacity: 1;
}

@media (max-width: 768px) {
    .services-grid {
        grid-template-columns: 1fr;
    }
}
</style>
