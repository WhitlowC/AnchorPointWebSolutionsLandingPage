<script setup lang="ts">
const emit = defineEmits<{
  contactClick: []
}>()

const handleContactClick = () => {
  emit('contactClick')
}
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">
        Your <span class="gradient-text bold">Anchor Point</span> in the Digital Ocean
      </h1>
      <p class="hero-motto">
        "Grounded in trust, guided by innovation, anchoring success one solution at a time."
      </p>
      <p class="hero-subtitle">
        We craft exceptional web solutions that drive business growth.
        From concept to deployment, we're your trusted partner in digital excellence.
      </p>
      <div class="hero-buttons">
        <button class="primary-button" @click="handleContactClick">Start Your Project</button>
        <button class="secondary-button">View Our Work</button>
      </div>
    </div>
    <div class="hero-visual">
      <div class="floating-card card-1"></div>
      <div class="floating-card card-2"></div>
      <div class="floating-card card-3"></div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  margin-top: 80px;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 4rem 2rem;
  gap: 4rem;
}

.hero-content {
  flex: 1;
  max-width: 600px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 400;
  line-height: 1.2;
  color: #667eea;
  margin-bottom: 1.5rem;
}

.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gradient-text.bold {
  font-weight: 800;
}

.hero-motto {
  font-size: 1.1rem;
  font-style: italic;
  color: #667eea;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #4a5568;
  line-height: 1.8;
  margin-bottom: 2.5rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.primary-button,
.secondary-button {
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.primary-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
}

.primary-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
}

.secondary-button {
  background: white;
  color: #667eea;
  border: 2px solid #667eea;
}

.secondary-button:hover {
  background: #667eea;
  color: white;
}

.hero-visual {
  flex: 1;
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.floating-card {
  position: absolute;
  border-radius: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  animation: float 6s ease-in-out infinite;
}

.card-1 {
  width: 200px;
  height: 250px;
  top: 10%;
  left: 10%;
  opacity: 0.9;
}

.card-2 {
  width: 180px;
  height: 220px;
  top: 40%;
  right: 10%;
  opacity: 0.7;
  animation-delay: -2s;
}

.card-3 {
  width: 160px;
  height: 200px;
  bottom: 10%;
  left: 30%;
  opacity: 0.5;
  animation-delay: -4s;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-visual {
    display: none;
  }
}
</style>
