<template>
    <div class="code-example">
        <div class="code-header">
            <span class="code-language">VUE 3 / REACT / HTML+CSS</span>
            <div class="code-dots">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
            </div>
        </div>
        <pre class="code-content" v-pre><code><span class="comment">&lt;!-- Revenue Card Component --&gt;</span>
<span class="tag">&lt;div</span> <span class="attribute">class</span>=<span class="string">"metric-card primary"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;h3&gt;</span>Total Revenue<span class="tag">&lt;/h3&gt;</span>
  <span class="tag">&lt;div</span> <span class="attribute">class</span>=<span class="string">"value"</span><span class="tag">&gt;</span>$47,582<span class="tag">&lt;/div&gt;</span>
  <span class="tag">&lt;div</span> <span class="attribute">class</span>=<span class="string">"change positive"</span><span class="tag">&gt;</span>
    ↑ 12.5% from last month
  <span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;/div&gt;</span>

<span class="comment">&lt;!-- Stats Grid --&gt;</span>
<span class="tag">&lt;div</span> <span class="attribute">class</span>=<span class="string">"stats-grid"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;div</span> <span class="attribute">class</span>=<span class="string">"stat-card blue"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;span</span> <span class="attribute">class</span>=<span class="string">"label"</span><span class="tag">&gt;</span>New Users<span class="tag">&lt;/span&gt;</span>
    <span class="tag">&lt;span</span> <span class="attribute">class</span>=<span class="string">"number"</span><span class="tag">&gt;</span>1,234<span class="tag">&lt;/span&gt;</span>
  <span class="tag">&lt;/div&gt;</span>
  
  <span class="tag">&lt;div</span> <span class="attribute">class</span>=<span class="string">"stat-card green"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;span</span> <span class="attribute">class</span>=<span class="string">"label"</span><span class="tag">&gt;</span>Active Projects<span class="tag">&lt;/span&gt;</span>
    <span class="tag">&lt;span</span> <span class="attribute">class</span>=<span class="string">"number"</span><span class="tag">&gt;</span>42<span class="tag">&lt;/span&gt;</span>
  <span class="tag">&lt;/div&gt;</span>
  
  <span class="tag">&lt;div</span> <span class="attribute">class</span>=<span class="string">"stat-card red"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;span</span> <span class="attribute">class</span>=<span class="string">"label"</span><span class="tag">&gt;</span>Pending Tasks<span class="tag">&lt;/span&gt;</span>
    <span class="tag">&lt;span</span> <span class="attribute">class</span>=<span class="string">"number"</span><span class="tag">&gt;</span>18<span class="tag">&lt;/span&gt;</span>
  <span class="tag">&lt;/div&gt;</span>
  
  <span class="tag">&lt;div</span> <span class="attribute">class</span>=<span class="string">"stat-card purple"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;span</span> <span class="attribute">class</span>=<span class="string">"label"</span><span class="tag">&gt;</span>Conversion Rate<span class="tag">&lt;/span&gt;</span>
    <span class="tag">&lt;span</span> <span class="attribute">class</span>=<span class="string">"number"</span><span class="tag">&gt;</span>3.8%<span class="tag">&lt;/span&gt;</span>
  <span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;/div&gt;</span>

<span class="comment">&lt;!-- Activity Feed --&gt;</span>
<span class="tag">&lt;div</span> <span class="attribute">class</span>=<span class="string">"activity-feed"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;h4&gt;</span>Recent Activity<span class="tag">&lt;/h4&gt;</span>
  <span class="tag">&lt;div</span> <span class="attribute">class</span>=<span class="string">"activity-item"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;div</span> <span class="attribute">class</span>=<span class="string">"avatar"</span><span class="tag">&gt;</span>JD<span class="tag">&lt;/div&gt;</span>
    <span class="tag">&lt;div</span> <span class="attribute">class</span>=<span class="string">"content"</span><span class="tag">&gt;</span>
      <span class="tag">&lt;strong&gt;</span>John Doe<span class="tag">&lt;/strong&gt;</span>
      <span class="tag">&lt;p&gt;</span>Completed project milestone<span class="tag">&lt;/p&gt;</span>
    <span class="tag">&lt;/div&gt;</span>
    <span class="tag">&lt;span</span> <span class="attribute">class</span>=<span class="string">"time"</span><span class="tag">&gt;</span>2m ago<span class="tag">&lt;/span&gt;</span>
  <span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;/div&gt;</span></code></pre>
    </div>
</template>

<style scoped>
.code-example {
    background: #282c34;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    max-height: 800px;
}

.code-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background: #21252b;
    border-bottom: 1px solid #181a1f;
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
    overflow: auto;
    overscroll-behavior: auto;
    flex: 1;
    min-height: 0;
    font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
    font-size: 0.9rem;
    line-height: 1.6;
    color: #abb2bf;
}

.code-content code {
    font-family: inherit;
}

/* One Dark Pro Theme Syntax Highlighting */
.tag {
    color: #e06c75;
    /* Red for HTML tags */
}

.attribute {
    color: #d19a66;
    /* Orange for attributes */
}

.string {
    color: #98c379;
    /* Green for strings */
}

.comment {
    color: #5c6370;
    /* Gray for comments */
    font-style: italic;
}

/* Custom scrollbar for code content */
.code-content::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

.code-content::-webkit-scrollbar-track {
    background: #21252b;
}

.code-content::-webkit-scrollbar-thumb {
    background: #475569;
    border-radius: 4px;
}

.code-content::-webkit-scrollbar-thumb:hover {
    background: #64748b;
}
</style>
