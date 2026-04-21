window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const data = projetos[id];

    if (data) {
        document.title = `${data.titulo} | Letícia Soares`;
        const container = document.getElementById('project-content');

        // Lógica para o Visual (Slide ou Imagem Única)
        let visualContent = '';
        if (data.tipo === 'apresentacao') {
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

        container.innerHTML = `
            <section class="project-hero" style="border-bottom: 4px solid ${data.corDestaque}">
                <div class="container">
                    <span class="badge" style="background: ${data.corDestaque}; color: white;">${data.categoria}</span>
                    <h1>${data.titulo}</h1>
                    <p class="subtitle">${data.cliente}</p>
                </div>
            </section>

            <section class="container">
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