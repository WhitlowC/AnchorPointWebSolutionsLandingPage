<script setup lang="ts">
import { ref } from 'vue'

const getResponseVisible = ref(false)
const postResponseVisible = ref(false)

const getResponse = ref({
    success: true,
    data: [
        {
            id: 1,
            name: "Wireless Headphones",
            category: "electronics",
            price: 129.99,
            inStock: true,
            rating: 4.5
        },
        {
            id: 2,
            name: "Smart Watch",
            category: "electronics",
            price: 299.99,
            inStock: true,
            rating: 4.8
        },
        {
            id: 3,
            name: "Bluetooth Speaker",
            category: "electronics",
            price: 79.99,
            inStock: false,
            rating: 4.3
        }
    ],
    metadata: {
        total: 3,
        page: 1,
        timestamp: new Date().toISOString()
    }
})

const postResponse = ref({
    success: true,
    message: "Product created successfully",
    data: {
        id: 4,
        name: "USB-C Cable",
        category: "electronics",
        price: 19.99,
        inStock: true,
        rating: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
})

function callGetApi() {
    getResponseVisible.value = true
}

function callPostApi() {
    postResponseVisible.value = true
}
</script>

<template>
    <div class="api-demo">
        <div class="api-header">
            <h3>API Testing Console</h3>
            <p>Test RESTful endpoints with live responses</p>
        </div>
        <div class="api-container">
            <!-- GET Request -->
            <div class="api-tester">
                <span class="api-label">📥 Fetch Products</span>
                <div class="api-endpoint">
                    <span class="api-method get">GET</span>
                    <span class="api-path">/api/products?category=electronics</span>
                </div>
                <div class="api-controls">
                    <button class="api-button" @click="callGetApi">▶ Send Request</button>
                    <div v-if="getResponseVisible" class="api-info">
                        <span>⚡</span>
                        <span class="api-timing">Response time: 142ms</span>
                    </div>
                </div>
                <div v-if="getResponseVisible" class="api-response">
                    <div class="api-response-header">
                        <span class="api-response-label">Response</span>
                        <span class="status-badge">200 OK</span>
                    </div>
                    <div class="api-response-body">{{ JSON.stringify(getResponse, null, 2) }}</div>
                </div>
            </div>

            <!-- POST Request -->
            <div class="api-tester">
                <span class="api-label">📤 Create Product</span>
                <div class="api-endpoint">
                    <span class="api-method post">POST</span>
                    <span class="api-path">/api/products</span>
                </div>
                <div class="api-controls">
                    <button class="api-button" @click="callPostApi">▶ Send Request</button>
                    <div v-if="postResponseVisible" class="api-info">
                        <span>⚡</span>
                        <span class="api-timing">Response time: 89ms</span>
                    </div>
                </div>
                <div v-if="postResponseVisible" class="api-response">
                    <div class="api-response-header">
                        <span class="api-response-label">Response</span>
                        <span class="status-badge created">201 Created</span>
                    </div>
                    <div class="api-response-body">{{ JSON.stringify(postResponse, null, 2) }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.api-demo {
    font-family: system-ui, -apple-system, sans-serif;
}

.api-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 1.5rem;
    border-radius: 12px 12px 0 0;
    margin-bottom: 0;
}

.api-header h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.5rem;
    font-weight: 700;
}

.api-header p {
    margin: 0;
    opacity: 0.9;
    font-size: 0.95rem;
}

.api-container {
    background: white;
    border-radius: 0 0 12px 12px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    overflow: hidden;
}

.api-tester {
    background: #f8fafc;
    padding: 1.5rem;
    margin: 1rem;
    border-radius: 10px;
    border: 2px solid #e5e7eb;
    transition: all 0.3s;
}

.api-tester:hover {
    border-color: #667eea;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
}

.api-label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #64748b;
    font-weight: 700;
    margin-bottom: 0.5rem;
    display: block;
}

.api-endpoint {
    display: flex;
    align-items: stretch;
    gap: 0;
    margin-bottom: 1rem;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.api-method {
    padding: 0.75rem 1.25rem;
    color: white;
    font-weight: 700;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    min-width: 80px;
    justify-content: center;
}

.api-method.get {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.api-method.post {
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
}

.api-path {
    flex: 1;
    padding: 0.75rem 1rem;
    background: white;
    font-family: "Monaco", monospace;
    font-size: 0.9rem;
    color: #1e293b;
    display: flex;
    align-items: center;
    font-weight: 500;
}

.api-controls {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    margin-bottom: 1rem;
}

.api-button {
    padding: 0.75rem 1.75rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 0.95rem;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.api-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.api-button:active {
    transform: translateY(-1px);
}

.api-info {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.85rem;
    color: #64748b;
}

.api-response {
    margin-top: 1rem;
    animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.api-response-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1rem;
    background: #1e293b;
    border-radius: 8px 8px 0 0;
}

.api-response-label {
    font-size: 0.875rem;
    color: #94a3b8;
    font-weight: 600;
}

.status-badge {
    padding: 0.35rem 0.85rem;
    background: #10b981;
    color: white;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
}

.status-badge::before {
    content: "●";
    font-size: 0.6rem;
}

.status-badge.created {
    background: #3b82f6;
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
}

.api-response-body {
    background: #0f172a;
    color: #e2e8f0;
    padding: 1.25rem;
    border-radius: 0 0 8px 8px;
    font-family: "Monaco", monospace;
    font-size: 0.875rem;
    line-height: 1.8;
    white-space: pre-wrap;
    max-height: 280px;
    overflow-y: auto;
    border: 2px solid #1e293b;
}

.api-response-body::-webkit-scrollbar {
    width: 8px;
}

.api-response-body::-webkit-scrollbar-track {
    background: #1e293b;
}

.api-response-body::-webkit-scrollbar-thumb {
    background: #475569;
    border-radius: 4px;
}

.api-timing {
    font-size: 0.75rem;
    color: #10b981;
    font-weight: 600;
}
</style>
