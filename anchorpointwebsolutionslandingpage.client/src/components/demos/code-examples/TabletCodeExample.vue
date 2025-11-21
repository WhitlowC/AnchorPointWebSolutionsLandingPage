<template>
  <div class="code-example">
    <div class="code-header">
      <span class="code-language">React Native / Swift</span>
      <div class="code-dots">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
      </div>
    </div>
    <pre class="code-content" v-pre><code><span class="comment">// EnterpriseDashboard.tsx - Tablet Dashboard</span>
<span class="keyword">import</span> <span class="import-name">React</span>, { <span class="import-name">useState</span> } <span class="keyword">from</span> <span class="string">'react'</span>;
<span class="keyword">import</span> {
  <span class="import-name">View</span>, <span class="import-name">Text</span>, <span class="import-name">TouchableOpacity</span>,
  <span class="import-name">StyleSheet</span>, <span class="import-name">ScrollView</span>
} <span class="keyword">from</span> <span class="string">'react-native'</span>;

<span class="comment">// Main Dashboard Component</span>
<span class="keyword">const</span> <span class="var-name">DashboardScreen</span> = () => {
  <span class="keyword">const</span> [<span class="var-name">activeView</span>, <span class="var-name">setActiveView</span>] = <span class="function">useState</span>(<span class="string">'dashboard'</span>);

  <span class="keyword">const</span> <span class="var-name">metrics</span> = [
    { icon: <span class="string">'💰'</span>, label: <span class="string">'Revenue'</span>, 
      value: <span class="string">'$54,239'</span>, change: <span class="string">'+12.5%'</span> },
    { icon: <span class="string">'👥'</span>, label: <span class="string">'Customers'</span>, 
      value: <span class="string">'1,429'</span>, change: <span class="string">'+8.2%'</span> },
    { icon: <span class="string">'📦'</span>, label: <span class="string">'Orders'</span>, 
      value: <span class="string">'342'</span>, change: <span class="string">'-3.1%'</span> },
  ];

  <span class="keyword">return</span> (
    &lt;<span class="tag">View</span> <span class="attribute">style</span>={styles.container}&gt;
      <span class="comment">{/* Sidebar Navigation */}</span>
      &lt;<span class="tag">View</span> <span class="attribute">style</span>={styles.sidebar}&gt;
        &lt;<span class="tag">View</span> <span class="attribute">style</span>={styles.sidebarHeader}&gt;
          &lt;<span class="tag">Text</span> <span class="attribute">style</span>={styles.companyLogo}&gt;🏢&lt;/<span class="tag">Text</span>&gt;
          &lt;<span class="tag">Text</span> <span class="attribute">style</span>={styles.companyName}&gt;TechCorp&lt;/<span class="tag">Text</span>&gt;
        &lt;/<span class="tag">View</span>&gt;
        
        &lt;<span class="tag">NavButton</span> 
          <span class="attribute">icon</span>=<span class="string">"📊"</span> 
          <span class="attribute">label</span>=<span class="string">"Dashboard"</span> 
          <span class="attribute">active</span>={activeView === <span class="string">'dashboard'</span>}
          <span class="attribute">onPress</span>={() => <span class="function">setActiveView</span>(<span class="string">'dashboard'</span>)}
        /&gt;
      &lt;/<span class="tag">View</span>&gt;

      <span class="comment">{/* Content Area */}</span>
      &lt;<span class="tag">ScrollView</span> <span class="attribute">style</span>={styles.content}&gt;
        &lt;<span class="tag">Text</span> <span class="attribute">style</span>={styles.title}&gt;
          Dashboard Overview
        &lt;/<span class="tag">Text</span>&gt;

        <span class="comment">{/* Metrics Grid */}</span>
        &lt;<span class="tag">View</span> <span class="attribute">style</span>={styles.metricsGrid}&gt;
          {metrics.<span class="function">map</span>((metric) => (
            &lt;<span class="tag">MetricCard</span> <span class="attribute">key</span>={metric.label} {...metric} /&gt;
          ))}
        &lt;/<span class="tag">View</span>&gt;

        <span class="comment">{/* Charts Section */}</span>
        &lt;<span class="tag">View</span> <span class="attribute">style</span>={styles.chartsSection}&gt;
          &lt;<span class="tag">ChartCard</span> 
            <span class="attribute">title</span>=<span class="string">"Sales Performance"</span> 
            <span class="attribute">data</span>={[<span class="number">65</span>, <span class="number">78</span>, <span class="number">45</span>, <span class="number">89</span>, <span class="number">72</span>, <span class="number">95</span>]}
          /&gt;
          &lt;<span class="tag">RevenueChart</span> <span class="attribute">total</span>=<span class="string">"$2.4M"</span> /&gt;
        &lt;/<span class="tag">View</span>&gt;
      &lt;/<span class="tag">ScrollView</span>&gt;
    &lt;/<span class="tag">View</span>&gt;
  );
};

