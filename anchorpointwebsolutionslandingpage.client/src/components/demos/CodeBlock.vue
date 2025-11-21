<template>
    <div class="code-example">
        <div class="code-header">
            <span class="code-language">{{ language }}</span>
            <div class="code-dots">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
            </div>
        </div>
        <pre class="code-content"><code>{{ code }}</code></pre>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    code: string
    language: string
}>()
</script>

<style scoped>
.code-example {
    background: #1e293b;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.code-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background: #0f172a;
    border-bottom: 1px solid #334155;
}

.code-language {
    font-size: 0.875rem;
    color: #94a3b8;
    text-transform: uppercase;
    font-weight: 600;
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
    padding: 1.5rem;
    margin: 0;
    overflow-x: auto;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 0.9rem;
    line-height: 1.6;
    color: #e2e8f0;
}

.code-content code {
    font-family: inherit;
}

/* Custom scrollbar for code content */
.code-content::-webkit-scrollbar {
    height: 8px;
}

.code-content::-webkit-scrollbar-track {
    background: #0f172a;
}

.code-content::-webkit-scrollbar-thumb {
    background: #475569;
    border-radius: 4px;
}

.code-content::-webkit-scrollbar-thumb:hover {
    background: #64748b;
}
</style>
