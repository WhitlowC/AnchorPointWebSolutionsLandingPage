<template>
    <div class="code-example">
        <div class="code-header">
            <span class="code-language">Vue 3 + TypeScript</span>
            <div class="code-dots">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
            </div>
        </div>
        <pre class="code-content"><code>{{ codeContent }}</code></pre>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const codeContent = ref(`<!-- FitnessApp.vue - Vue 3 Mobile App -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

interface Stats {
  steps: number
  calories: number
  heartRate: number
}

interface StatCardProps {
  icon: string
  value: number
  label: string
}

const router = useRouter()
const currentTab = ref('home')

const stats = ref<Stats>({
  steps: 8542,
  calories: 420,
  heartRate: 72
})

const startWorkout = () => {
  console.log('Starting workout...')
  router.push('/workout')
}

const navigateToTab = (tab: string) => {
  currentTab.value = tab
  router.push(\`/\${tab}\`)
}

onMounted(() => {
  // Fetch initial stats
  fetchStats()
})

const fetchStats = async () => {
  // Simulated API call
  const response = await fetch('/api/stats')
  const data = await response.json()
  stats.value = data
}
</script>

<template>
  <div class="app-container">
    <!-- Main Content -->
    <div class="content-area">
      <header class="app-header">
        <h1 class="app-title">FitTracker</h1>
      </header>

      <div class="stats-container">
        <div class="stat-card">
          <span class="stat-icon">🏃</span>
          <div class="stat-value">{{ stats.steps }}</div>
          <div class="stat-label">Steps</div>
        </div>

        <div class="stat-card">
          <span class="stat-icon">🔥</span>
          <div class="stat-value">{{ stats.calories }}</div>
          <div class="stat-label">Calories</div>
        </div>

        <div class="stat-card">
          <span class="stat-icon">❤️</span>
          <div class="stat-value">{{ stats.heartRate }}</div>
          <div class="stat-label">Heart Rate</div>
        </div>
      </div>

      <button class="action-button" @click="startWorkout">
        <span class="button-text">Start Workout</span>
      </button>
    </div>

    <!-- Bottom Navigation -->
    <nav class="bottom-nav">
      <button class="nav-item" :class="{ active: currentTab === 'home' }" @click="navigateToTab('home')">
        <span class="nav-icon">🏠</span>
        <span class="nav-label">Home</span>
      </button>

      <button class="nav-item" :class="{ active: currentTab === 'workout' }" @click="navigateToTab('workout')">
        <span class="nav-icon">💪</span>
        <span class="nav-label">Workout</span>
      </button>

      <button class="nav-item" :class="{ active: currentTab === 'profile' }" @click="navigateToTab('profile')">
        <span class="nav-icon">👤</span>
        <span class="nav-label">Profile</span>
      </button>
    </nav>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #fff;
}

.content-area {
  flex: 1;
  overflow-y: auto;
}

.app-header {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stats-container {
  display: flex;
  gap: 10px;
  padding: 16px;
}

.stat-card {
  flex: 1;
  background: #667eea;
  padding: 16px;
  border-radius: 12px;
  text-align: center;
  color: white;
}

.action-button {
  margin: 16px;
  padding: 16px;
  background: #667eea;
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}

.bottom-nav {
  display: flex;
  border-top: 1px solid #e5e7eb;
  background: white;
}

.nav-item {
  flex: 1;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  border: none;
  background: transparent;
  cursor: pointer;
}

.nav-item.active {
  color: #667eea;
}
</style>`)
</script>

<style scoped>
.code-example {
  background: #1e1e1e;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border: 1px solid #2d2d2d;
  display: flex;
  flex-direction: column;
  max-height: 800px;
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: #2d2d2d;
  border-bottom: 1px solid #3d3d3d;
}

.code-language {
  font-size: 0.875rem;
  color: #a0a0a0;
  font-weight: 500;
}

.code-dots {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red {
  background: #ef4444;
}

.dot.yellow {
  background: #f59e0b;
}

.dot.green {
  background: #10b981;
}

.code-content {
  flex: 1;
  margin: 0;
  padding: 1.5rem;
  overflow: auto;
  overscroll-behavior: auto;
  min-height: 0;
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  color: #d4d4d4;
  background: #1e1e1e;
}

.code-content code {
  color: #d4d4d4;
  display: block;
  white-space: pre;
  min-width: max-content;
}

@media (max-width: 768px) {
  .code-content {
    font-size: 0.75rem;
    padding: 1rem;
  }
}
</style>
