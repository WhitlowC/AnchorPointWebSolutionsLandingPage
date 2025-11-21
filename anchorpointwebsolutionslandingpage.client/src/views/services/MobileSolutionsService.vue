<template>
    <div class="mobile-solutions-service">
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

interface Example {
    title: string
    description: string
    type: 'code' | 'ui' | 'demo' | 'phone-demo' | 'tablet-demo'
    content: string
    language?: string
    preview?: string
}

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
    title: 'Mobile Solutions',
    icon: '📱',
    tagline: 'Native and cross-platform mobile apps that deliver exceptional user experiences',
    description: 'Transform your business with custom mobile applications designed for iOS, Android, and cross-platform deployment. We create intuitive, high-performance mobile solutions that engage users and drive business growth, from consumer apps to enterprise mobility solutions.',
    features: [
        'Native iOS & Android Development',
        'Cross-Platform React Native Apps',
        'Progressive Web Apps (PWA)',
        'Mobile-First Responsive Design',
        'Offline Functionality & Sync',
        'Push Notifications & Real-Time Updates'
    ],
    technologies: [
        {
            name: 'React Native',
            category: 'Mobile Framework',
            description: 'Build native apps for iOS and Android with one codebase',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        },
        {
            name: 'Flutter',
            category: 'Mobile Framework',
            description: 'Google\'s UI toolkit for beautiful, natively compiled applications',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg'
        },
        {
            name: 'Swift',
            category: 'iOS Native',
            description: 'Modern programming language for iOS app development',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg'
        },
        {
            name: 'Kotlin',
            category: 'Android Native',
            description: 'Modern language for Android development',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg'
        },
        {
            name: 'TypeScript',
            category: 'Language',
            description: 'Type-safe development for reliable mobile apps',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
        },
        {
            name: 'Firebase',
            category: 'Backend',
            description: 'Real-time database, authentication, and cloud functions',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
        },
        {
            name: 'Redux',
            category: 'State Management',
            description: 'Predictable state container for JavaScript apps',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
        },
        {
            name: 'Expo',
            category: 'Development Tools',
            description: 'Framework for universal React Native applications',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        },
        {
            name: 'GraphQL',
            category: 'API',
            description: 'Efficient data fetching for mobile applications',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg'
        }
    ],
    caseStudies: [
        {
            title: 'Fitness Tracking Mobile App',
            client: 'HealthFit Pro',
            challenge: 'HealthFit needed a cross-platform mobile app with offline workout tracking, real-time syncing, and integration with wearable devices, while maintaining native performance.',
            solution: 'Built a React Native app with Redux for state management, SQLite for offline storage, and Firebase for real-time sync. Integrated with Apple HealthKit and Google Fit for seamless wearable connectivity.',
            results: [
                '150K+ downloads in first 6 months',
                '4.8/5 star rating on both app stores',
                'Offline mode enabled 99% uptime',
                '60% user retention after 90 days'
            ]
        },
        {
            title: 'Field Service Management App',
            client: 'ServiceTech Solutions',
            challenge: 'ServiceTech required a native mobile solution for field technicians to manage work orders, capture signatures, and access equipment manuals without internet connectivity.',
            solution: 'Developed native iOS and Android apps with offline-first architecture, local data encryption, GPS tracking, and seamless background sync when connectivity is restored.',
            results: [
                '85% reduction in paperwork processing time',
                '40% increase in daily jobs completed',
                'Real-time job status updates for customers',
                'ROI achieved within 4 months'
            ]
        }
    ] as CaseStudy[],
    benefits: [
        'Cross-platform development reduces time and cost',
        'Native performance and smooth user experience',
        'Offline capabilities for uninterrupted usage',
        'App Store optimization and deployment support',
        'Regular updates and maintenance',
        'Analytics and performance monitoring'
    ],
    examples: [
        {
            title: 'Mobile Phone App',
            description: 'Interactive mobile app demo with authentication, navigation, and real-time features - optimized for smartphone screens',
            type: 'phone-demo' as const,
            language: 'React Native / Flutter',
            content: ''
        },
        {
            title: 'Tablet Dashboard',
            description: 'Enterprise tablet application with data visualization and multi-panel layout - designed for larger touch screens',
            type: 'tablet-demo' as const,
            language: 'React Native / Swift / Kotlin',
            content: ''
        }
    ]
}
</script>

<style scoped>
.mobile-solutions-service {
    width: 100%;
    overflow-x: hidden;
}
</style>
