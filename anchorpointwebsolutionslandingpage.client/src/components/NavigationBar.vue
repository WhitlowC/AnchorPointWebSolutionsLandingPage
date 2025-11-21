<template>
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo" @click="navigateToHome">
                <span class="logo-icon">⚓</span>
                <span class="logo-text">Anchor Point</span>
            </div>
            <div class="nav-links">
                <a @click.prevent="navigateToSection('services')">Services</a>
                <a @click.prevent="navigateToSection('about')">About</a>
                <a @click.prevent="navigateToSection('contact')" class="cta-button">Get Started</a>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const navigateToHome = () => {
    router.push('/')
}

const navigateToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (route.name !== 'home') {
        router.push(`/#${sectionId}`)
    } else {
        // If we're already on home, just scroll to the section
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }
}
</script>

<style scoped>
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    z-index: 1000;
    padding: 1.2rem 0;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: #1a1a1a;
    cursor: pointer;
    transition: opacity 0.3s;
}

.logo:hover {
    opacity: 0.7;
}

.logo-icon {
    font-size: 1.8rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.nav-links {
    display: flex;
    gap: 2rem;
    align-items: center;
}

.nav-links a {
    color: #4a5568;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    cursor: pointer;
}

.nav-links a:hover {
    color: #2563eb;
}

.cta-button {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white !important;
    padding: 0.6rem 1.5rem;
    border-radius: 25px;
    font-weight: 600;
}

@media (max-width: 768px) {
    .nav-links {
        gap: 1rem;
    }

    .nav-links a {
        font-size: 0.9rem;
    }
}
</style>
