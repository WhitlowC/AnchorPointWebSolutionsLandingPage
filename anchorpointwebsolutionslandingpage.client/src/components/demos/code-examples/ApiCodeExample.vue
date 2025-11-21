<template>
  <div class="code-example">
    <div class="code-header">
      <span class="code-language">C# / ASP.NET CORE</span>
      <div class="code-dots">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
      </div>
    </div>
    <pre class="code-content" v-pre><code><span class="decorator">[ApiController]</span>
<span class="decorator">[Route(<span class="string">"api/[controller]"</span>)]</span>
<span class="keyword">public</span> <span class="keyword">class</span> <span class="type">ProductsController</span> 
  : <span class="type">ControllerBase</span>
{
  <span class="keyword">private</span> <span class="keyword">readonly</span> <span class="type">IProductService</span> 
    _productService;
  <span class="keyword">private</span> <span class="keyword">readonly</span> <span class="type">ILogger</span> 
    _logger;

  <span class="keyword">public</span> <span class="function">ProductsController</span>(
    <span class="type">IProductService</span> productService,
    <span class="type">ILogger</span> logger)
  {
    _productService = productService;
    _logger = logger;
  }

  <span class="decorator">[HttpGet]</span>
  <span class="keyword">public</span> <span class="keyword">async</span> <span class="type">Task</span>&lt;<span class="type">ActionResult</span>&gt;
    <span class="function">GetProducts</span>(<span class="decorator">[FromQuery]</span> 
      <span class="type">ProductFilter</span> filter)
  {
    <span class="keyword">try</span> {
      <span class="keyword">var</span> products = <span class="keyword">await</span> 
        _productService
          .<span class="function">GetProductsAsync</span>(filter);
      
      <span class="keyword">return</span> <span class="function">Ok</span>(products);
    }
    <span class="keyword">catch</span> (<span class="type">Exception</span> ex) {
      _logger.<span class="function">LogError</span>(ex);
      <span class="keyword">return</span> <span class="function">StatusCode</span>(<span class="number">500</span>, 
        <span class="string">"Internal server error"</span>);
    }
  }

  <span class="decorator">[HttpPost]</span>
  <span class="keyword">public</span> <span class="keyword">async</span> <span class="type">Task</span>&lt;<span class="type">ActionResult</span>&gt;
    <span class="function">CreateProduct</span>(
      <span class="decorator">[FromBody]</span> <span class="type">CreateProductDto</span> dto)
  {
    <span class="keyword">if</span> (!ModelState.IsValid)
      <span class="keyword">return</span> <span class="function">BadRequest</span>(ModelState);

    <span class="keyword">var</span> product = <span class="keyword">await</span> 
      _productService.<span class="function">CreateAsync</span>(dto);
      
    <span class="keyword">return</span> <span class="function">CreatedAtAction</span>(
      <span class="keyword">nameof</span>(<span class="function">GetProduct</span>), 
      <span class="keyword">new</span> { id = product.Id }, 
      product);
  }
}

<span class="comment">// Sample Response:</span>
<span class="comment">// GET: { "success": true, </span>
<span class="comment">//   "data": [{ "id": 1, </span>
<span class="comment">//     "name": "Headphones",</span>
<span class="comment">//     "price": 129.99 }] }</span></code></pre>
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

/* One Dark Pro Theme Syntax Highlighting for C# */
.keyword {
  color: #c678dd;
  /* Purple for keywords */
}

.type {
  color: #e5c07b;
  /* Yellow for types/interfaces */
}

.function {
  color: #61afef;
  /* Blue for functions/methods */
}

.decorator {
  color: #e5c07b;
  /* Yellow for attributes/decorators */
}

.string {
  color: #98c379;
  /* Green for strings */
}

.number {
  color: #d19a66;
  /* Orange for numbers */
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
