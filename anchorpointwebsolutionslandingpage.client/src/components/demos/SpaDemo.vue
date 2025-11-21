<template>
    <div class="spa-demo-app">
        <nav class="spa-nav">
            <h1 class="spa-logo">TaskFlow</h1>
            <div class="spa-nav-links">
                <button class="spa-nav-btn" :class="{ active: currentView === 'tasks' }" @click="currentView = 'tasks'">
                    📋 Tasks
                </button>
                <button class="spa-nav-btn" :class="{ active: currentView === 'team' }" @click="currentView = 'team'">
                    👥 Team
                </button>
            </div>
        </nav>

        <!-- Tasks View -->
        <div v-if="currentView === 'tasks'" class="spa-view">
            <div class="spa-view-header">
                <h2>My Tasks</h2>
                <div class="spa-filter">
                    <button class="spa-filter-btn" :class="{ active: taskFilter === 'all' }"
                        @click="taskFilter = 'all'">
                        All
                    </button>
                    <button class="spa-filter-btn" :class="{ active: taskFilter === 'active' }"
                        @click="taskFilter = 'active'">
                        Active
                    </button>
                    <button class="spa-filter-btn" :class="{ active: taskFilter === 'complete' }"
                        @click="taskFilter = 'complete'">
                        Complete
                    </button>
                </div>
            </div>

            <div class="spa-stats-bar">
                <div class="spa-stat-card total">
                    <span class="spa-stat-label">Total Tasks</span>
                    <span class="spa-stat-num">{{ tasks.length }}</span>
                </div>
                <div class="spa-stat-card active">
                    <span class="spa-stat-label">Active</span>
                    <span class="spa-stat-num">{{ activeTasks }}</span>
                </div>
                <div class="spa-stat-card complete">
                    <span class="spa-stat-label">Completed</span>
                    <span class="spa-stat-num">{{ completedTasks }}</span>
                </div>
            </div>

            <ul class="spa-task-list">
                <li v-for="task in filteredTasks" :key="task.id" class="spa-task-item">
                    <input type="checkbox" class="spa-checkbox" :checked="task.completed" @change="toggleTask(task.id)">
                    <div class="spa-task-content">
                        <span class="spa-task-title" :class="{ done: task.completed }">
                            {{ task.title }}
                        </span>
                        <p class="spa-task-desc">{{ task.description }}</p>
                        <div class="spa-task-meta">
                            <span class="spa-task-tag category">{{ task.category }}</span>
                            <span class="spa-task-tag" :class="`priority-${task.priority}`">
                                {{ task.priorityLabel }}
                            </span>
                            <span class="spa-task-due">⏰ Due: {{ task.dueDate }}</span>
                        </div>
                    </div>
                </li>
            </ul>

            <div v-if="filteredTasks.length === 0" class="spa-empty-state">
                <div class="spa-empty-icon">✓</div>
                <p class="spa-empty-text">No {{ taskFilter }} tasks</p>
            </div>
        </div>

        <!-- Team View -->
        <div v-else class="spa-view">
            <div class="spa-view-header">
                <h2>Team Members</h2>
            </div>

            <div class="spa-team-search">
                <input type="text" class="spa-search-input" v-model="searchQuery"
                    placeholder="🔍 Search team members...">
            </div>

            <div class="spa-team-grid">
                <div v-for="member in filteredTeam" :key="member.id" class="spa-team-card">
                    <div class="spa-avatar" :class="member.statusClass">
                        {{ member.initials }}
                    </div>
                    <h3>{{ member.name }}</h3>
                    <span class="spa-role">{{ member.role }}</span>
                    <span class="spa-status" :style="{ background: member.statusBg, color: member.statusColor }">
                        {{ member.status }}
                    </span>
                    <div class="spa-team-stats">
                        <div class="spa-team-stat">
                            <span class="spa-team-stat-num">{{ member.projects }}</span>
                            <span class="spa-team-stat-label">Projects</span>
                        </div>
                        <div class="spa-team-stat">
                            <span class="spa-team-stat-num">{{ member.rating }}</span>
                            <span class="spa-team-stat-label">Rating</span>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="filteredTeam.length === 0" class="spa-empty-state">
                <div class="spa-empty-icon">🔍</div>
                <p class="spa-empty-text">No team members found</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Task {
    id: number
    title: string
    description: string
    category: string
    priority: string
    priorityLabel: string
    dueDate: string
    completed: boolean
}

interface TeamMember {
    id: number
    name: string
    initials: string
    role: string
    status: string
    statusClass: string
    statusBg: string
    statusColor: string
    projects: number
    rating: number
}

const currentView = ref<'tasks' | 'team'>('tasks')
const taskFilter = ref<'all' | 'active' | 'complete'>('all')
const searchQuery = ref('')

