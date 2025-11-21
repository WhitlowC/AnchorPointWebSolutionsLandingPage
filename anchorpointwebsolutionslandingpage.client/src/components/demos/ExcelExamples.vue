<template>
    <section class="excel-examples-section">
        <div class="container">
            <h2 class="section-title">See It In Action</h2>
            <p class="section-subtitle">
                Explore real-world Excel formulas and automation examples
            </p>

            <!-- Tab Navigation -->
            <div class="tabs">
                <button v-for="(example, index) in examples" :key="index"
                    :class="['tab', { active: activeTab === index }]" @click="activeTab = index">
                    {{ example.tabName }}
                </button>
            </div>

            <!-- Active Demo Display -->
            <div class="demo-container">
                <ExcelDemo :title="examples[activeTab].title" :columns="examples[activeTab].columns"
                    :grid-data="examples[activeTab].gridData" :code="examples[activeTab].code"
                    :explanation="examples[activeTab].explanation"
                    :active-formula="examples[activeTab].activeFormula" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ExcelDemo from './ExcelDemo.vue'

const activeTab = ref(0)

// Example 1: INDEX-MATCH with Multiple Criteria
const example1Data = [
    [
        { value: 'Name' },
        { value: 'Department' },
        { value: 'Salary' },
        { value: '' },
        { value: '' }
    ],
    [
        { value: 'John Smith' },
        { value: 'Sales' },
        { value: '$75,000' },
        { value: '' },
        { value: '' }
    ],
    [
        { value: 'Jane Doe' },
        { value: 'Marketing' },
        { value: '$68,000' },
        { value: '' },
        { value: '' }
    ],
    [
        { value: 'Bob Johnson' },
        { value: 'Sales' },
        { value: '$82,000' },
        { value: '' },
        { value: '' }
    ],
    [
        { value: 'Alice Williams' },
        { value: 'IT' },
        { value: '$95,000' },
        { value: '' },
        { value: '' }
    ],
    [
        { value: 'Tom Brown' },
        { value: 'Sales' },
        { value: '$71,000' },
        { value: '' },
        { value: '' }
    ],
    [
        { value: '' },
        { value: '' },
        { value: '' },
        { value: '' },
        { value: '' }
    ],
    [
        { value: 'Lookup Name:' },
        { value: 'Lookup Dept:' },
        { value: '' },
        { value: '' },
        { value: '' }
    ],
    [
        { value: 'Bob Johnson', highlight: true },
        { value: 'Sales', highlight: true },
        { value: '$82,000', isResult: true },
        { value: '' },
        { value: '' }
    ]
]

const example1Code = `=INDEX(C2:C6, MATCH(1, (A2:A6=D9)*(B2:B6=E9), 0))

Alternative with XLOOKUP (Excel 365):
=XLOOKUP(1, (A2:A6=D9)*(B2:B6=E9), C2:C6)`

// Example 2: Data Cleanup
const example2Data = [
    [
        { value: 'Raw Data' },
        { value: 'Cleaned Result' },
        { value: 'Formula Used' }
    ],
    [
        { value: 'john  doe,', highlight: true },
        { value: 'John Doe', isResult: true },
        { value: '=TRIM(PROPER(...))', isFormula: true }
    ],
    [
        { value: '  JANE SMITH  ', highlight: true },
        { value: 'Jane Smith', isResult: true },
        { value: '=TRIM(PROPER(...))', isFormula: true }
    ],
    [
        { value: 'bob   johnson.', highlight: true },
        { value: 'Bob Johnson', isResult: true },
        { value: '=TRIM(PROPER(...))', isFormula: true }
    ],
    [
        { value: 'ALICE,WILLIAMS', highlight: true },
        { value: 'Alice Williams', isResult: true },
        { value: '=TRIM(PROPER(...))', isFormula: true }
    ]
]

const example2Code = `=TRIM(PROPER(SUBSTITUTE(SUBSTITUTE(A2, ",", ""), ".", "")))

Advanced with LET (Excel 365):
=LET(
    text, A2,
    noPunct, SUBSTITUTE(SUBSTITUTE(text, ",", ""), ".", ""),
    cleaned, TRIM(noPunct),
    PROPER(cleaned)
)`

// Example 3: Conditional Sum
const example3Data = [
    [
        { value: 'Date' },
        { value: 'Region' },
        { value: 'Product' },
        { value: 'Amount' },
        { value: '' }
    ],
    [
        { value: '1/15/2024' },
        { value: 'East', highlight: true },
        { value: 'Widget', highlight: true },
        { value: '$1,200' },
        { value: '' }
    ],
    [
        { value: '1/16/2024' },
        { value: 'West' },
        { value: 'Widget' },
        { value: '$800' },
        { value: '' }
    ],
    [
        { value: '1/17/2024' },
        { value: 'East', highlight: true },
        { value: 'Gadget' },
        { value: '$950' },
        { value: '' }
    ],
    [
        { value: '1/18/2024' },
        { value: 'East', highlight: true },
        { value: 'Widget', highlight: true },
        { value: '$1,100' },
        { value: '' }
    ],
    [
        { value: '1/19/2024' },
        { value: 'West' },
        { value: 'Widget' },
        { value: '$1,050' },
        { value: '' }
    ],
    [
        { value: '' },
        { value: '' },
        { value: '' },
        { value: '' },
        { value: '' }
    ],
    [
        { value: 'East + Widget Total:' },
        { value: '' },
        { value: '' },
        { value: '$2,300', isResult: true },
        { value: '' }
    ]
]

