<template>
    <div class="tablet-demo">
        <div class="tablet-frame">
            <!-- Tablet Screen -->
            <div class="tablet-screen">
                <!-- Status Bar -->
                <div class="status-bar">
                    <span class="time">9:41 AM</span>
                    <span class="app-title">Enterprise Dashboard</span>
                    <div class="status-icons">
                        <span class="icon">📶</span>
                        <span class="icon">🔋</span>
                    </div>
                </div>

                <!-- Main Content -->
                <div class="main-content">
                    <!-- Sidebar -->
                    <div class="sidebar">
                        <div class="sidebar-header">
                            <div class="company-logo">🏢</div>
                            <span class="company-name">TechCorp</span>
                        </div>

                        <nav class="sidebar-nav">
                            <button v-for="item in navItems" :key="item.id"
                                :class="['nav-item', { active: activeView === item.id }]" @click="activeView = item.id">
                                <span class="nav-icon">{{ item.icon }}</span>
                                <span class="nav-label">{{ item.label }}</span>
                            </button>
                        </nav>
                    </div>

                    <!-- Content Area -->
                    <div class="content-area">
                        <!-- Dashboard View -->
                        <div v-if="activeView === 'dashboard'" class="view dashboard-view">
                            <h1 class="view-title">Dashboard Overview</h1>

                            <div class="metrics-grid">
                                <div class="metric-card" v-for="metric in metrics" :key="metric.label">
                                    <div class="metric-icon">{{ metric.icon }}</div>
                                    <div class="metric-details">
                                        <div class="metric-value">{{ metric.value }}</div>
                                        <div class="metric-label">{{ metric.label }}</div>
                                        <div class="metric-change" :class="metric.trend">
                                            {{ metric.change }}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="chart-section">
                                <div class="chart-card">
                                    <h3>Sales Performance</h3>
                                    <div class="chart">
                                        <div class="chart-bars">
                                            <div v-for="(value, index) in salesData" :key="index" class="chart-bar"
                                                :style="{ height: value + '%' }">
                                                <span class="bar-label">{{ months[index] }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="chart-card">
                                    <h3>Revenue Distribution</h3>
                                    <div class="pie-chart">
                                        <div class="pie-segment segment-1"></div>
                                        <div class="pie-segment segment-2"></div>
                                        <div class="pie-segment segment-3"></div>
                                        <div class="pie-center">
                                            <div class="pie-value">$2.4M</div>
                                            <div class="pie-label">Total</div>
                                        </div>
                                    </div>
                                    <div class="pie-legend">
                                        <div class="legend-item">
                                            <span class="legend-color color-1"></span>
                                            <span>Products (45%)</span>
                                        </div>
                                        <div class="legend-item">
                                            <span class="legend-color color-2"></span>
                                            <span>Services (35%)</span>
                                        </div>
                                        <div class="legend-item">
                                            <span class="legend-color color-3"></span>
                                            <span>Subscriptions (20%)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Analytics View -->
                        <div v-if="activeView === 'analytics'" class="view analytics-view">
                            <h1 class="view-title">Analytics & Reports</h1>

                            <div class="analytics-content">
                                <div class="analytics-card">
                                    <h3>User Engagement</h3>
                                    <div class="engagement-stats">
                                        <div class="stat-item">
                                            <span class="stat-label">Active Users</span>
                                            <span class="stat-value">12,543</span>
                                        </div>
                                        <div class="stat-item">
                                            <span class="stat-label">Session Duration</span>
                                            <span class="stat-value">4m 32s</span>
                                        </div>
                                        <div class="stat-item">
                                            <span class="stat-label">Bounce Rate</span>
                                            <span class="stat-value">23.4%</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="analytics-card">
                                    <h3>Traffic Sources</h3>
                                    <div class="traffic-list">
                                        <div class="traffic-item" v-for="source in trafficSources" :key="source.name">
                                            <span class="source-name">{{ source.name }}</span>
                                            <div class="progress-bar">
                                                <div class="progress-fill" :style="{ width: source.percentage + '%' }">
                                                </div>
                                            </div>
                                            <span class="source-percentage">{{ source.percentage }}%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Team View -->
                        <div v-if="activeView === 'team'" class="view team-view">
                            <h1 class="view-title">Team Management</h1>

                            <div class="team-grid">
                                <div class="team-card" v-for="member in teamMembers" :key="member.name">
                                    <div class="member-avatar">{{ member.avatar }}</div>
                                    <div class="member-info">
                                        <div class="member-name">{{ member.name }}</div>
                                        <div class="member-role">{{ member.role }}</div>
                                        <div class="member-status" :class="member.status">
                                            {{ member.status }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Settings View -->
                        <div v-if="activeView === 'settings'" class="view settings-view">
                            <h1 class="view-title">Settings</h1>

                            <div class="settings-content">
                                <div class="settings-section">
                                    <h3>Profile Settings</h3>
                                    <div class="settings-group">
                                        <div class="setting-item">
                                            <div class="setting-info">
                                                <div class="setting-label">Email Notifications</div>
                                                <div class="setting-description">Receive updates via email</div>
                                            </div>
                                            <label class="toggle-switch">
                                                <input type="checkbox" checked>
                                                <span class="toggle-slider"></span>
                                            </label>
                                        </div>
                                        <div class="setting-item">
                                            <div class="setting-info">
                                                <div class="setting-label">Push Notifications</div>
                                                <div class="setting-description">Get real-time alerts</div>
                                            </div>
                                            <label class="toggle-switch">
                                                <input type="checkbox" checked>
                                                <span class="toggle-slider"></span>
                                            </label>
                                        </div>
                                        <div class="setting-item">
                                            <div class="setting-info">
                                                <div class="setting-label">Dark Mode</div>
                                                <div class="setting-description">Switch to dark theme</div>
                                            </div>
                                            <label class="toggle-switch">
                                                <input type="checkbox">
                                                <span class="toggle-slider"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="settings-section">
                                    <h3>Security</h3>
                                    <div class="settings-group">
                                        <div class="setting-item">
                                            <div class="setting-info">
                                                <div class="setting-label">Two-Factor Authentication</div>
                                                <div class="setting-description">Add extra security to your account
                                                </div>
                                            </div>
                                            <label class="toggle-switch">
                                                <input type="checkbox" checked>
                                                <span class="toggle-slider"></span>
                                            </label>
                                        </div>
                                        <div class="setting-item">
                                            <div class="setting-info">
                                                <div class="setting-label">Session Timeout</div>
                                                <div class="setting-description">Auto logout after 30 minutes</div>
                                            </div>
                                            <label class="toggle-switch">
                                                <input type="checkbox" checked>
                                                <span class="toggle-slider"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="settings-section">
                                    <h3>Preferences</h3>
                                    <div class="settings-group">
                                        <div class="setting-item">
                                            <div class="setting-info">
                                                <div class="setting-label">Language</div>
                                                <div class="setting-description">English (US)</div>
                                            </div>
                                            <button class="setting-button">Change</button>
                                        </div>
                                        <div class="setting-item">
                                            <div class="setting-info">
                                                <div class="setting-label">Time Zone</div>
                                                <div class="setting-description">Eastern Time (ET)</div>
                                            </div>
                                            <button class="setting-button">Change</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeView = ref('dashboard')

const navItems = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard' },
    { id: 'analytics', icon: '📈', label: 'Analytics' },
    { id: 'team', icon: '👥', label: 'Team' },
    { id: 'settings', icon: '⚙️', label: 'Settings' }
]

const metrics = [
    { icon: '💰', label: 'Revenue', value: '$54,239', change: '+12.5%', trend: 'positive' },
    { icon: '👥', label: 'Customers', value: '1,429', change: '+8.2%', trend: 'positive' },
    { icon: '📦', label: 'Orders', value: '342', change: '-3.1%', trend: 'negative' },
    { icon: '⭐', label: 'Rating', value: '4.8/5', change: '+0.3', trend: 'positive' }
]

const salesData = [65, 78, 45, 89, 72, 95]
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']

const trafficSources = [
    { name: 'Direct', percentage: 42 },
    { name: 'Organic Search', percentage: 35 },
    { name: 'Social Media', percentage: 18 },
    { name: 'Referral', percentage: 5 }
]

const teamMembers = [
    { name: 'Sarah Johnson', role: 'Product Manager', avatar: '👩', status: 'online' },
    { name: 'Mike Chen', role: 'Lead Developer', avatar: '👨', status: 'online' },
    { name: 'Emma Davis', role: 'UI Designer', avatar: '👩', status: 'away' },
    { name: 'Alex Kumar', role: 'Data Analyst', avatar: '👨', status: 'offline' }
]
</script>

<style scoped>
.tablet-demo {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 1rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 12px;
    min-height: 700px;
}

.tablet-frame {
    position: relative;
    width: 900px;
    height: 680px;
    background: #1a1a1a;
    border-radius: 30px;
    padding: 16px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.tablet-screen {
    width: 100%;
    height: 100%;
    background: #f9fafb;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.status-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 24px;
    background: white;
    border-bottom: 1px solid #e5e7eb;
    font-size: 14px;
}

.app-title {
    font-weight: 600;
    color: #1a1a1a;
}

.status-icons {
    display: flex;
    gap: 12px;
}

.main-content {
    display: flex;
    flex: 1;
    overflow: hidden;
}

/* Sidebar */
.sidebar {
    width: 200px;
    background: white;
    border-right: 1px solid #e5e7eb;
    display: flex;
    flex-direction: column;
}

.sidebar-header {
    padding: 24px 16px;
    border-bottom: 1px solid #e5e7eb;
    display: flex;
    align-items: center;
    gap: 12px;
}

.company-logo {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
}

.company-name {
    font-weight: 700;
    font-size: 16px;
    color: #1a1a1a;
}

.sidebar-nav {
    padding: 16px 8px;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.nav-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    background: transparent;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
    text-align: left;
}

.nav-item:hover {
    background: #f3f4f6;
}

.nav-item.active {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.nav-icon {
    font-size: 18px;
}

.nav-label {
    font-size: 14px;
    font-weight: 500;
}

/* Content Area */
.content-area {
    flex: 1;
    overflow: auto;
    overflow-x: auto;
    overflow-y: auto;
    padding: 24px;
    -webkit-overflow-scrolling: touch;
    touch-action: pan-x pan-y;
    cursor: grab;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}

.content-area:active {
    cursor: grabbing;
}

.content-area * {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}

.view {
    animation: fadeIn 0.3s ease-out;
    min-width: 900px;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.view-title {
    font-size: 28px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 24px;
}

/* Metrics Grid */
.metrics-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(180px, 1fr));
    gap: 16px;
    margin-bottom: 24px;
}

.metric-card {
    background: white;
    padding: 20px;
    border-radius: 12px;
    display: flex;
    gap: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.metric-icon {
    font-size: 32px;
    width: 50px;
    height: 50px;
    background: #f9fafb;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.metric-details {
    flex: 1;
}

.metric-value {
    font-size: 24px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 4px;
}

.metric-label {
    font-size: 12px;
    color: #6b7280;
    margin-bottom: 8px;
}

.metric-change {
    font-size: 13px;
    font-weight: 600;
}

.metric-change.positive {
    color: #10b981;
}

.metric-change.negative {
    color: #ef4444;
}

/* Chart Section */
.chart-section {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 16px;
}

.chart-card {
    background: white;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.chart-card h3 {
    font-size: 16px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 20px;
}

.chart {
    height: 200px;
}

.chart-bars {
    display: flex;
    align-items: flex-end;
    gap: 16px;
    height: 100%;
}

.chart-bar {
    flex: 1;
    background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
    border-radius: 6px 6px 0 0;
    position: relative;
    min-height: 20px;
    transition: all 0.3s;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}

.bar-label {
    position: absolute;
    bottom: -24px;
    font-size: 11px;
    color: #6b7280;
}

/* Pie Chart */
.pie-chart {
    position: relative;
    width: 150px;
    height: 150px;
    margin: 0 auto 20px;
    border-radius: 50%;
    background: conic-gradient(#667eea 0deg 162deg,
            #764ba2 162deg 288deg,
            #f3f4f6 288deg 360deg);
}

.pie-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    background: white;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.pie-value {
    font-size: 18px;
    font-weight: 700;
    color: #1a1a1a;
}

.pie-label {
    font-size: 11px;
    color: #6b7280;
}

.pie-legend {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.legend-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
}

.legend-color {
    width: 16px;
    height: 16px;
    border-radius: 4px;
}

.legend-color.color-1 {
    background: #667eea;
}

.legend-color.color-2 {
    background: #764ba2;
}

.legend-color.color-3 {
    background: #f3f4f6;
}

/* Analytics View */
.analytics-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
}

.analytics-card {
    background: white;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.analytics-card h3 {
    font-size: 16px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 20px;
}

.engagement-stats {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.stat-item {
    display: flex;
    justify-content: space-between;
    padding: 16px;
    background: #f9fafb;
    border-radius: 8px;
}

.stat-label {
    font-size: 14px;
    color: #6b7280;
}

.stat-value {
    font-size: 18px;
    font-weight: 700;
    color: #1a1a1a;
}

.traffic-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.traffic-item {
    display: flex;
    align-items: center;
    gap: 12px;
}

.source-name {
    flex: 0 0 120px;
    font-size: 13px;
    color: #1a1a1a;
}

.progress-bar {
    flex: 1;
    height: 8px;
    background: #f3f4f6;
    border-radius: 4px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    border-radius: 4px;
    transition: width 0.5s ease;
}

.source-percentage {
    flex: 0 0 40px;
    text-align: right;
    font-size: 13px;
    font-weight: 600;
    color: #1a1a1a;
}

/* Team View */
.team-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
}

.team-card {
    background: white;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    display: flex;
    gap: 16px;
}

.member-avatar {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
}

.member-info {
    flex: 1;
}

.member-name {
    font-size: 16px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 4px;
}

.member-role {
    font-size: 13px;
    color: #6b7280;
    margin-bottom: 8px;
}

.member-status {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
}

.member-status.online {
    background: #d1fae5;
    color: #065f46;
}

.member-status.away {
    background: #fef3c7;
    color: #92400e;
}

.member-status.offline {
    background: #f3f4f6;
    color: #6b7280;
}

/* Settings View */
.settings-content {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.settings-section {
    background: white;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.settings-section h3 {
    font-size: 18px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 20px;
}

.settings-group {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.setting-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background: #f9fafb;
    border-radius: 8px;
}

.setting-info {
    flex: 1;
}

.setting-label {
    font-size: 15px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 4px;
}

.setting-description {
    font-size: 13px;
    color: #6b7280;
}

.setting-button {
    padding: 8px 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
}

.setting-button:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
}

.toggle-switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 28px;
    cursor: pointer;
}

.toggle-switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.toggle-slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #e5e7eb;
    border-radius: 28px;
    transition: all 0.3s;
}

.toggle-slider:before {
    content: "";
    position: absolute;
    height: 22px;
    width: 22px;
    left: 3px;
    bottom: 3px;
    background: white;
    border-radius: 50%;
    transition: all 0.3s;
}

input:checked+.toggle-slider {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

input:checked+.toggle-slider:before {
    transform: translateX(22px);
}
</style>
