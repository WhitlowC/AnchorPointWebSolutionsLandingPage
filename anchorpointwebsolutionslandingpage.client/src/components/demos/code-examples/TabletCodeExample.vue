<template>
    <div class="code-example">
        <div class="code-header">
            <span class="code-language">Vue 3 / TypeScript</span>
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

const codeContent = ref(`<!-- EnterpriseDashboard.vue - Tablet Dashboard -->
<script setup lang="ts">
import { ref } from 'vue'

interface Metric {
  icon: string
  label: string
  value: string
  change: string
}

const activeView = ref('dashboard')

const metrics = ref<Metric[]>([
  { icon: '💰', label: 'Revenue', 
    value: '$54,239', change: '+12.5%' },
  { icon: '👥', label: 'Customers', 
    value: '1,429', change: '+8.2%' },
  { icon: '📦', label: 'Orders', 
    value: '342', change: '-3.1%' },
  { icon: '⭐', label: 'Rating', 
    value: '4.8/5', change: '+0.3' }
])

const chartData = ref([65, 78, 45, 89, 72, 95])

const setActiveView = (view: string) => {
  activeView.value = view
}

const isChangePositive = (change: string) => {
  return change.startsWith('+')
}
</script>

<template>
  <div class="dashboard-container">
    <!-- Sidebar Navigation -->
    <aside class="sidebar">
      <div class="sidebar-header">
        <span class="company-logo">🏢</span>
        <h1 class="company-name">TechCorp</h1>
      </div>

      <button class="nav-button" :class="{ active: activeView === 'dashboard' }" @click="setActiveView('dashboard')">
        <span class="nav-icon">📊</span>
        <span class="nav-label">Dashboard</span>
      </button>

      <button class="nav-button" :class="{ active: activeView === 'analytics' }" @click="setActiveView('analytics')">
        <span class="nav-icon">📈</span>
        <span class="nav-label">Analytics</span>
      </button>

      <button class="nav-button" :class="{ active: activeView === 'team' }" @click="setActiveView('team')">
        <span class="nav-icon">👥</span>
        <span class="nav-label">Team</span>
      </button>
    </aside>

    <!-- Content Area -->
    <main class="content">
      <h2 class="title">Dashboard Overview</h2>

      <!-- Metrics Grid -->
      <div class="metrics-grid">
        <div v-for="metric in metrics" :key="metric.label" class="metric-card">
          <span class="metric-icon">{{ metric.icon }}</span>
          <div class="metric-info">
            <div class="metric-value">{{ metric.value }}</div>
            <div class="metric-label">{{ metric.label }}</div>
            <div class="metric-change" :class="isChangePositive(metric.change)
              ? 'positive'
              : 'negative'">
              {{ metric.change }}
            </div>
          </div>
        </div>
      </div>

      <!-- Charts Section -->
      <div class="charts-section">
        <div class="chart-card">
          <h3 class="chart-title">Sales Performance</h3>
          <div class="chart-bars">
            <div v-for="(value, index) in chartData" :key="index" class="chart-bar" :style="{ height: value + '%' }" />
          </div>
        </div>

        <div class="chart-card">
          <h3 class="chart-title">Revenue</h3>
          <div class="revenue-total">$2.4M</div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.dashboard-container {
  display: flex;
  height: 100%;
  background: #f9fafb;
}

.sidebar {
  width: 200px;
  background: #fff;
  border-right: 1px solid #e5e7eb;
}

.content {
  flex: 1;
  padding: 24px;
  overflow-y: auto;
}

.metrics-grid {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
}

.metric-card {
  flex: 1;
  display: flex;
  gap: 16px;
  background: #fff;
  padding: 20px;
  border-radius: 12px;
}

.charts-section {
  display: flex;
  gap: 16px;
}

.chart-card {
  flex: 1;
  background: #fff;
  padding: 24px;
  border-radius: 12px;
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
  height: 100%;
  display: flex;
  flex-direction: column;
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
  overflow-x: auto;
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
