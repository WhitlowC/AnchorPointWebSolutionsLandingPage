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
        <pre class="code-content"><code>{{ codeContent }}</code></pre>
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
}

@media (max-width: 768px) {
    .code-content {
        font-size: 0.75rem;
        padding: 1rem;
    }
}
</style>
