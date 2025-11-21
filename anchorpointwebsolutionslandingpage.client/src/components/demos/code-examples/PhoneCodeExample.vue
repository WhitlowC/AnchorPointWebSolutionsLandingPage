<template>
  <div class="code-example">
    <div class="code-header">
      <span class="code-language">React Native + TypeScript</span>
      <div class="code-dots">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
      </div>
    </div>
    <pre class="code-content" v-pre><code><span class="comment">// FitnessApp.tsx - React Native Mobile App</span>
<span class="keyword">import</span> <span class="import-name">React</span>, { <span class="import-name">useState</span>, <span class="import-name">useEffect</span> } <span class="keyword">from</span> <span class="string">'react'</span>;
<span class="keyword">import</span> {
  <span class="import-name">View</span>, <span class="import-name">Text</span>, <span class="import-name">TouchableOpacity</span>,
  <span class="import-name">StyleSheet</span>, <span class="import-name">ScrollView</span>
} <span class="keyword">from</span> <span class="string">'react-native'</span>;
<span class="keyword">import</span> { <span class="import-name">NavigationContainer</span> } <span class="keyword">from</span> <span class="string">'@react-navigation/native'</span>;
<span class="keyword">import</span> { <span class="import-name">createBottomTabNavigator</span> } <span class="keyword">from</span> <span class="string">'@react-navigation/bottom-tabs'</span>;

<span class="comment">// Home Screen Component</span>
<span class="keyword">const</span> <span class="var-name">HomeScreen</span> = () => {
  <span class="keyword">const</span> [<span class="var-name">stats</span>, <span class="var-name">setStats</span>] = <span class="function">useState</span>({
    steps: <span class="number">8542</span>,
    calories: <span class="number">420</span>,
    heartRate: <span class="number">72</span>
  });

  <span class="keyword">return</span> (
    &lt;<span class="tag">ScrollView</span> <span class="attribute">style</span>={styles.container}&gt;
      &lt;<span class="tag">View</span> <span class="attribute">style</span>={styles.header}&gt;
        &lt;<span class="tag">Text</span> <span class="attribute">style</span>={styles.title}&gt;FitTracker&lt;/<span class="tag">Text</span>&gt;
      &lt;/<span class="tag">View</span>&gt;
      
      &lt;<span class="tag">View</span> <span class="attribute">style</span>={styles.statsContainer}&gt;
        &lt;<span class="tag">StatCard</span> 
          <span class="attribute">icon</span>=<span class="string">"🏃"</span> 
          <span class="attribute">value</span>={stats.steps} 
          <span class="attribute">label</span>=<span class="string">"Steps"</span> 
        /&gt;
        &lt;<span class="tag">StatCard</span> 
          <span class="attribute">icon</span>=<span class="string">"🔥"</span> 
          <span class="attribute">value</span>={stats.calories} 
          <span class="attribute">label</span>=<span class="string">"Calories"</span> 
        /&gt;
        &lt;<span class="tag">StatCard</span> 
          <span class="attribute">icon</span>=<span class="string">"❤️"</span> 
          <span class="attribute">value</span>={stats.heartRate} 
          <span class="attribute">label</span>=<span class="string">"Heart Rate"</span> 
        /&gt;
      &lt;/<span class="tag">View</span>&gt;

      &lt;<span class="tag">TouchableOpacity</span> 
        <span class="attribute">style</span>={styles.actionButton}
        <span class="attribute">onPress</span>={() => <span class="function">startWorkout</span>()}
      &gt;
        &lt;<span class="tag">Text</span> <span class="attribute">style</span>={styles.buttonText}&gt;
          Start Workout
        &lt;/<span class="tag">Text</span>&gt;
      &lt;/<span class="tag">TouchableOpacity</span>&gt;
    &lt;/<span class="tag">ScrollView</span>&gt;
  );
};

