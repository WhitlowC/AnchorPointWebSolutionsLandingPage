<template>
  <div class="code-example">
    <div class="code-header">
      <span class="code-language">VUE 3 + TYPESCRIPT</span>
      <div class="code-dots">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
      </div>
    </div>
    <pre class="code-content" v-pre><code><span class="tag">&lt;template&gt;</span>
  <span class="tag">&lt;div</span> <span class="attribute">class</span>=<span class="string">"app"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;nav</span> <span class="attribute">class</span>=<span class="string">"nav"</span><span class="tag">&gt;</span>
      <span class="tag">&lt;h1</span> <span class="attribute">class</span>=<span class="string">"logo"</span><span class="tag">&gt;</span>TaskFlow<span class="tag">&lt;/h1&gt;</span>
      <span class="tag">&lt;div</span> <span class="attribute">class</span>=<span class="string">"nav-links"</span><span class="tag">&gt;</span>
        <span class="tag">&lt;button</span> 
          <span class="directive">:class</span>=<span class="string">"{ active: view === 'tasks' }"</span>
          <span class="directive">@click</span>=<span class="string">"view = 'tasks'"</span><span class="tag">&gt;</span>
          📋 Tasks
        <span class="tag">&lt;/button&gt;</span>
        <span class="tag">&lt;button</span> 
          <span class="directive">:class</span>=<span class="string">"{ active: view === 'team' }"</span>
          <span class="directive">@click</span>=<span class="string">"view = 'team'"</span><span class="tag">&gt;</span>
          👥 Team
        <span class="tag">&lt;/button&gt;</span>
      <span class="tag">&lt;/div&gt;</span>
    <span class="tag">&lt;/nav&gt;</span>

    <span class="comment">&lt;!-- Tasks View --&gt;</span>
    <span class="tag">&lt;div</span> <span class="directive">v-if</span>=<span class="string">"view === 'tasks'"</span> <span class="attribute">class</span>=<span class="string">"view"</span><span class="tag">&gt;</span>
      <span class="tag">&lt;h2&gt;</span>My Tasks<span class="tag">&lt;/h2&gt;</span>
      <span class="tag">&lt;p</span> <span class="attribute">class</span>=<span class="string">"count"</span><span class="tag">&gt;</span><span class="mustache">{{</span> activeCount <span class="mustache">}}</span> active<span class="tag">&lt;/p&gt;</span>
      <span class="tag">&lt;ul&gt;</span>
        <span class="tag">&lt;li</span> <span class="directive">v-for</span>=<span class="string">"task in tasks"</span><span class="tag">&gt;</span>
          <span class="tag">&lt;input</span> <span class="attribute">type</span>=<span class="string">"checkbox"</span>
            <span class="directive">:checked</span>=<span class="string">"task.completed"</span>
            <span class="directive">@change</span>=<span class="string">"toggleTask(task.id)"</span> <span class="tag">/&gt;</span>
          <span class="tag">&lt;span</span> <span class="directive">:class</span>=<span class="string">"{ done: task.completed }"</span><span class="tag">&gt;</span>
            <span class="mustache">{{</span> task.title <span class="mustache">}}</span>
          <span class="tag">&lt;/span&gt;</span>
        <span class="tag">&lt;/li&gt;</span>
      <span class="tag">&lt;/ul&gt;</span>
    <span class="tag">&lt;/div&gt;</span>

    <span class="comment">&lt;!-- Team View --&gt;</span>
    <span class="tag">&lt;div</span> <span class="directive">v-else</span> <span class="attribute">class</span>=<span class="string">"view"</span><span class="tag">&gt;</span>
      <span class="tag">&lt;h2&gt;</span>Team Members<span class="tag">&lt;/h2&gt;</span>
      <span class="tag">&lt;div</span> <span class="attribute">class</span>=<span class="string">"team-grid"</span><span class="tag">&gt;</span>
        <span class="tag">&lt;div</span> <span class="directive">v-for</span>=<span class="string">"member in team"</span> 
             <span class="attribute">class</span>=<span class="string">"team-card"</span><span class="tag">&gt;</span>
          <span class="tag">&lt;div</span> <span class="attribute">class</span>=<span class="string">"avatar"</span><span class="tag">&gt;</span>
            <span class="mustache">{{</span> member.initials <span class="mustache">}}</span>
          <span class="tag">&lt;/div&gt;</span>
          <span class="tag">&lt;h3&gt;</span><span class="mustache">{{</span> member.name <span class="mustache">}}</span><span class="tag">&lt;/h3&gt;</span>
          <span class="tag">&lt;p</span> <span class="attribute">class</span>=<span class="string">"role"</span><span class="tag">&gt;</span><span class="mustache">{{</span> member.role <span class="mustache">}}</span><span class="tag">&lt;/p&gt;</span>
          <span class="tag">&lt;span</span> <span class="attribute">class</span>=<span class="string">"status"</span><span class="tag">&gt;</span>
            <span class="mustache">{{</span> member.status <span class="mustache">}}</span>
          <span class="tag">&lt;/span&gt;</span>
        <span class="tag">&lt;/div&gt;</span>
      <span class="tag">&lt;/div&gt;</span>
    <span class="tag">&lt;/div&gt;</span>
  <span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;/template&gt;</span>

