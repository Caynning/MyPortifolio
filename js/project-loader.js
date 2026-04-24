window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const data = projetos[id];

    if (data) {
        document.title = `${data.titulo} | Letícia Soares`;
        const container = document.getElementById('project-content');

        // Lógica para o Visual (Slide, Imagem ou Vídeo)
let visualContent = '';

if (data.tipo === 'video') {
    visualContent = `
        <p class="label-view">Assista ao vídeo abaixo</p>
        <div class="video-container-vertical">
            <video controls autoplay muted loop class="main-video-vertical">
                <source src="${data.videoUrl}" type="video/mp4">
                Seu navegador não suporta vídeos.
            </video>
        </div>
    `;
} else if (data.tipo === 'apresentacao') {
    visualContent = `
        <p class="label-view">Deslize para ver os slides</p>
        <div class="slider-container">
            <div class="slider-wrapper">
                ${data.slides.map(slide => `<img src="${slide}" class="slide-img">`).join('')}
            </div>
            <div class="slider-controls">
                <button class="slider-btn" onclick="moveSlider(-1)">❮</button>
                <button class="slider-btn" onclick="moveSlider(1)">❯</button>
            </div>
        </div>
    `;
} else {
    visualContent = `
        <p class="label-view">Peça Final</p>
        <img src="${data.bannerPrincipal}" alt="Peça Principal" class="main-banner-img">
    `;
}
        // Lógica para o Público-Alvo (Só exibe se existir)
        const targetBox = (data.analise && data.analise.publico) 
            ? `<div class="target-box-mini"><h4>Público-Alvo</h4><p>${data.analise.publico}</p></div>` 
            : '';

// Dentro do container.innerHTML no project-loader.js
container.innerHTML = `
    <header class="project-header-info">
        <span class="badge-cat" style="background: ${data.corDestaque}20; color: ${data.corDestaque}">
            ${data.categoria}
        </span>
        <h1 class="title-display">${data.titulo}</h1>
        <div class="header-line" style="background: ${data.corDestaque}"></div>
    </header>

    <div class="main-project-grid">
        
                    <div class="creative-side">
                        <div class="sticky-content">
                            ${visualContent}
                            
                            <div class="content-block mini-card">
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

                        <div class="content-block strategy-card">
                            <h3>Estratégia e Conceito</h3>
                            <p>${data.estrategiaVisual}</p>
                        </div>

                        <div class="content-block">
                            <h3>Entregáveis</h3>
                            <ul class="check-list">
                                ${data.entregáveis.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>

                        ${data.imagens && data.tipo !== 'apresentacao' ? `
                        <div class="content-block">
                            <h3>Galeria do Processo</h3>
                            <div class="process-gallery">
                                ${data.imagens.map(img => `<img src="${img}" class="img-processo">`).join('')}
                            </div>
                        </div>` : ''}
                    </div>
                </div>
            </section>
        `;
    }
}

// Controle do Carrossel
let currentSlide = 0;
function moveSlider(direction) {
    const wrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slide-img');
    if(!wrapper || slides.length === 0) return;

    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    wrapper.style.transform = `translateX(${-currentSlide * 100}%)`;
}