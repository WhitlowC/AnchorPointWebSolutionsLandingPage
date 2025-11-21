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
        <pre class="code-content"><code>{{ codeContent }}</code></pre>
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
}

@media (max-width: 768px) {
    .code-content {
        font-size: 0.75rem;
        padding: 1rem;
    }
}
</style>