const tasks = ref<Task[]>([
    {
        id: 1,
        title: 'Design new homepage layout',
        description: 'Create wireframes and high-fidelity mockups for the updated homepage design',
        category: '🎨 Design',
        priority: 'low',
        priorityLabel: 'Low Priority',
        dueDate: 'Nov 18',
        completed: true
    },
    {
        id: 2,
        title: 'Build API integration',
        description: 'Connect frontend with the new RESTful API endpoints for user authentication',
        category: '⚙️ Backend',
        priority: 'high',
        priorityLabel: 'High Priority',
        dueDate: 'Nov 22',
        completed: false
    },
    {
        id: 3,
        title: 'Write API documentation',
        description: 'Document all endpoints with examples and parameter descriptions',
        category: '📝 Documentation',
        priority: 'med',
        priorityLabel: 'Medium Priority',
        dueDate: 'Nov 25',
        completed: false
    },
    {
        id: 4,
        title: 'Set up CI/CD pipeline',
        description: 'Configure GitHub Actions for automated testing and deployment',
        category: '🔧 DevOps',
        priority: 'high',
        priorityLabel: 'High Priority',
        dueDate: 'Nov 15',
        completed: true
    },
    {
        id: 5,
        title: 'Conduct user testing',
        description: 'Run usability tests with 5 participants and gather feedback',
        category: '👥 Research',
        priority: 'med',
        priorityLabel: 'Medium Priority',
        dueDate: 'Nov 28',
        completed: false
    }
])

const team = ref<TeamMember[]>([
    {
        id: 1,
        name: 'Alice Chen',
        initials: 'AC',
        role: 'Senior UX Designer',
        status: '🟢 Available',
        statusClass: '',
        statusBg: '#f0fdf4',
        statusColor: '#16a34a',
        projects: 12,
        rating: 4.8
    },
    {
        id: 2,
        name: 'Bob Smith',
        initials: 'BS',
        role: 'Full Stack Developer',
        status: '🔴 In Meeting',
        statusClass: 'busy',
        statusBg: '#fef3f2',
        statusColor: '#dc2626',
        projects: 18,
        rating: 4.9
    },
    {
        id: 3,
        name: 'Carol Davis',
        initials: 'CD',
        role: 'Project Manager',
        status: '🟡 Away',
        statusClass: 'away',
        statusBg: '#fef9c3',
        statusColor: '#ca8a04',
        projects: 24,
        rating: 5.0
    },
    {
        id: 4,
        name: 'David Wilson',
        initials: 'DW',
        role: 'Backend Engineer',
        status: '🟢 Available',
        statusClass: '',
        statusBg: '#f0fdf4',
        statusColor: '#16a34a',
        projects: 15,
        rating: 4.7
    }
])

const activeTasks = computed(() =>
    tasks.value.filter(t => !t.completed).length
)

const completedTasks = computed(() =>
    tasks.value.filter(t => t.completed).length
)

const filteredTasks = computed(() => {
    if (taskFilter.value === 'active') {
        return tasks.value.filter(t => !t.completed)
    } else if (taskFilter.value === 'complete') {
        return tasks.value.filter(t => t.completed)
    }
    return tasks.value
})

const filteredTeam = computed(() => {
    if (!searchQuery.value) return team.value

    const query = searchQuery.value.toLowerCase()
    return team.value.filter(member =>
        member.name.toLowerCase().includes(query) ||
        member.role.toLowerCase().includes(query)
    )
})

function toggleTask(id: number) {
    const task = tasks.value.find(t => t.id === id)
    if (task) {
        task.completed = !task.completed
    }
}
</script>

<style scoped>
.spa-demo-app {
    font-family: system-ui, -apple-system, sans-serif;
    max-width: 750px;
    margin: 0 auto;
    background: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.spa-nav {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 1.25rem 1.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
}

.spa-logo {
    color: white;
    font-size: 1.5rem;
    font-weight: 800;
    margin: 0;
    letter-spacing: -0.5px;
}

.spa-nav-links {
    display: flex;
    gap: 0.75rem;
}

.spa-nav-btn {
    background: rgba(255, 255, 255, 0.15);
    color: white;
    border: 2px solid transparent;
    padding: 0.6rem 1.25rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 0.95rem;
    backdrop-filter: blur(10px);
}

.spa-nav-btn:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
}

.spa-nav-btn.active {
    background: white;
    color: #667eea;
    border-color: white;
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
}

.spa-view {
    padding: 2rem;
    min-height: 400px;
}

.spa-view-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #f1f5f9;
}

.spa-view h2 {
    color: #1e293b;
    margin: 0;
    font-size: 1.75rem;
    font-weight: 700;
}

.spa-filter {
    display: flex;
    gap: 0.5rem;
}

.spa-filter-btn {
    padding: 0.4rem 0.85rem;
    background: #f8fafc;
    border: 2px solid #e5e7eb;
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    color: #64748b;
}

