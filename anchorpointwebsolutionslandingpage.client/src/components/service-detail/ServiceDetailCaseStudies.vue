<script setup lang="ts">
import type { CaseStudy } from '../../types/serviceDetail'

defineProps<{
    caseStudies: CaseStudy[]
}>()
</script>

<template>
    <section class="case-studies">
        <div class="container">
            <h2 class="section-title">Success Stories</h2>
            <div class="case-studies-grid">
                <div v-for="caseStudy in caseStudies" :key="caseStudy.title" class="case-study-card">
                    <h3 class="case-study-title">{{ caseStudy.title }}</h3>
                    <p class="case-study-client">Client: {{ caseStudy.client }}</p>

                    <div class="case-study-section">
                        <h4>The Challenge</h4>
                        <p>{{ caseStudy.challenge }}</p>
                    </div>

                    <div class="case-study-section">
                        <h4>Our Solution</h4>
                        <p>{{ caseStudy.solution }}</p>
                    </div>

                    <div class="case-study-section">
                        <h4>Results</h4>
                        <ul class="results-list">
                            <li v-for="result in caseStudy.results" :key="result">{{ result }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.case-studies {
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

.case-studies-grid {
    display: grid;
    gap: 3rem;
}

.case-study-card {
    background: white;
    padding: 3rem;
    border-radius: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    border-left: 5px solid #667eea;
}

.case-study-title {
    font-size: 1.8rem;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 0.5rem;
}

.case-study-client {
    font-size: 1.1rem;
    color: #667eea;
    font-weight: 600;
    margin-bottom: 2rem;
}

.case-study-section {
    margin-bottom: 2rem;
}

.case-study-section h4 {
    font-size: 1.2rem;
    color: #1a1a1a;
    margin-bottom: 0.75rem;
    font-weight: 600;
}

.case-study-section p {
    color: #4a5568;
    line-height: 1.7;
}

.results-list {
    list-style: none;
    padding: 0;
}

.results-list li {
    padding: 0.5rem 0;
    color: #4a5568;
    position: relative;
    padding-left: 1.5rem;
}

.results-list li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #667eea;
    font-weight: 700;
}

@media (max-width: 768px) {
    .section-title {
        font-size: 2rem;
    }
}
</style>