<span class="comment">// Stat Card Component</span>
<span class="keyword">const</span> <span class="var-name">StatCard</span> = ({ icon, value, label }) => (
  &lt;<span class="tag">View</span> <span class="attribute">style</span>={styles.statCard}&gt;
    &lt;<span class="tag">Text</span> <span class="attribute">style</span>={styles.statIcon}&gt;{icon}&lt;/<span class="tag">Text</span>&gt;
    &lt;<span class="tag">Text</span> <span class="attribute">style</span>={styles.statValue}&gt;{value}&lt;/<span class="tag">Text</span>&gt;
    &lt;<span class="tag">Text</span> <span class="attribute">style</span>={styles.statLabel}&gt;{label}&lt;/<span class="tag">Text</span>&gt;
  &lt;/<span class="tag">View</span>&gt;
);

<span class="comment">// Navigation Setup</span>
<span class="keyword">const</span> <span class="var-name">Tab</span> = <span class="function">createBottomTabNavigator</span>();

<span class="keyword">export default</span> <span class="keyword">function</span> <span class="function">App</span>() {
  <span class="keyword">return</span> (
    &lt;<span class="tag">NavigationContainer</span>&gt;
      &lt;<span class="tag">Tab.Navigator</span>
        <span class="attribute">screenOptions</span>={{
          tabBarStyle: styles.tabBar,
          headerShown: <span class="keyword">false</span>
        }}
      &gt;
        &lt;<span class="tag">Tab.Screen</span> <span class="attribute">name</span>=<span class="string">"Home"</span> <span class="attribute">component</span>={HomeScreen} /&gt;
        &lt;<span class="tag">Tab.Screen</span> <span class="attribute">name</span>=<span class="string">"Workout"</span> <span class="attribute">component</span>={WorkoutScreen} /&gt;
        &lt;<span class="tag">Tab.Screen</span> <span class="attribute">name</span>=<span class="string">"Profile"</span> <span class="attribute">component</span>={ProfileScreen} /&gt;
      &lt;/<span class="tag">Tab.Navigator</span>&gt;
    &lt;/<span class="tag">NavigationContainer</span>&gt;
  );
}

<span class="keyword">const</span> <span class="var-name">styles</span> = StyleSheet.<span class="function">create</span>({
  container: {
    flex: <span class="number">1</span>,
    backgroundColor: <span class="string">'#fff'</span>,
  },
  statsContainer: {
    flexDirection: <span class="string">'row'</span>,
    gap: <span class="number">10</span>,
    padding: <span class="number">16</span>,
  },
  statCard: {
    flex: <span class="number">1</span>,
    backgroundColor: <span class="string">'#667eea'</span>,
    padding: <span class="number">16</span>,
    borderRadius: <span class="number">12</span>,
    alignItems: <span class="string">'center'</span>,
  },
});</code></pre>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const codeContent = ref(`// FitnessApp.tsx - React Native Mobile App
import React, { useState, useEffect } from 'react';
import {
  View, Text, TouchableOpacity,
  StyleSheet, ScrollView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Home Screen Component
const HomeScreen = () => {
  const [stats, setStats] = useState({
    steps: 8542,
    calories: 420,
    heartRate: 72
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>FitTracker</Text>
      </View>
      
      <View style={styles.statsContainer}>
        <StatCard 
          icon="🏃" 
          value={stats.steps} 
          label="Steps" 
        />
        <StatCard 
          icon="🔥" 
          value={stats.calories} 
          label="Calories" 
        />
        <StatCard 
          icon="❤️" 
          value={stats.heartRate} 
          label="Heart Rate" 
        />
      </View>

      <TouchableOpacity 
        style={styles.actionButton}
        onPress={() => startWorkout()}
      >
        <Text style={styles.buttonText}>
          Start Workout
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Stat Card Component
const StatCard = ({ icon, value, label }) => (
  <View style={styles.statCard}>
    <Text style={styles.statIcon}>{icon}</Text>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

// Navigation Setup
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBar,
          headerShown: false
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Workout" component={WorkoutScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 10,
    padding: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#667eea',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  actionButton: {
    margin: 16,
    padding: 16,
    backgroundColor: '#667eea',
    borderRadius: 12,
    alignItems: 'center',
  },
});`)
</script>

<style scoped>
.code-example {
  background: #1e1e1e;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border: 1px solid #2d2d2d;
  display: flex;
  flex-direction: column;
  max-height: 800px;
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
  overscroll-behavior: auto;
  min-height: 0;
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
