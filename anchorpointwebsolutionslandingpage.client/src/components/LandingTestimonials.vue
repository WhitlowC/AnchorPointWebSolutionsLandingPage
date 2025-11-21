<script setup lang="ts">
import { ref } from 'vue'
import type { Testimonial } from '../types/testimonial'

const testimonials = ref<Testimonial[]>([
    {
        name: 'Sarah Johnson',
        role: 'CEO',
        company: 'TechStart Inc',
        content: 'Anchor Point transformed our digital presence completely. Their expertise in web development and cloud solutions helped us scale from a startup to a thriving business. Highly recommended!',
        rating: 5
    },
    {
        name: 'Michael Chen',
        role: 'Director of Operations',
        company: 'Global Retail Co',
        content: 'The e-commerce platform they built for us exceeded all expectations. Sales increased by 150% in the first quarter. Their attention to detail and ongoing support is exceptional.',
        rating: 5
    },
    {
        name: 'Emily Rodriguez',
        role: 'Founder',
        company: 'DataDrive Analytics',
        content: 'Anchor Point\'s AI systems integration transformed our operations. They implemented intelligent automation that reduced manual data processing by 75% and increased our team\'s productivity by 300%. The custom AI solutions they built now handle complex analytics that used to take days in just minutes. Game-changing results!',
        rating: 5
    },
    {
        name: 'David Thompson',
        role: 'CTO',
        company: 'FinanceFlow Systems',
        content: 'Working with Anchor Point was seamless. They delivered our API infrastructure on time and within budget. Their technical expertise and professionalism are unmatched.',
        rating: 5
    },
    {
        name: 'Jennifer Martinez',
        role: 'VP of Marketing',
        company: 'BrightPath Solutions',
        content: 'The mobile-responsive website they created for us is stunning and performs flawlessly. Our bounce rate dropped by 40% and customer engagement has never been better. True professionals!',
        rating: 5
    },
    {
        name: 'Robert Kim',
        role: 'Managing Partner',
        company: 'Summit Consulting Group',
        content: 'Their consulting services helped us navigate a complex digital transformation. The Excel optimization and data management solutions they implemented saved us countless hours. Worth every penny!',
        rating: 5
    }
])
</script>

<template>
    <section id="testimonials" class="testimonials">
        <div class="testimonials-container">
            <div class="section-header">
                <h2 class="section-title">What Our Clients Say</h2>
                <p class="section-subtitle">Don't just take our word for it - hear from businesses we've helped succeed
                </p>
            </div>

            <div class="testimonials-grid">
                <div v-for="testimonial in testimonials" :key="testimonial.name" class="testimonial-card">
                    <div class="stars">
                        <span v-for="star in testimonial.rating" :key="star" class="star">⭐</span>
                    </div>
                    <p class="testimonial-content">"{{ testimonial.content }}"</p>
                    <div class="testimonial-author">
                        <div class="author-avatar">
                            {{ testimonial.name.charAt(0) }}
                        </div>
                        <div class="author-info">
                            <h4 class="author-name">{{ testimonial.name }}</h4>
                            <p class="author-role">{{ testimonial.role }}, {{ testimonial.company }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.testimonials {
    padding: 6rem 2rem;
    background: white;
    position: relative;
    overflow: hidden;
}

.testimonials::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.3), transparent);
}

.testimonials-container {
    max-width: 1200px;
    margin: 0 auto;
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
    max-width: 600px;
    margin: 0 auto;
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.testimonial-card {
    background: #f9fafb;
    padding: 2rem;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    transition: all 0.3s;
    display: flex;
    flex-direction: column;
    position: relative;
}

.testimonial-card::before {
    content: '"';
    position: absolute;
    top: -10px;
    left: 20px;
    font-size: 6rem;
    color: rgba(102, 126, 234, 0.1);
    font-family: Georgia, serif;
    line-height: 1;
}

.testimonial-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    border-color: rgba(102, 126, 234, 0.2);
}

.stars {
    display: flex;
    gap: 0.25rem;
    margin-bottom: 1rem;
    font-size: 1rem;
}

.star {
    color: #fbbf24;
}

.testimonial-content {
    color: #1a1a1a;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    flex-grow: 1;
    font-size: 0.95rem;
}

.testimonial-author {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: auto;
}

.author-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    font-weight: 600;
    flex-shrink: 0;
}

.author-info {
    flex: 1;
}

.author-name {
    font-size: 1rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 0.25rem;
}

.author-role {
    font-size: 0.875rem;
    color: #667eea;
    font-weight: 500;
}

@media (max-width: 768px) {
    .testimonials-grid {
        grid-template-columns: 1fr;
    }

    .section-title {
        font-size: 2rem;
    }
}
</style>
