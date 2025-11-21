<script setup lang="ts">
import { ref, nextTick, watch, onMounted, onUnmounted } from 'vue'
import ApiDemo from '../demos/ApiDemo.vue'
import SpaDemo from '../demos/SpaDemo.vue'
import DashboardDemo from '../demos/DashboardDemo.vue'
import SpaCodeExample from '../demos/code-examples/SpaCodeExample.vue'
import ApiCodeExample from '../demos/code-examples/ApiCodeExample.vue'
import DashboardCodeExample from '../demos/code-examples/DashboardCodeExample.vue'

interface Example {
    title: string
    description: string
    type: 'code' | 'ui' | 'demo' | 'api-demo' | 'spa-demo' | 'dashboard-demo'
    content: string
    language?: string
    preview?: string
}

defineProps<{
    features: string[]
    examples?: Example[]
}>()

const activeTab = ref(0)
const previewRefs = ref<(HTMLElement | null)[]>([])
const codeRefs = ref<(HTMLElement | null)[]>([])
let resizeObserver: ResizeObserver | null = null

// Watch for tab changes and update heights
watch(activeTab, async () => {
    await nextTick()
    setTimeout(() => {
        matchHeights()
    }, 50)
})

function matchHeights() {
    const previewEl = previewRefs.value[activeTab.value]
    const codeEl = codeRefs.value[activeTab.value]

    if (previewEl && codeEl) {
        const previewHeight = previewEl.offsetHeight
        console.log('Preview height:', previewHeight, 'Setting code height to:', previewHeight)
        codeEl.style.height = `${previewHeight}px`
        codeEl.style.maxHeight = `${previewHeight}px`
    }
}

onMounted(() => {
    // Initial height matching
    setTimeout(() => {
        matchHeights()
    }, 200)

    // Set up ResizeObserver to watch for preview size changes
    resizeObserver = new ResizeObserver(() => {
        matchHeights()
    })

    // Observe all preview elements
    setTimeout(() => {
        previewRefs.value.forEach(el => {
            if (el) {
                resizeObserver?.observe(el)
            }
        })
    }, 300)
})

onUnmounted(() => {
    resizeObserver?.disconnect()
})
</script>

<template>
    <section class="service-features-enhanced">
        <div class="container">
            <h2 class="section-title">What We Offer</h2>

            <!-- Features Grid -->
            <div class="features-grid">
                <div v-for="feature in features" :key="feature" class="feature-item">
                    <span class="feature-icon">✓</span>
                    <span class="feature-text">{{ feature }}</span>
                </div>
            </div>

            <!-- Visual Examples Section -->
            <div v-if="examples && examples.length > 0" class="examples-section">
                <h3 class="examples-title">See It In Action</h3>
                <p class="examples-subtitle">Real examples of the solutions we build</p>

                <!-- Example Tabs -->
                <div class="tabs">
                    <button v-for="(example, index) in examples" :key="index"
                        :class="['tab-button', { active: activeTab === index }]" @click="activeTab = index">
                        {{ example.title }}
                    </button>
                </div>

                <!-- Example Content -->
                <div class="tab-content">
                    <div v-for="(example, index) in examples" :key="index" v-show="activeTab === index"
                        class="example-panel">
                        <p class="example-description">{{ example.description }}</p>

                        <!-- Code Example -->
                        <div v-if="example.type === 'code'" class="code-example">
                            <div class="code-header">
                                <span class="code-language">{{ example.language || 'code' }}</span>
                                <div class="code-dots">
                                    <span class="dot red"></span>
                                    <span class="dot yellow"></span>
                                    <span class="dot green"></span>
                                </div>
                            </div>
                            <pre class="code-content"><code>{{ example.content }}</code></pre>
                        </div>

                        <!-- UI Mockup -->
                        <div v-else-if="example.type === 'ui'" class="ui-mockup">
                            <div class="browser-chrome">
                                <div class="browser-dots">
                                    <span class="dot red"></span>
                                    <span class="dot yellow"></span>
                                    <span class="dot green"></span>
                                </div>
                                <div class="browser-url">{{ example.content }}</div>
                            </div>
                            <div class="mockup-content" v-html="example.content"></div>
                        </div>

                        <!-- Demo (Code + Preview) -->
                        <div v-else-if="example.type === 'demo'" class="demo-container">
                            <div class="demo-split">
                                <!-- Code Side -->
                                <div class="demo-code">
                                    <div class="code-example">
                                        <div class="code-header">
                                            <span class="code-language">{{ example.language || 'code' }}</span>
                                            <div class="code-dots">
                                                <span class="dot red"></span>
                                                <span class="dot yellow"></span>
                                                <span class="dot green"></span>
                                            </div>
                                        </div>
                                        <pre class="code-content"><code>{{ example.content }}</code></pre>
                                    </div>
                                </div>

                                <!-- Preview Side -->
                                <div class="demo-preview">
                                    <div class="preview-header">
                                        <span class="preview-label">Live Preview</span>
                                        <div class="code-dots">
                                            <span class="dot red"></span>
                                            <span class="dot yellow"></span>
                                            <span class="dot green"></span>
                                        </div>
                                    </div>
                                    <div class="preview-content" v-html="example.preview"></div>
                                </div>
                            </div>
                        </div>

                        <!-- API Demo (Code + Interactive Component) -->
                        <div v-else-if="example.type === 'api-demo'" class="demo-container">
                            <div class="demo-split">
                                <!-- Code Side -->
                                <div class="demo-code" :ref="el => el && (codeRefs[index] = el as HTMLElement)">
                                    <ApiCodeExample />
                                </div>

                                <!-- Interactive API Demo -->
                                <div class="demo-preview" :ref="el => el && (previewRefs[index] = el as HTMLElement)">
                                    <div class="preview-header">
                                        <span class="preview-label">Live Preview</span>
                                        <div class="code-dots">
                                            <span class="dot red"></span>
                                            <span class="dot yellow"></span>
                                            <span class="dot green"></span>
                                        </div>
                                    </div>
                                    <div class="preview-content">
                                        <ApiDemo />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- SPA Demo (Code + Interactive Component) -->
                        <div v-else-if="example.type === 'spa-demo'" class="demo-container">
                            <div class="demo-split">
                                <!-- Code Side -->
                                <div class="demo-code" :ref="el => el && (codeRefs[index] = el as HTMLElement)">
                                    <SpaCodeExample />
                                </div>

                                <!-- Interactive SPA Demo -->
                                <div class="demo-preview" :ref="el => el && (previewRefs[index] = el as HTMLElement)">
                                    <div class="preview-header">
                                        <span class="preview-label">Live Preview</span>
                                        <div class="code-dots">
                                            <span class="dot red"></span>
                                            <span class="dot yellow"></span>
                                            <span class="dot green"></span>
                                        </div>
                                    </div>
                                    <div class="preview-content">
                                        <SpaDemo />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Dashboard Demo (Code + Interactive Component) -->
                        <div v-else-if="example.type === 'dashboard-demo'" class="demo-container">
                            <div class="demo-split">
                                <!-- Code Side -->
                                <div class="demo-code" :ref="el => el && (codeRefs[index] = el as HTMLElement)">
                                    <DashboardCodeExample />
                                </div>

                                <!-- Interactive Dashboard Demo -->
                                <div class="demo-preview" :ref="el => el && (previewRefs[index] = el as HTMLElement)">
                                    <div class="preview-header">
                                        <span class="preview-label">Live Preview</span>
                                        <div class="code-dots">
                                            <span class="dot red"></span>
                                            <span class="dot yellow"></span>
                                            <span class="dot green"></span>
                                        </div>
                                    </div>
                                    <div class="preview-content">
                                        <DashboardDemo />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.service-features-enhanced {
    padding: 4rem 2rem;
    background: #f9fafb;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1a1a1a;
    text-align: center;
    margin-bottom: 3rem;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-bottom: 4rem;
}

