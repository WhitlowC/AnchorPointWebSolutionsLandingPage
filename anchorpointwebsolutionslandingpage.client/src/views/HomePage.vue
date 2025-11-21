<script setup lang="ts">
import NavigationBar from '../components/NavigationBar.vue'
import LandingHero from '../components/LandingHero.vue'
import LandingServices from '../components/LandingServices.vue'
import LandingTestimonials from '../components/LandingTestimonials.vue'
import LandingAbout from '../components/LandingAbout.vue'
import LandingContact from '../components/LandingContact.vue'
import AppFooter from '../components/AppFooter.vue'

const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
    <div class="home-page">
        <NavigationBar />
        <LandingHero @contact-click="scrollToContact" />
        <LandingServices />
        <LandingTestimonials />
        <LandingAbout />
        <LandingContact />
        <AppFooter />
    </div>
</template>

<style scoped>
.home-page {
    width: 100%;
    overflow-x: hidden;
}
</style>