<span class="tag">&lt;script</span> <span class="attribute">setup</span> <span class="attribute">lang</span>=<span class="string">"ts"</span><span class="tag">&gt;</span>
<span class="keyword">import</span> { ref, computed } <span class="keyword">from</span> <span class="string">'vue'</span>

<span class="keyword">const</span> view = <span class="function">ref</span>(<span class="string">'tasks'</span>)

<span class="keyword">const</span> tasks = <span class="function">ref</span>([
  { id: <span class="number">1</span>, title: <span class="string">'Design homepage'</span>, 
    completed: <span class="keyword">true</span> },
  { id: <span class="number">2</span>, title: <span class="string">'Build API'</span>, 
    completed: <span class="keyword">false</span> },
  { id: <span class="number">3</span>, title: <span class="string">'Write docs'</span>, 
    completed: <span class="keyword">false</span> }
])

<span class="keyword">const</span> team = <span class="function">ref</span>([
  { id: <span class="number">1</span>, name: <span class="string">'Alice Chen'</span>, 
    initials: <span class="string">'AC'</span>, role: <span class="string">'Designer'</span>,
    status: <span class="string">'🟢 Available'</span> },
  { id: <span class="number">2</span>, name: <span class="string">'Bob Smith'</span>, 
    initials: <span class="string">'BS'</span>, role: <span class="string">'Developer'</span>,
    status: <span class="string">'🔴 Busy'</span> },
  { id: <span class="number">3</span>, name: <span class="string">'Carol Davis'</span>, 
    initials: <span class="string">'CD'</span>, role: <span class="string">'Manager'</span>,
    status: <span class="string">'🟡 Away'</span> }
])

<span class="keyword">const</span> activeCount = <span class="function">computed</span>(() =&gt; 
  tasks.value.<span class="function">filter</span>(t =&gt; 
    !t.completed
  ).length
)

<span class="keyword">function</span> <span class="function">toggleTask</span>(id: <span class="type">number</span>) {
  <span class="keyword">const</span> task = tasks.value
    .<span class="function">find</span>(t =&gt; t.id === id)
  <span class="keyword">if</span> (task) {
    task.completed = !task.completed
  }
}
<span class="tag">&lt;/script&gt;</span></code></pre>
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
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
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

.directive {
  color: #c678dd;
  /* Purple for Vue directives */
}

.mustache {
  color: #e5c07b;
  /* Yellow for mustache brackets */
}

.comment {
  color: #5c6370;
  /* Gray for comments */
  font-style: italic;
}

.keyword {
  color: #c678dd;
  /* Purple for keywords */
}

.function {
  color: #61afef;
  /* Blue for functions */
}

.type {
  color: #e5c07b;
  /* Yellow for types */
}

.number {
  color: #d19a66;
  /* Orange for numbers */
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
