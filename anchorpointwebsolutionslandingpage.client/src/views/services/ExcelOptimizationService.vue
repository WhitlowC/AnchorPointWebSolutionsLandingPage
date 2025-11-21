<template>
    <div class="excel-optimization-service">
        <NavigationBar />
        <ServiceDetailHero :title="serviceData.title" :icon="serviceData.icon" :tagline="serviceData.tagline" />
        <ServiceDetailDescription :description="serviceData.description" />
        <ServiceDetailFeatures :features="serviceData.features" />
        <ExcelExamples />
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
import ServiceDetailFeatures from '../../components/service-detail/ServiceDetailFeatures.vue'
import ExcelExamples from '../../components/demos/ExcelExamples.vue'
import ServiceDetailCaseStudies from '../../components/service-detail/ServiceDetailCaseStudies.vue'
import ServiceDetailBenefits from '../../components/service-detail/ServiceDetailBenefits.vue'
import ServiceDetailCTA from '../../components/service-detail/ServiceDetailCTA.vue'
import type { CaseStudy } from '../../types/serviceDetail'

const serviceData: {
    title: string
    icon: string
    tagline: string
    description: string
    features: string[]
    caseStudies: CaseStudy[]
    benefits: string[]
} = {
    title: 'Excel Optimization',
    icon: '📊',
    tagline: 'Transform your data workflows with advanced Excel optimization and automation',
    description: 'Our Excel optimization services help businesses unlock the full potential of their spreadsheets. From complex data cleanup and advanced queries to custom automation and performance optimization, we transform your Excel workflows into powerful, efficient tools that save time and reduce errors.',
    features: [
        'Advanced Formula & Query Optimization',
        'Data Cleanup & Standardization',
        'Custom VBA Automation',
        'Power Query ETL Solutions',
        'Dynamic Dashboard Creation',
        'Large Dataset Performance Tuning'
    ],
    caseStudies: [
        {
            title: 'Financial Reporting Automation',
            client: 'Regional Finance Corp',
            challenge: 'Finance team spent 40+ hours monthly compiling reports from multiple Excel files with inconsistent formatting, leading to frequent errors and delayed decision-making.',
            solution: 'Implemented Power Query ETL pipelines to automatically consolidate data from 50+ source files, created standardized templates with dynamic formulas, and built VBA automation for one-click report generation.',
            results: [
                '90% reduction in report compilation time',
                '95% decrease in data entry errors',
                'Real-time dashboard for executive insights',
                'Saved 160+ hours per month across the team'
            ]
        },
        {
            title: 'Inventory Management Optimization',
            client: 'Midwest Distribution LLC',
            challenge: 'Massive inventory spreadsheet with 100K+ rows was taking 5+ minutes to update, causing workflow delays and frequent crashes.',
            solution: 'Optimized formulas by replacing volatile functions, implemented structured tables, created indexed lookups, and built Power Query for data preprocessing. Added dynamic named ranges and conditional formatting optimization.',
            results: [
                'File load time reduced from 5 minutes to 15 seconds',
                'Calculation speed improved by 85%',
                'Zero crashes since optimization',
                'Enabled real-time inventory tracking'
            ]
        }
    ] as CaseStudy[],
    benefits: [
        'Dramatic reduction in manual data entry and processing time',
        'Elimination of common errors through automation and validation',
        'Scalable solutions that handle growing datasets efficiently',
        'User-friendly interfaces that require minimal training',
        'Integration with external databases and business systems',
        'Comprehensive documentation and ongoing support'
    ]
}
</script>

<style scoped>
.excel-optimization-service {
    width: 100%;
    overflow-x: hidden;
}
</style>
