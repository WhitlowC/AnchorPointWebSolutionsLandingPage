<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-logo">
                <span class="logo-icon">⚓</span>
                <span>Anchor Point Web Solutions</span>
            </div>
            <p class="footer-text">© 2025 All rights reserved</p>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    background: #1a1a1a;
    color: white;
    padding: 2rem;
    text-align: center;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
}

.footer-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.logo-icon {
    font-size: 1.4rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.footer-text {
    color: #9ca3af;
    font-size: 0.9rem;
}
</style>
