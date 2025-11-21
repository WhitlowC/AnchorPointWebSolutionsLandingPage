<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
    name: '',
    email: '',
    message: ''
})

const handleSubmit = () => {
    console.log('Form submitted:', formData.value)
    // Add your form submission logic here
}
</script>

<template>
    <section id="contact" class="contact">
        <div class="contact-content">
            <h2 class="section-title">Ready to Get Started?</h2>
            <p class="contact-text">Let's discuss how we can help transform your digital presence</p>
            <form class="contact-form" @submit.prevent="handleSubmit">
                <input v-model="formData.name" type="text" placeholder="Your Name" class="input-field" required>
                <input v-model="formData.email" type="email" placeholder="Your Email" class="input-field" required>
                <textarea v-model="formData.message" placeholder="Tell us about your project"
                    class="input-field textarea" rows="4" required></textarea>
                <button type="submit" class="submit-button">Send Message</button>
            </form>
        </div>
    </section>
</template>

<style scoped>
.contact {
    padding: 6rem 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.contact-content {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1rem;
}

.contact-text {
    font-size: 1.2rem;
    margin-bottom: 3rem;
    opacity: 0.9;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.input-field {
    padding: 1rem 1.5rem;
    border-radius: 10px;
    border: none;
    font-size: 1rem;
    font-family: inherit;
}

.textarea {
    resize: vertical;
}

.submit-button {
    padding: 1rem 2rem;
    background: white;
    color: #667eea;
    border: none;
    border-radius: 30px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
}

.submit-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}
</style>
