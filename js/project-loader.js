window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const data = projetos[id];

    if (data) {
        document.title = `${data.titulo} | Letícia Soares`;
        const container = document.getElementById('project-content');

        // Lógica para decidir o que mostrar no lado esquerdo (Visual)
        let visualContent = '';
        
        if (data.tipo === 'apresentacao') {
            // Cria um carrossel de slides
            visualContent = `
                <p class="label-view">Deslize para ver os slides da apresentação</p>
                <div class="slider-container">
                    <div class="slider-wrapper">
                        ${data.slides.map(slide => `<img src="${slide}" class="slide-img">`).join('')}
                    </div>
                    <div class="slider-controls">
                        <button onclick="moveSlider(-1)">❮</button>
                        <button onclick="moveSlider(1)">❯</button>
                    </div>
                </div>
            `;
        } else {
            // Mantém o formato de banner para Coca e Fotografia
            visualContent = `
                <p class="label-view">Peça Final: Visual</p>
                <img src="${data.bannerPrincipal}" alt="Banner Principal" class="main-banner-img">
            `;
        }

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
                                <h4>Minha Atuação</h4>
                                <p><strong>${data.papel}</strong></p>
                            </div>

                            <div class="target-box-mini">
                                <h4>Público-Alvo</h4>
                                <p>${data.analise.publico}</p>
                            </div>
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
                            <h3>O que foi entregue</h3>
                            <ul class="check-list">
                                ${data.entregáveis.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

// Lógica simples do Carrossel
let currentSlide = 0;
function moveSlider(direction) {
    const wrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slide-img');
    const totalSlides = slides.length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const offset = currentSlide * -100;
    wrapper.style.transform = `translateX(${offset}%)`;
}