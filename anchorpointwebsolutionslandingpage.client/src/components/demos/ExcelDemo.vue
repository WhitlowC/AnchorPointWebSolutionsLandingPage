<template>
    <div class="excel-demo">
        <div class="excel-window">
            <!-- Excel-style toolbar -->
            <div class="excel-toolbar">
                <div class="toolbar-section">
                    <span class="toolbar-title">{{ title }}</span>
                </div>
                <div class="toolbar-section">
                    <span class="formula-label">fx</span>
                    <div class="formula-bar">{{ currentFormula }}</div>
                </div>
            </div>

            <!-- Excel-style spreadsheet grid -->
            <div class="excel-grid">
                <!-- Column headers -->
                <div class="grid-header">
                    <div class="cell header corner"></div>
                    <div v-for="col in columns" :key="col" class="cell header">{{ col }}</div>
                </div>

                <!-- Data rows -->
                <div v-for="(row, rowIndex) in gridData" :key="rowIndex" class="grid-row">
                    <div class="cell header row-number">{{ rowIndex + 1 }}</div>
                    <div v-for="(cell, colIndex) in row" :key="colIndex" class="cell" :class="{
                        'active': cell.active,
                        'formula': cell.isFormula,
                        'result': cell.isResult,
                        'highlight': cell.highlight
                    }">
                        {{ cell.value }}
                    </div>
                </div>
            </div>

            <!-- Formula explanation -->
            <div class="formula-explanation">
                <div class="explanation-header">
                    <span class="explanation-icon">💡</span>
                    <strong>How it works:</strong>
                </div>
                <p>{{ explanation }}</p>
            </div>

            <!-- Code display -->
            <div class="code-section" v-if="code">
                <div class="code-header">
                    <span class="code-icon">📝</span>
                    <strong>Formula:</strong>
                </div>
                <pre class="code-block"><code>{{ code }}</code></pre>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface ExcelCell {
    value: string | number
    active?: boolean
    isFormula?: boolean
    isResult?: boolean
    highlight?: boolean
}

interface Props {
    title: string
    gridData: ExcelCell[][]
    columns: string[]
    code: string
    explanation: string
    activeFormula?: string
}

const props = defineProps<Props>()

const currentFormula = computed(() => props.activeFormula || props.code.split('\n')[0])
</script>

<style scoped lang="scss">
.excel-demo {
    margin: 2rem 0;
}

.excel-window {
    background: white;
    border: 1px solid #a6a6a6;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.excel-toolbar {
    background: linear-gradient(180deg, #ffffff 0%, #f0f0f0 100%);
    border-bottom: 1px solid #c7c7c7;
    padding: 0.6rem 1rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-wrap: wrap;
}

.toolbar-section {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.toolbar-title {
    font-weight: 600;
    color: #1a1a1a;
    font-size: 0.95rem;
}

.formula-label {
    background: white;
    border: 1px solid #a6a6a6;
    padding: 0.3rem 0.6rem;
    border-radius: 2px;
    font-family: 'Calibri', 'Segoe UI', sans-serif;
    font-size: 0.95rem;
    color: #000;
    font-style: italic;
    font-weight: 600;
}

.formula-bar {
    background: white;
    border: 1px solid #a6a6a6;
    padding: 0.35rem 0.75rem;
    border-radius: 2px;
    font-family: 'Calibri', 'Segoe UI', sans-serif;
    font-size: 0.9rem;
    min-width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.05);
}

.excel-grid {
    overflow-x: auto;
    border-bottom: 1px solid #d1d5db;
    display: table;
    width: 100%;
    border-collapse: collapse;
}

.grid-header {
    display: table-row;
    background: #e8eaed;
}

.grid-row {
    display: table-row;

    &:hover .cell:not(.header):not(.row-number) {
        background: #f5f5f5;
    }
}

.cell {
    display: table-cell;
    padding: 0.45rem 0.6rem;
    border-right: 1px solid #d0d0d0;
    border-bottom: 1px solid #d0d0d0;
    width: 140px;
    min-width: 140px;
    max-width: 140px;
    font-size: 0.875rem;
    vertical-align: middle;
    font-family: 'Calibri', 'Segoe UI', Tahoma, sans-serif;
    background: white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &.header {
        background: #e8eaed;
        font-weight: 600;
        color: #000;
        text-align: center;
        width: 80px;
        min-width: 80px;
        max-width: 80px;
        font-size: 0.8rem;
        text-transform: uppercase;

        &.corner {
            width: 50px;
            min-width: 50px;
            max-width: 50px;
            background: #e8eaed;
            border-right: 1px solid #a6a6a6;
        }
    }

    &.row-number {
        width: 50px;
        min-width: 50px;
        max-width: 50px;
        text-align: center;
        background: #e8eaed;
        font-weight: 600;
        color: #000;
        border-right: 1px solid #a6a6a6;
        font-size: 0.8rem;
    }

    &.active {
        background: #fff;
        border: 2px solid #217346;
        font-weight: 600;
        box-shadow: 0 0 0 1px #217346;
    }

    &.formula {
        background: #fff4e6;
        font-family: 'Consolas', 'Courier New', monospace;
        font-size: 0.8rem;
        color: #c65d07;
    }

    &.result {
        background: #e6f7ed;
        font-weight: 600;
        color: #0b6623;
    }

    &.highlight {
        background: #fff9e6;
        border: 1px solid #ffd966;
    }
}

.formula-explanation {
    padding: 1.5rem;
    background: #f9fafb;
    border-bottom: 1px solid #e5e7eb;
}

.explanation-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
    color: #1a1a1a;
    font-size: 1rem;
}

.explanation-icon {
    font-size: 1.2rem;
}

.formula-explanation p {
    color: #4b5563;
    line-height: 1.6;
    margin: 0;
}

.code-section {
    padding: 1.5rem;
    background: #1f2937;
}

.code-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
    color: #f3f4f6;
    font-size: 1rem;
}

.code-icon {
    font-size: 1.2rem;
}

.code-block {
    background: #111827;
    padding: 1rem;
    border-radius: 6px;
    overflow-x: auto;
    margin: 0;

    code {
        font-family: 'Courier New', Courier, monospace;
        font-size: 0.85rem;
        color: #10b981;
        line-height: 1.6;
    }
}

@media (max-width: 768px) {
    .formula-bar {
        min-width: 200px;
        font-size: 0.75rem;
    }

    .cell {
        width: 100px;
        min-width: 100px;
        max-width: 100px;
        padding: 0.4rem 0.5rem;
        font-size: 0.8rem;

        &.header {
            width: 60px;
            min-width: 60px;
            max-width: 60px;
        }

        &.row-number {
            width: 40px;
            min-width: 40px;
            max-width: 40px;
        }
    }
}
</style>