<span class="comment">// Metric Card Component</span>
<span class="keyword">const</span> <span class="var-name">MetricCard</span> = ({ icon, label, value, change }) => (
  &lt;<span class="tag">View</span> <span class="attribute">style</span>={styles.metricCard}&gt;
    &lt;<span class="tag">Text</span> <span class="attribute">style</span>={styles.metricIcon}&gt;{icon}&lt;/<span class="tag">Text</span>&gt;
    &lt;<span class="tag">View</span>&gt;
      &lt;<span class="tag">Text</span> <span class="attribute">style</span>={styles.metricValue}&gt;{value}&lt;/<span class="tag">Text</span>&gt;
      &lt;<span class="tag">Text</span> <span class="attribute">style</span>={styles.metricLabel}&gt;{label}&lt;/<span class="tag">Text</span>&gt;
    &lt;/<span class="tag">View</span>&gt;
  &lt;/<span class="tag">View</span>&gt;
);

<span class="keyword">const</span> <span class="var-name">styles</span> = StyleSheet.<span class="function">create</span>({
  container: {
    flex: <span class="number">1</span>,
    flexDirection: <span class="string">'row'</span>,
    backgroundColor: <span class="string">'#f9fafb'</span>,
  },
  sidebar: {
    width: <span class="number">200</span>,
    backgroundColor: <span class="string">'#fff'</span>,
  },
  metricsGrid: {
    flexDirection: <span class="string">'row'</span>,
    gap: <span class="number">16</span>,
  },
});

<span class="keyword">export default</span> DashboardScreen;</code></pre>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const codeContent = ref(`// EnterpriseDashboard.tsx - Tablet Dashboard
import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity,
  StyleSheet, ScrollView
} from 'react-native';

// Main Dashboard Component
const DashboardScreen = () => {
  const [activeView, setActiveView] = useState('dashboard');

  const metrics = [
    { icon: '💰', label: 'Revenue', 
      value: '$54,239', change: '+12.5%' },
    { icon: '👥', label: 'Customers', 
      value: '1,429', change: '+8.2%' },
    { icon: '📦', label: 'Orders', 
      value: '342', change: '-3.1%' },
    { icon: '⭐', label: 'Rating', 
      value: '4.8/5', change: '+0.3' }
  ];

  return (
    <View style={styles.container}>
      {/* Sidebar Navigation */}
      <View style={styles.sidebar}>
        <View style={styles.sidebarHeader}>
          <Text style={styles.companyLogo}>🏢</Text>
          <Text style={styles.companyName}>TechCorp</Text>
        </View>
        
        <NavButton 
          icon="📊" 
          label="Dashboard" 
          active={activeView === 'dashboard'}
          onPress={() => setActiveView('dashboard')}
        />
        <NavButton 
          icon="📈" 
          label="Analytics"
          active={activeView === 'analytics'}
          onPress={() => setActiveView('analytics')}
        />
        <NavButton 
          icon="👥" 
          label="Team"
          active={activeView === 'team'}
          onPress={() => setActiveView('team')}
        />
      </View>

      {/* Content Area */}
      <ScrollView style={styles.content}>
        <Text style={styles.title}>
          Dashboard Overview
        </Text>

        {/* Metrics Grid */}
        <View style={styles.metricsGrid}>
          {metrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </View>

        {/* Charts Section */}
        <View style={styles.chartsSection}>
          <ChartCard 
            title="Sales Performance" 
            data={[65, 78, 45, 89, 72, 95]}
          />
          <RevenueChart total="$2.4M" />
        </View>
      </ScrollView>
    </View>
  );
};

// Metric Card Component
const MetricCard = ({ icon, label, value, change }) => (
  <View style={styles.metricCard}>
    <Text style={styles.metricIcon}>{icon}</Text>
    <View>
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricLabel}>{label}</Text>
      <Text style={[
        styles.metricChange,
        change.startsWith('+') 
          ? styles.positive 
          : styles.negative
      ]}>
        {change}
      </Text>
    </View>
  </View>
);

// Chart Card with Bar Chart
const ChartCard = ({ title, data }) => (
  <View style={styles.chartCard}>
    <Text style={styles.chartTitle}>{title}</Text>
    <View style={styles.chartBars}>
      {data.map((value, index) => (
        <View 
          key={index}
          style={[
            styles.chartBar, 
            { height: \`\${value}%\` }
          ]}
        />
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f9fafb',
  },
  sidebar: {
    width: 200,
    backgroundColor: '#fff',
    borderRightWidth: 1,
    borderRightColor: '#e5e7eb',
  },
  content: {
    flex: 1,
    padding: 24,
  },
  metricsGrid: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
  },
  metricCard: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    gap: 16,
  },
  chartsSection: {
    flexDirection: 'row',
    gap: 16,
  },
  chartCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 12,
  },
});

export default DashboardScreen;`)
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
  font-family: inherit;
}

/* Syntax Highlighting */
.keyword {
  color: #c678dd;
}

.function {
  color: #61afef;
}

.string {
  color: #98c379;
}

.number {
  color: #d19a66;
}

.comment {
  color: #5c6370;
  font-style: italic;
}

.tag {
  color: #e06c75;
}

.attribute {
  color: #d19a66;
}

.import-name {
  color: #e5c07b;
}

.var-name {
  color: #e06c75;
}

/* Custom scrollbar */
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

@media (max-width: 768px) {
  .code-content {
    font-size: 0.75rem;
    padding: 1rem;
  }
}
</style>
