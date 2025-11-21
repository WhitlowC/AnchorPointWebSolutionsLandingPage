<template>
    <div class="dash-container">
        <div class="dash-header">
            <h2 class="dash-title">Dashboard</h2>
            <span class="dash-date">📅 November 20, 2025</span>
        </div>

        <div class="dash-card">
            <div class="dash-card-content">
                <h3>💰 Total Revenue</h3>
                <div class="dash-value">$47,582</div>
                <div class="dash-change">
                    <span class="dash-change-icon">📈</span>
                    <span><span class="arrow-up">↑</span> 12.5% from last month</span>
                </div>
            </div>
        </div>

        <div class="dash-stats">
            <div class="stat-box blue">
                <div class="stat-header">
                    <span class="stat-label">New Users</span>
                    <span class="stat-trend up">+18%</span>
                </div>
                <span class="stat-num">1,234</span>
            </div>
            <div class="stat-box green">
                <div class="stat-header">
                    <span class="stat-label">Active Projects</span>
                    <span class="stat-trend up">+7%</span>
                </div>
                <span class="stat-num">42</span>
            </div>
            <div class="stat-box red">
                <div class="stat-header">
                    <span class="stat-label">Pending Tasks</span>
                    <span class="stat-trend down">-12%</span>
                </div>
                <span class="stat-num">18</span>
            </div>
            <div class="stat-box purple">
                <div class="stat-header">
                    <span class="stat-label">Conversion Rate</span>
                    <span class="stat-trend up">+22%</span>
                </div>
                <span class="stat-num">3.8%</span>
            </div>
        </div>

        <div class="activity-card">
            <div class="activity-header">
                <h4>Recent Activity</h4>
                <a href="#" class="view-all">View All →</a>
            </div>
            <div class="activity">
                <div class="avatar purple">JD</div>
                <div class="activity-content">
                    <strong>John Doe</strong>
                    <p>Completed project milestone</p>
                </div>
                <div class="activity-meta">
                    <span class="activity-time">2m ago</span>
                    <span class="activity-type">Project</span>
                </div>
            </div>
            <div class="activity">
                <div class="avatar green">SM</div>
                <div class="activity-content">
                    <strong>Sarah Miller</strong>
                    <p>Added new client account</p>
                </div>
                <div class="activity-meta">
                    <span class="activity-time">15m ago</span>
                    <span class="activity-type">Client</span>
                </div>
            </div>
            <div class="activity">
                <div class="avatar orange">MJ</div>
                <div class="activity-content">
                    <strong>Mike Johnson</strong>
                    <p>Updated documentation</p>
                </div>
                <div class="activity-meta">
                    <span class="activity-time">1h ago</span>
                    <span class="activity-type">Docs</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// No reactive state needed for this demo
</script>

<style scoped>
.dash-container {
    font-family: system-ui, -apple-system, sans-serif;
    background: #f8fafc;
    padding: 1.5rem;
    border-radius: 12px;
}

.dash-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
}

.dash-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: #1e293b;
    margin: 0;
}

.dash-date {
    color: #64748b;
    font-size: 0.9rem;
}

.dash-card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 2rem;
    border-radius: 16px;
    color: white;
    margin-bottom: 1.5rem;
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
    position: relative;
    overflow: hidden;
}

.dash-card::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
}

.dash-card-content {
    position: relative;
    z-index: 1;
}

.dash-card h3 {
    margin: 0 0 0.75rem 0;
    font-size: 1rem;
    opacity: 0.95;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.dash-value {
    font-size: 3rem;
    font-weight: 800;
    margin: 0.5rem 0;
    letter-spacing: -1px;
}

.dash-change {
    opacity: 0.95;
    font-size: 1.1rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.dash-change-icon {
    font-size: 2rem;
    color: #10b981;
    font-weight: 900;
}

.arrow-up {
    color: #10b981;
    font-weight: 900;
}

.dash-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.stat-box {
    padding: 1.5rem;
    border-radius: 12px;
    border-left: 4px solid;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.stat-box::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    height: 60px;
    opacity: 0.1;
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.stat-box:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.stat-box.blue {
    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
    border-color: #0ea5e9;
}

.stat-box.blue::before {
    content: "👥";
}

.stat-box.green {
    background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
    border-color: #10b981;
}

.stat-box.green::before {
    content: "📊";
}

.stat-box.red {
    background: linear-gradient(135deg, #fef3f2 0%, #fee2e2 100%);
    border-color: #f43f5e;
}

.stat-box.red::before {
    content: "📋";
}

.stat-box.purple {
    background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);
    border-color: #a855f7;
}

.stat-box.purple::before {
    content: "💎";
}

.stat-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.75rem;
}

.stat-label {
    color: #64748b;
    font-size: 0.85rem;
    display: block;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.stat-trend {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-weight: 700;
}

.stat-trend.up {
    background: #dcfce7;
    color: #16a34a;
}

.stat-trend.down {
    background: #fee2e2;
    color: #dc2626;
}

.stat-num {
    font-size: 2rem;
    font-weight: 800;
    color: #0f172a;
    display: block;
    line-height: 1;
}

.activity-card {
    background: white;
    padding: 1.75rem;
    border-radius: 16px;
    border: 2px solid #e5e7eb;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}

.activity-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #f1f5f9;
}

.activity-card h4 {
    margin: 0;
    color: #1e293b;
    font-size: 1.25rem;
    font-weight: 700;
}

.view-all {
    color: #667eea;
    font-size: 0.875rem;
    font-weight: 600;
    text-decoration: none;
}

.activity {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: #f8fafc;
    border-radius: 10px;
    margin-bottom: 0.75rem;
    transition: all 0.3s;
    border: 2px solid transparent;
    cursor: pointer;
}

.activity:hover {
    background: white;
    border-color: #e0e7ff;
    transform: translateX(4px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.avatar {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 1rem;
    flex-shrink: 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.avatar.purple {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.avatar.green {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.avatar.orange {
    background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
}

.activity-content {
    flex: 1;
}

.activity-content strong {
    color: #1e293b;
    font-size: 1rem;
    display: block;
    margin-bottom: 0.25rem;
    font-weight: 600;
}

.activity-content p {
    color: #64748b;
    font-size: 0.875rem;
    margin: 0;
}

.activity-meta {
    text-align: right;
}

.activity-time {
    font-size: 0.8rem;
    color: #94a3b8;
    display: block;
    font-weight: 500;
}

.activity-type {
    font-size: 0.7rem;
    color: #667eea;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-top: 0.25rem;
    display: block;
}
</style>
