/* ============================================================
   PROJECT-LOADER.JS - VERSÃO CORRIGIDA (DYNAMIC TYPES)
   ============================================================ */
/*
window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const data = projetos[id];

    if (data) {
        document.title = `${data.titulo} | Letícia Soares`;
        const container = document.getElementById('project-content');

        let visualContent = '';

        // 1. LÓGICA DE VÍDEO
        if (data.tipo === 'video') {
            visualContent = `
                <p class="label-view">Assista ao vídeo abaixo</p>
                <div class="video-container-vertical">
                    <video controls autoplay muted loop class="main-video-vertical">
                        <source src="${data.videoUrl}" type="video/mp4">
                    </video>
                </div>
            `;
        } 
        // 2. LÓGICA DE SLIDER (APRESENTAÇÃO)
        else if (data.tipo === 'apresentacao') {
            visualContent = `
                <p class="label-view">Deslize para ver os slides</p>
                <div class="slider-container">
                    <div class="slider-wrapper">
                        ${data.slides.map(slide => `<img src="${slide}" class="slide-img" onclick="openLightbox(this.src)">`).join('')}
                    </div>
                    <div class="slider-controls">
                        <button class="slider-btn" onclick="moveSlider(-1)">❮</button>
                        <button class="slider-btn" onclick="moveSlider(1)">❯</button>
                    </div>
                </div>
            `;
        } 
        // 3. LÓGICA DE IMAGEM ÚNICA (Diferenciando Vertical de Normal)
        else {
            // Se o ID for 'coca-cola' ou 'fotografia', usamos uma classe especial para não cortar
            const isVertical = id === 'coca-cola' || id === 'fotografia' || id === 'risos';
            const imgClass = isVertical ? 'main-banner-vertical' : 'main-banner-img';
            
            visualContent = `
                <p class="label-view">Peça Final (Clique para ampliar)</p>
                <div class="img-reveal-container">
                    <img src="${data.bannerPrincipal}" alt="Peça Principal" class="${imgClass}" onclick="openLightbox(this.src)">
                </div>
            `;
        }

        const targetBox = (data.analise && data.analise.publico) 
            ? `<div class="target-box-mini"><h4>Público-Alvo</h4><p>${data.analise.publico}</p></div>` 
            : '';

        container.innerHTML = `
            <section class="project-hero">
                <div class="container">
                    <span class="badge" style="background: ${data.corDestaque}20; color: ${data.corDestaque}">
                        ${data.categoria}
                    </span>
                    <h1>${data.titulo}</h1>
                    <p class="subtitle">${data.cliente}</p>
                </div>
            </section>

            <section class="container">
                <div class="main-project-grid">
                    <div class="creative-side">
                        <div class="sticky-content">
                            ${visualContent}
                            <div class="content-block mini-card" style="border-left: 5px solid ${data.corDestaque}">
                                <h4 style="color: ${data.corDestaque}">Minha Atuação</h4>
                                <p><strong>${data.papel}</strong></p>
                            </div>
                            ${targetBox}
                        </div>
                    </div>

                    <div class="strategy-side">
                        <div class="content-block">
                            <h3>O Desafio</h3>
                            <p>${data.descricao}</p>
                        </div>

                        <div class="content-block strategy-card" style="border-left-color: ${data.corDestaque}">
                            <h3>Estratégia e Conceito</h3>
                            <p>${data.estrategiaVisual}</p>
                        </div>

                        <div class="content-block">
                            <h3>Entregáveis</h3>
                            <ul class="check-list">
                                ${data.entregáveis.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>

                        ${data.imagens && data.imagens.length > 0 ? `
                        <div class="content-block">
                            <h3>Galeria do Processo</h3>
                            <div class="galeria-grid">
                                ${data.imagens.map(img => `<img src="${img}" alt="Processo" onclick="openLightbox(this.src)">`).join('')}
                            </div>
                        </div>` : ''}
                    </div>
                </div>
            </section>
        `;
    }
};

// --- Funções do Slider Corrigidas ---
let currentSlide = 0;
function moveSlider(direction) {
    const wrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slide-img');
    if (!wrapper || slides.length === 0) return;

    currentSlide += direction;

    if (currentSlide >= slides.length) currentSlide = 0;
    else if (currentSlide < 0) currentSlide = slides.length - 1;

    // Usando clientWidth para garantir que o pulo seja exatamente o tamanho do container
    const size = wrapper.clientWidth;
    wrapper.style.transform = `translateX(${-currentSlide * size}px)`;
}

function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    if(lightbox && lightboxImg) {
        lightbox.style.display = 'flex';
        lightboxImg.src = src;
    }
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}*/