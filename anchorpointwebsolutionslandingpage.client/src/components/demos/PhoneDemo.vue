<template>
    <div class="phone-demo">
        <div class="phone-frame">
            <!-- Phone Notch -->
            <div class="phone-notch"></div>

            <!-- Phone Screen -->
            <div class="phone-screen">
                <!-- Status Bar -->
                <div class="status-bar">
                    <span class="time">9:41</span>
                    <div class="status-icons">
                        <span class="signal">📶</span>
                        <span class="wifi">📡</span>
                        <span class="battery">🔋</span>
                    </div>
                </div>

                <!-- App Content -->
                <div class="app-content" :class="{ 'slide-left': transitioning }">
                    <!-- Home Screen -->
                    <div v-if="currentScreen === 'home'" class="screen home-screen">
                        <div class="app-header">
                            <h2>FitTracker</h2>
                            <button class="profile-btn" @click="navigateTo('profile')">👤</button>
                        </div>

                        <div class="stats-cards">
                            <div class="stat-card">
                                <div class="stat-icon">🏃</div>
                                <div class="stat-value">8,542</div>
                                <div class="stat-label">Steps</div>
                            </div>
                            <div class="stat-card">
                                <div class="stat-icon">🔥</div>
                                <div class="stat-value">420</div>
                                <div class="stat-label">Calories</div>
                            </div>
                            <div class="stat-card">
                                <div class="stat-icon">❤️</div>
                                <div class="stat-value">72</div>
                                <div class="stat-label">Heart Rate</div>
                            </div>
                        </div>

                        <div class="activity-section">
                            <h3>Today's Activity</h3>
                            <div class="activity-chart">
                                <div class="chart-bar" v-for="hour in 24" :key="hour"
                                    :style="{ height: getBarHeight(hour) + '%' }">
                                </div>
                            </div>
                        </div>

                        <button class="action-btn" @click="navigateTo('workout')">
                            Start Workout
                        </button>
                    </div>

                    <!-- Workout Screen -->
                    <div v-if="currentScreen === 'workout'" class="screen workout-screen">
                        <div class="app-header">
                            <button class="back-btn" @click="navigateTo('home')">←</button>
                            <h2>Workout</h2>
                            <button class="settings-btn">⚙️</button>
                        </div>

                        <div class="workout-timer">
                            <div class="timer-circle">
                                <svg viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="45" class="timer-bg"></circle>
                                    <circle cx="50" cy="50" r="45" class="timer-progress"
                                        :style="{ strokeDashoffset: timerOffset }"></circle>
                                </svg>
                                <div class="timer-text">
                                    <div class="timer-value">{{ timerDisplay }}</div>
                                    <div class="timer-label">{{ workoutRunning ? 'Running' : 'Paused' }}</div>
                                </div>
                            </div>
                        </div>

                        <div class="workout-stats">
                            <div class="workout-stat">
                                <span class="stat-label">Distance</span>
                                <span class="stat-value">2.4 km</span>
                            </div>
                            <div class="workout-stat">
                                <span class="stat-label">Pace</span>
                                <span class="stat-value">5:20/km</span>
                            </div>
                        </div>

                        <button class="action-btn" @click="toggleWorkout">
                            {{ workoutRunning ? 'Pause' : 'Start' }}
                        </button>
                    </div>

                    <!-- Profile Screen -->
                    <div v-if="currentScreen === 'profile'" class="screen profile-screen">
                        <div class="app-header">
                            <button class="back-btn" @click="navigateTo('home')">←</button>
                            <h2>Profile</h2>
                            <button class="edit-btn">✏️</button>
                        </div>

                        <div class="profile-info">
                            <div class="avatar">👤</div>
                            <h3>John Doe</h3>
                            <p>Fitness Enthusiast</p>
                        </div>

                        <div class="profile-stats">
                            <div class="profile-stat-item">
                                <span class="label">Total Workouts</span>
                                <span class="value">127</span>
                            </div>
                            <div class="profile-stat-item">
                                <span class="label">Streak Days</span>
                                <span class="value">15 🔥</span>
                            </div>
                            <div class="profile-stat-item">
                                <span class="label">Member Since</span>
                                <span class="value">Jan 2024</span>
                            </div>
                        </div>

                        <div class="achievements">
                            <h4>Recent Achievements</h4>
                            <div class="achievement-badges">
                                <span class="badge">🏆</span>
                                <span class="badge">🎯</span>
                                <span class="badge">⭐</span>
                                <span class="badge">💪</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bottom Navigation -->
                <div class="bottom-nav">
                    <button @click="navigateTo('home')" :class="{ active: currentScreen === 'home' }">
                        <span class="nav-icon">🏠</span>
                        <span class="nav-label">Home</span>
                    </button>
                    <button @click="navigateTo('workout')" :class="{ active: currentScreen === 'workout' }">
                        <span class="nav-icon">🏃</span>
                        <span class="nav-label">Workout</span>
                    </button>
                    <button @click="navigateTo('profile')" :class="{ active: currentScreen === 'profile' }">
                        <span class="nav-icon">👤</span>
                        <span class="nav-label">Profile</span>
                    </button>
                </div>
            </div>

            <!-- Phone Home Indicator -->
            <div class="home-indicator"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const currentScreen = ref<'home' | 'workout' | 'profile'>('home')
const transitioning = ref(false)
const workoutRunning = ref(false)
const timerSeconds = ref(0)
const timerInterval = ref<number | null>(null)

const timerDisplay = computed(() => {
    const minutes = Math.floor(timerSeconds.value / 60)
    const seconds = timerSeconds.value % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
})

const timerOffset = computed(() => {
    const circumference = 2 * Math.PI * 45
    const progress = (timerSeconds.value % 60) / 60
    return circumference * (1 - progress)
})

