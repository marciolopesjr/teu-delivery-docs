/**
 * TeuDelivery Documentation Portal Logic
 */

// Configuration for navigation
const DOCS_CONFIG = [
    {
        title: "Início",
        items: [
            { label: "Introdução", path: "README.md" }
        ]
    },
    {
        title: "Administrador",
        items: [
            { label: "Visão Geral", path: "admin/visao-geral.md" },
            { label: "Gerenciando Usuários", path: "admin/gerenciando-usuarios.md" },
            { label: "Gerenciando Pedidos", path: "admin/gerenciando-pedidos.md" },
            { label: "Configurações", path: "admin/configuracoes.md" },
            { label: "Financeiro", path: "admin/financeiro.md" },
            { label: "Relatórios", path: "admin/relatorios.md" },
            { label: "iFood", path: "admin/ifood.md" },
            { label: "Painel Operacional", path: "admin/painel-operacional.md" }
        ]
    },
    {
        title: "Cliente",
        items: [
            { label: "Visão Geral", path: "cliente/visao-geral.md" },
            { label: "Criando Pedidos", path: "cliente/criando-pedidos.md" },
            { label: "Acompanhando", path: "cliente/acompanhando-entregas.md" }
        ]
    },
    {
        title: "Motoboy",
        items: [
            { label: "Visão Geral", path: "motoboy/visao-geral.md" },
            { label: "Realizando Entregas", path: "motoboy/realizando-entregas.md" },
            { label: "Configurações", path: "motoboy/configuracoes.md" }
        ]
    },
    {
        title: "Instalação",
        items: [
            { label: "Guia Completo", path: "instalacao/instalacao.md" },
            { label: "Ambiente (.env)", path: "instalacao/variaveis-de-ambiente.md" },
            { label: "Tarefas (Cron)", path: "instalacao/cron-jobs.md" },
            { label: "Troubleshooting", path: "instalacao/troubleshooting.md" }
        ]
    }
];

// Elements
const navList = document.getElementById('nav-list');
const markdownViewer = document.getElementById('markdown-viewer');
const themeToggle = document.getElementById('theme-toggle');
const breadcrumb = document.getElementById('breadcrumb');
const sidebar = document.getElementById('sidebar');
const mobileNavToggle = document.getElementById('mobile-nav-toggle');

/**
 * Initialize Documentation
 */
function init() {
    renderSidebar();
    handleRouting();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleRouting);
    
    // Theme toggle
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('docs-theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    // Mobile nav
    mobileNavToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        mobileNavToggle.innerText = sidebar.classList.contains('open') ? '✕' : '☰';
    });

    // Load saved theme
    if (localStorage.getItem('docs-theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

/**
 * Render the sidebar from config
 */
function renderSidebar() {
    let html = '';
    DOCS_CONFIG.forEach(group => {
        html += `<div class="nav-group">
            <h3 class="nav-group-title">${group.title}</h3>
            <ul class="nav-list">`;
        
        group.items.forEach(item => {
            html += `<li><a href="#${item.path}" class="nav-link" data-path="${item.path}">${item.label}</a></li>`;
        });
        
        html += `</ul></div>`;
    });
    navList.innerHTML = html;
}

/**
 * Handle route changes
 */
async function handleRouting() {
    const hash = window.location.hash.slice(1);
    const path = hash || 'README.md';
    
    // Highlight active link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-path') === path);
    });

    // Close mobile menu on navigate
    sidebar.classList.remove('open');
    mobileNavToggle.innerText = '☰';

    loadMarkdown(path);
}

/**
 * Fetch and Render Markdown
 */
async function loadMarkdown(path) {
    markdownViewer.innerHTML = `
        <div class="content-loading">
            <div class="spinner"></div>
            <p>Carregando documentação...</p>
        </div>
    `;

    console.log('Fetching doc from:', path);

    try {
        // Use ./ to ensure relative pathing works on GH Pages regardless of trailing slash
        const response = await fetch('./' + path);
        
        if (!response.ok) {
            console.error('Fetch failed with status:', response.status);
            throw new Error('Arquivo não encontrado');
        }

        const text = await response.text();
        
        // Update Breadcrumb
        const parts = path.split('/');
        breadcrumb.innerText = parts.map(p => p.replace('.md', '').toUpperCase()).join(' > ');

        // Render MD
        markdownViewer.innerHTML = marked.parse(text);
        
        // Highlight code
        Prism.highlightAll();
        
        // Scroll to top
        window.scrollTo(0, 0);

        // Fix links within markdown to work with hashing
        fixMarkdownLinks();

    } catch (err) {
        console.error('Error loading markdown:', err);
        markdownViewer.innerHTML = `
            <div class="error-state" style="text-align: center; padding: 3rem 0;">
                <h1 style="font-size: 4rem; margin-bottom: 1rem;">📭</h1>
                <h2 style="font-family: var(--font-heading); margin-bottom: 1rem;">Página não encontrada</h2>
                <p style="color: var(--text-muted); margin-bottom: 2rem;">Não conseguimos carregar: <code>${path}</code></p>
                <a href="#" class="nav-link" style="display:inline-block; padding: 0.75rem 1.5rem; background: var(--primary); color: white; text-decoration: none; border-radius: 8px;">Voltar para o Início</a>
            </div>
        `;
    }
}

/**
 * Convert relative links in MD to hash links
 */
function fixMarkdownLinks() {
    const links = markdownViewer.querySelectorAll('a');
    const currentPathDir = window.location.hash.slice(1).split('/').slice(0, -1).join('/');

    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.endsWith('.md') && !href.startsWith('http')) {
            // Transform relative path to hash path
            // Example: from ./gerenciando-usuarios.md in admin/ to #admin/gerenciando-usuarios.md
            let newPath = href.replace(/^\.\//, '');
            if (currentPathDir && !href.includes('/')) {
                newPath = `${currentPathDir}/${newPath}`;
            }
            link.setAttribute('href', `#${newPath}`);
        }
    });
}

init();