const example3Code = `=SUMIFS(D2:D6, B2:B6, "East", C2:C6, "Widget")

Multiple criteria with OR logic:
=SUMPRODUCT((B2:B6="East")+(B2:B6="West"), (C2:C6="Widget"), D2:D6)

With date range:
=SUMIFS(D2:D6, B2:B6, "East", A2:A6, ">=1/1/2024", A2:A6, "<=1/31/2024")`

// Example 4: QUERY Function
const example4Data = [
    [
        { value: 'Date' },
        { value: 'Product' },
        { value: 'Sales' },
        { value: 'Region' },
        { value: 'Rep' }
    ],
    [
        { value: '1/5/2024' },
        { value: 'Widget A' },
        { value: '$2,500' },
        { value: 'East' },
        { value: 'Smith' }
    ],
    [
        { value: '1/6/2024' },
        { value: 'Widget B' },
        { value: '$3,200' },
        { value: 'West' },
        { value: 'Jones' }
    ],
    [
        { value: '1/7/2024' },
        { value: 'Widget A' },
        { value: '$1,800' },
        { value: 'East' },
        { value: 'Smith' }
    ],
    [
        { value: '1/8/2024' },
        { value: 'Widget C' },
        { value: '$4,100' },
        { value: 'West' },
        { value: 'Davis' }
    ],
    [
        { value: '1/9/2024' },
        { value: 'Widget A' },
        { value: '$2,900' },
        { value: 'East' },
        { value: 'Smith' }
    ],
    [
        { value: '' },
        { value: '' },
        { value: '' },
        { value: '' },
        { value: '' }
    ],
    [
        { value: 'Query Results:', isResult: true },
        { value: 'East Region Sales', isResult: true },
        { value: '' },
        { value: '' },
        { value: '' }
    ],
    [
        { value: 'Product' },
        { value: 'Total Sales' },
        { value: '' },
        { value: '' },
        { value: '' }
    ],
    [
        { value: 'Widget A', highlight: true },
        { value: '$7,200', highlight: true },
        { value: '' },
        { value: '' },
        { value: '' }
    ]
]

const example4Code = `=QUERY(A1:E6, "SELECT B, SUM(C) WHERE D='East' GROUP BY B ORDER BY SUM(C) DESC", 1)

Advanced filtering with date range:
=QUERY(A1:E6, "SELECT B, C, E WHERE D='East' AND A >= date '2024-01-01' ORDER BY C DESC")

Multiple aggregations:
=QUERY(A1:E6, "SELECT D, COUNT(B), SUM(C), AVG(C) GROUP BY D LABEL COUNT(B) 'Count', SUM(C) 'Total', AVG(C) 'Average'")`

// Organize examples array
const examples = [
    {
        tabName: 'Lookup Formulas',
        title: 'Advanced Lookup with Multiple Criteria',
        columns: ['A', 'B', 'C', 'D', 'E'],
        gridData: example1Data,
        code: example1Code,
        explanation: 'Uses INDEX-MATCH to lookup values based on two criteria simultaneously. Much more flexible than VLOOKUP and works with any column arrangement.',
        activeFormula: '=INDEX(C2:C6, MATCH(1, (A2:A6=D9)*(B2:B6=E9), 0))'
    },
    {
        tabName: 'Data Cleanup',
        title: 'Dynamic Data Cleanup Formula',
        columns: ['A', 'B', 'C'],
        gridData: example2Data,
        code: example2Code,
        explanation: 'Chains multiple text functions to clean messy data in one formula. Removes extra spaces, punctuation, and standardizes text formatting automatically.',
        activeFormula: '=TRIM(PROPER(SUBSTITUTE(A2, ",", "")))'
    },
    {
        tabName: 'Conditional Sums',
        title: 'Complex Conditional Sum',
        columns: ['A', 'B', 'C', 'D', 'E'],
        gridData: example3Data,
        code: example3Code,
        explanation: 'SUMIFS allows you to sum values based on multiple conditions. Perfect for analyzing sales data, inventory levels, or any scenario requiring filtered aggregation.',
        activeFormula: '=SUMIFS(D2:D6, B2:B6, "East", C2:C6, "Widget")'
    },
    {
        tabName: 'QUERY Function',
        title: 'Advanced QUERY Function',
        columns: ['A', 'B', 'C', 'D', 'E'],
        gridData: example4Data,
        code: example4Code,
        explanation: 'The QUERY function uses SQL-like syntax to filter, aggregate, and transform data directly in Excel. Perfect for complex data analysis without pivot tables.',
        activeFormula: '=QUERY(A1:E6, "SELECT B, SUM(C) WHERE D=\'East\' GROUP BY B")'
    }
]
</script>

<style scoped lang="scss">
.excel-examples-section {
    padding: 5rem 2rem;
    background: white;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1a1a1a;
    text-align: center;
    margin-bottom: 1rem;
}

.section-subtitle {
    font-size: 1.125rem;
    color: #666;
    text-align: center;
    margin-bottom: 4rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}

.tabs {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
    border-bottom: 2px solid #e5e7eb;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}

.tab {
    padding: 1rem 2rem;
    background: transparent;
    border: none;
    border-bottom: 3px solid transparent;
    color: #6b7280;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
    white-space: nowrap;

    &:hover {
        color: #667eea;
        background: #f9fafb;
    }

    &.active {
        color: #667eea;
        border-bottom-color: #667eea;
        font-weight: 600;
    }
}

.demo-container {
    animation: fadeIn 0.3s ease-in;
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
    .excel-examples-section {
        padding: 3rem 1rem;
    }

    .section-title {
        font-size: 2rem;
    }

    .section-subtitle {
        font-size: 1rem;
    }

    .tab {
        padding: 0.75rem 1rem;
        font-size: 0.9rem;
    }
}
</style>