function navigateTo(screen: 'home' | 'workout' | 'profile') {
    if (screen === currentScreen.value) return

    transitioning.value = true
    setTimeout(() => {
        currentScreen.value = screen
        transitioning.value = false
    }, 300)
}

function toggleWorkout() {
    workoutRunning.value = !workoutRunning.value

    if (workoutRunning.value) {
        timerInterval.value = window.setInterval(() => {
            timerSeconds.value++
        }, 1000)
    } else {
        if (timerInterval.value) {
            clearInterval(timerInterval.value)
            timerInterval.value = null
        }
    }
}

function getBarHeight(hour: number): number {
    // Generate pseudo-random heights for activity bars
    return 20 + (Math.sin(hour * 0.5) * 40 + Math.cos(hour * 0.7) * 20 + 30)
}
</script>

<style scoped>
.phone-demo {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 1rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 12px;
    min-height: 600px;
}

.phone-frame {
    position: relative;
    width: 320px;
    height: 650px;
    background: #1a1a1a;
    border-radius: 40px;
    padding: 12px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.phone-notch {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 140px;
    height: 25px;
    background: #1a1a1a;
    border-radius: 0 0 20px 20px;
    z-index: 10;
}

.phone-screen {
    position: relative;
    width: 100%;
    height: 100%;
    background: #ffffff;
    border-radius: 32px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.status-bar {
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    font-size: 12px;
    z-index: 5;
}

.status-icons {
    display: flex;
    gap: 8px;
}

.app-content {
    flex: 1;
    overflow-y: auto;
    position: relative;
}

.screen {
    padding: 16px;
    animation: slideIn 0.3s ease-out;
}

.slide-left {
    animation: slideOut 0.3s ease-out;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(20px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideOut {
    from {
        opacity: 1;
        transform: translateX(0);
    }

    to {
        opacity: 0;
        transform: translateX(-20px);
    }
}

.app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}

.app-header h2 {
    font-size: 24px;
    font-weight: 700;
    color: #1a1a1a;
}

.back-btn,
.profile-btn,
.settings-btn,
.edit-btn {
    background: #f3f4f6;
    border: none;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
}

.back-btn:hover,
.profile-btn:hover,
.settings-btn:hover,
.edit-btn:hover {
    background: #e5e7eb;
    transform: scale(1.05);
}

/* Home Screen */
.stats-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-bottom: 24px;
}

.stat-card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 16px 8px;
    border-radius: 12px;
    text-align: center;
}

.stat-icon {
    font-size: 24px;
    margin-bottom: 8px;
}

.stat-value {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 4px;
}

.stat-label {
    font-size: 11px;
    opacity: 0.9;
}

.activity-section {
    margin-bottom: 24px;
}

.activity-section h3 {
    font-size: 16px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 12px;
}

.activity-chart {
    display: flex;
    align-items: flex-end;
    gap: 4px;
    height: 120px;
    background: #f9fafb;
    border-radius: 8px;
    padding: 8px;
}

.chart-bar {
    flex: 1;
    background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
    border-radius: 4px 4px 0 0;
    min-height: 10px;
    transition: all 0.3s;
}

.action-btn {
    width: 100%;
    padding: 16px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
}

.action-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

/* Workout Screen */
.workout-timer {
    display: flex;
    justify-content: center;
    margin: 32px 0;
}

.timer-circle {
    position: relative;
    width: 200px;
    height: 200px;
}

.timer-circle svg {
    transform: rotate(-90deg);
}

.timer-bg {
    fill: none;
    stroke: #f3f4f6;
    stroke-width: 8;
}

.timer-progress {
    fill: none;
    stroke: url(#gradient);
    stroke-width: 8;
    stroke-linecap: round;
    stroke-dasharray: 282.7;
    transition: stroke-dashoffset 1s linear;
}

.timer-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.timer-value {
    font-size: 32px;
    font-weight: 700;
    color: #1a1a1a;
}

.timer-label {
    font-size: 14px;
    color: #6b7280;
    margin-top: 4px;
}

.workout-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 32px;
}

.workout-stat {
    background: #f9fafb;
    padding: 16px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.workout-stat .stat-label {
    font-size: 12px;
    color: #6b7280;
    text-transform: uppercase;
}

.workout-stat .stat-value {
    font-size: 24px;
    font-weight: 700;
    color: #1a1a1a;
}

/* Profile Screen */
.profile-info {
    text-align: center;
    margin-bottom: 32px;
}

.avatar {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    margin: 0 auto 16px;
}

.profile-info h3 {
    font-size: 20px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 4px;
}

.profile-info p {
    font-size: 14px;
    color: #6b7280;
}

.profile-stats {
    background: #f9fafb;
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 24px;
}

.profile-stat-item {
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
    border-bottom: 1px solid #e5e7eb;
}

.profile-stat-item:last-child {
    border-bottom: none;
}

.profile-stat-item .label {
    font-size: 14px;
    color: #6b7280;
}

.profile-stat-item .value {
    font-size: 14px;
    font-weight: 600;
    color: #1a1a1a;
}

.achievements h4 {
    font-size: 16px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 12px;
}

.achievement-badges {
    display: flex;
    gap: 12px;
}

.badge {
    width: 50px;
    height: 50px;
    background: #f9fafb;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
}

/* Bottom Navigation */
.bottom-nav {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-top: 1px solid #e5e7eb;
    background: white;
}

.bottom-nav button {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 12px;
    border: none;
    background: transparent;
    cursor: pointer;
    transition: all 0.2s;
}

.bottom-nav button.active {
    color: #667eea;
}

.nav-icon {
    font-size: 20px;
}

.nav-label {
    font-size: 11px;
    font-weight: 500;
}

.home-indicator {
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 2px;
}
</style>