.feature-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    transition: all 0.3s;
}

.feature-item:hover {
    transform: translateX(10px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.feature-icon {
    width: 30px;
    height: 30px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-weight: 600;
}

.feature-text {
    font-size: 1.05rem;
    color: #1a1a1a;
}

/* Examples Section */
.examples-section {
    margin-top: 5rem;
    padding-top: 3rem;
    border-top: 2px solid #e5e7eb;
}

.examples-title {
    font-size: 2rem;
    font-weight: 700;
    color: #1a1a1a;
    text-align: center;
    margin-bottom: 0.5rem;
}

.examples-subtitle {
    text-align: center;
    color: #6b7280;
    font-size: 1.1rem;
    margin-bottom: 2rem;
}

/* Tabs */
.tabs {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;
}

.tab-button {
    padding: 0.75rem 1.5rem;
    background: white;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    color: #6b7280;
    cursor: pointer;
    transition: all 0.3s;
}

.tab-button:hover {
    border-color: #667eea;
    color: #667eea;
}

.tab-button.active {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-color: transparent;
    color: white;
}

/* Tab Content */
.tab-content {
    min-height: 400px;
}

.example-panel {
    animation: fadeIn 0.3s ease-in;
}

.example-description {
    font-size: 1.1rem;
    color: #4b5563;
    text-align: center;
    margin-bottom: 2rem;
    line-height: 1.6;
}

/* UI Mockup */
.ui-mockup {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    border: 1px solid #e5e7eb;
}

.browser-chrome {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem 1rem;
    background: #f3f4f6;
    border-bottom: 1px solid #e5e7eb;
}

.browser-dots {
    display: flex;
    gap: 0.4rem;
}

.browser-url {
    flex: 1;
    padding: 0.4rem 1rem;
    background: white;
    border-radius: 6px;
    font-size: 0.875rem;
    color: #6b7280;
    border: 1px solid #e5e7eb;
}

.mockup-content {
    padding: 2rem;
    min-height: 300px;
}

/* Demo Container */
.demo-container {
    width: 100%;
}

.demo-split {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    align-items: stretch;
}

.demo-code {
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow: hidden;
}

.demo-preview {
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 2rem;
}

.preview-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background: #f3f4f6;
    border-radius: 12px 12px 0 0;
    border: 1px solid #e5e7eb;
    border-bottom: none;
}

.preview-label {
    font-size: 0.875rem;
    color: #4b5563;
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

.preview-content {
    background: white;
    border: 1px solid #e5e7eb;
    border-top: none;
    border-radius: 0 0 12px 12px;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
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

@media (max-width: 768px) {
    .features-grid {
        grid-template-columns: 1fr;
    }

    .section-title {
        font-size: 2rem;
    }

    .examples-title {
        font-size: 1.5rem;
    }

    .tabs {
        flex-direction: column;
    }

    .tab-button {
        width: 100%;
    }

    .code-content {
        font-size: 0.8rem;
    }

    .demo-split {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .demo-preview {
        position: static;
    }
}
</style>