.spa-filter-btn:hover {
    border-color: #667eea;
    color: #667eea;
    background: #f0f4ff;
}

.spa-filter-btn.active {
    background: #667eea;
    color: white;
    border-color: #667eea;
}

.spa-stats-bar {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.spa-stat-card {
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
    padding: 1rem 1.25rem;
    border-radius: 10px;
    border-left: 4px solid;
    transition: all 0.3s;
}

.spa-stat-card.total {
    border-color: #3b82f6;
}

.spa-stat-card.active {
    border-color: #10b981;
}

.spa-stat-card.complete {
    border-color: #8b5cf6;
}

.spa-stat-label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #64748b;
    font-weight: 700;
    display: block;
    margin-bottom: 0.4rem;
}

.spa-stat-num {
    font-size: 1.75rem;
    font-weight: 800;
    color: #1e293b;
    display: block;
}

.spa-task-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.spa-task-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.25rem;
    background: #f8fafc;
    border-radius: 12px;
    margin-bottom: 0.75rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
}

.spa-task-item::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    opacity: 0;
    transition: opacity 0.3s;
}

.spa-task-item:hover {
    background: #f1f5f9;
    transform: translateX(6px);
    border-color: #e0e7ff;
}

.spa-task-item:hover::before {
    opacity: 1;
}

.spa-checkbox {
    width: 22px;
    height: 22px;
    cursor: pointer;
    accent-color: #667eea;
    border-radius: 4px;
    margin-top: 2px;
    flex-shrink: 0;
}

.spa-task-content {
    flex: 1;
}

.spa-task-title {
    color: #1e293b;
    font-size: 1.05rem;
    font-weight: 600;
    margin-bottom: 0.4rem;
    display: block;
}

.spa-task-title.done {
    color: #94a3b8;
    text-decoration: line-through;
}

.spa-task-desc {
    color: #64748b;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    line-height: 1.4;
}

.spa-task-meta {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    align-items: center;
}

.spa-task-tag {
    font-size: 0.75rem;
    padding: 0.25rem 0.65rem;
    border-radius: 4px;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
}

.spa-task-tag.priority-high {
    background: #fef3f2;
    color: #dc2626;
}

.spa-task-tag.priority-med {
    background: #fef9c3;
    color: #ca8a04;
}

.spa-task-tag.priority-low {
    background: #f0fdf4;
    color: #16a34a;
}

.spa-task-tag.category {
    background: #f0f4ff;
    color: #667eea;
}

.spa-task-due {
    font-size: 0.75rem;
    color: #94a3b8;
    font-weight: 500;
}

.spa-team-search {
    margin-bottom: 1.5rem;
}

.spa-search-input {
    width: 100%;
    padding: 0.85rem 1rem;
    border: 2px solid #e5e7eb;
    border-radius: 10px;
    font-size: 0.95rem;
    transition: all 0.3s;
    font-family: inherit;
}

.spa-search-input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.spa-team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.25rem;
}

.spa-team-card {
    background: white;
    padding: 1.75rem;
    border-radius: 12px;
    text-align: center;
    border: 2px solid #e5e7eb;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.spa-team-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transform: scaleX(0);
    transition: transform 0.3s;
}

.spa-team-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    border-color: #667eea;
}

.spa-team-card:hover::before {
    transform: scaleX(1);
}

.spa-avatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 auto 1rem;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    position: relative;
}

.spa-avatar::after {
    content: "";
    position: absolute;
    bottom: 2px;
    right: 2px;
    width: 16px;
    height: 16px;
    background: #10b981;
    border: 3px solid white;
    border-radius: 50%;
}

.spa-avatar.busy::after {
    background: #dc2626;
}

.spa-avatar.away::after {
    background: #f59e0b;
}

.spa-team-card h3 {
    color: #1e293b;
    margin: 0 0 0.4rem 0;
    font-size: 1.1rem;
    font-weight: 700;
}

.spa-role {
    color: #64748b;
    font-size: 0.85rem;
    margin-bottom: 0.75rem;
    font-weight: 500;
    display: block;
}

.spa-team-stats {
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #f1f5f9;
}

.spa-team-stat {
    text-align: center;
}

.spa-team-stat-num {
    display: block;
    font-size: 1.25rem;
    font-weight: 700;
    color: #1e293b;
}

.spa-team-stat-label {
    display: block;
    font-size: 0.7rem;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
    margin-top: 0.2rem;
}

.spa-status {
    display: inline-block;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 0.35rem 0.75rem;
    background: #f0fdf4;
    color: #16a34a;
    border-radius: 20px;
    margin-bottom: 0.75rem;
}

.spa-empty-state {
    text-align: center;
    padding: 3rem 1rem;
}

.spa-empty-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
    opacity: 0.3;
}

.spa-empty-text {
    color: #94a3b8;
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0;
}
</style>
