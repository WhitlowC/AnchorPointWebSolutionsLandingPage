<template>
    <div class="web-development-service">
        <NavigationBar />
        <ServiceDetailHero :title="serviceData.title" :icon="serviceData.icon" :tagline="serviceData.tagline" />
        <ServiceDetailDescription :description="serviceData.description" />
        <ServiceDetailFeaturesEnhanced :features="serviceData.features" :examples="serviceData.examples" />
        <ServiceDetailTechnologies :technologies="serviceData.technologies" />
        <ServiceDetailCaseStudies :case-studies="serviceData.caseStudies" />
        <ServiceDetailBenefits :benefits="serviceData.benefits" :service-title="serviceData.title" />
        <ServiceDetailCTA :service-title="serviceData.title" />
        <AppFooter />
    </div>
</template>

<script setup lang="ts">
import NavigationBar from '../../components/NavigationBar.vue'
import AppFooter from '../../components/AppFooter.vue'
import ServiceDetailHero from '../../components/service-detail/ServiceDetailHero.vue'
import ServiceDetailDescription from '../../components/service-detail/ServiceDetailDescription.vue'
import ServiceDetailFeaturesEnhanced from '../../components/service-detail/ServiceDetailFeaturesEnhanced.vue'
import ServiceDetailTechnologies from '../../components/service-detail/ServiceDetailTechnologies.vue'
import ServiceDetailCaseStudies from '../../components/service-detail/ServiceDetailCaseStudies.vue'
import ServiceDetailBenefits from '../../components/service-detail/ServiceDetailBenefits.vue'
import ServiceDetailCTA from '../../components/service-detail/ServiceDetailCTA.vue'
import type { CaseStudy, Technology } from '../../types/serviceDetail'
import { serviceDetailsData } from '../../data/serviceDetails'

interface Example {
    title: string
    description: string
    type: 'code' | 'ui' | 'demo' | 'api-demo' | 'spa-demo' | 'dashboard-demo'
    content: string
    language?: string
    preview?: string
}

// Get service data from centralized data source
const baseServiceData = serviceDetailsData['web-development']

const serviceData: {
    title: string
    icon: string
    tagline: string
    description: string
    features: string[]
    technologies: Technology[]
    caseStudies: CaseStudy[]
    benefits: string[]
    examples: Example[]
} = {
    title: baseServiceData.title,
    icon: baseServiceData.icon,
    tagline: baseServiceData.tagline,
    description: baseServiceData.description,
    features: [
        'Component-Based Architecture',
        'Real-Time Data Integration',
        'Progressive Web App Capabilities',
        'API Development & Integration',
        'Responsive Cross-Device Design',
        'Performance Optimization'
    ],
    technologies: baseServiceData.technologies as Technology[],
    caseStudies: [
        {
            title: 'Enterprise Dashboard Transformation',
            client: 'TechStart Inc',
            challenge: 'TechStart needed a complete overhaul of their legacy dashboard system that was slow, difficult to maintain, and lacked mobile responsiveness.',
            solution: 'We built a modern Vue.js application with TypeScript, implementing a component-based architecture with real-time data visualization, progressive enhancement, and mobile-first design.',
            results: [
                '70% reduction in page load times',
                '95% improvement in mobile user experience scores',
                '50% decrease in maintenance costs',
                '300% increase in user engagement'
            ]
        },
        {
            title: 'Multi-tenant SaaS Platform',
            client: 'CloudFlow Solutions',
            challenge: 'CloudFlow required a scalable SaaS platform to serve multiple enterprise clients with customizable features and white-label capabilities.',
            solution: 'Built a robust multi-tenant architecture using React and Node.js with PostgreSQL, implementing role-based access control, custom theming, and modular plugin system.',
            results: [
                'Successfully onboarded 50+ enterprise clients',
                '99.9% uptime maintained',
                'Reduced onboarding time from weeks to hours',
                'Scaled to handle 100K+ concurrent users'
            ]
        }
    ] as CaseStudy[],
    benefits: [
        'Responsive, mobile-first design that works on all devices',
        'SEO-optimized architecture for better search visibility',
        'Fast loading times and optimal performance',
        'Scalable solutions that grow with your business',
        'Security best practices and regular updates',
        'Ongoing maintenance and support'
    ],
    examples: [
        {
            title: 'Vue 3 SPA Demo',
            description: 'Multi-section productivity app with navigation, task management, and team view - built with Vue 3, TypeScript, and Composition API',
            type: 'spa-demo' as const,
            language: 'Vue 3 + TypeScript',
            content: '' // Code is now in SpaCodeExample.ts
        },
        {
            title: 'REST API Demo',
            description: 'ASP.NET Core Web API in action - see the backend code and test the live API responses',
            type: 'api-demo' as const,
            language: 'C# / ASP.NET Core',
            content: '' // Code is now in ApiCodeExample.ts
        },
        {
            title: 'Dashboard Components',
            description: 'Modern dashboard built with reusable components and responsive design',
            type: 'dashboard-demo' as const,
            language: 'Vue 3 / React / HTML+CSS',
            content: '' // Code is now in DashboardCodeExample.ts
        }
    ]
}
</script>

<style scoped>
.web-development-service {
    width: 100%;
    overflow-x: hidden;
}
</style>
