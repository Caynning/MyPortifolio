window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const data = projetos[id];

    if (data) {
        document.title = `${data.titulo} | Letícia Soares`;
        const container = document.getElementById('project-content');

// Substitua a parte do container.innerHTML por esta:
container.innerHTML = `
    <section class="project-hero">
        <div class="container">
            <span class="badge" style="background: ${data.corDestaque}; color: white; padding: 5px 15px; border-radius: 20px; font-size: 0.8rem;">${data.categoria}</span>
            <h1>${data.titulo}</h1>
            <p class="subtitle">${data.cliente}</p>
        </div>
    </section>

    <section class="container">
        <div class="banner-destaque">
            <p class="label-view">Peça Final: Banner Publicitário</p>
            <img src="${data.bannerPrincipal}" alt="Banner Coca-Cola" style="object-fit: contain; max-height: 600px;">
        </div>
    </section>

    <section class="project-details container">
        <div class="project-grid-layout">
            <div class="project-info">
                <h3>O Desafio Estratégico</h3>
                <p>${data.descricao}</p>
                
                <div class="target-box" style="margin: 20px 0; background: #f9f9f9; border: 1px solid #ddd; color: #333; padding: 20px; border-radius: 10px; border-left: 5px solid ${data.corDestaque};">
                    <h4 style="color: ${data.corDestaque}; margin-bottom: 5px;">Público-Alvo</h4>
                    <p style="font-size: 0.9rem; margin: 0;">${data.analise.publico}</p>
                </div>

                <h3>Análise SWOT (Matriz FOFA)</h3>
                <div class="swot-grid">
                    ${data.analise.swot.map(item => `<div class="swot-item" style="border-left-color: ${data.corDestaque}">${item}</div>`).join('')}
                </div>

                <h3>Entregas Técnicas</h3>
                <ul class="check-list">
                    ${data.entregáveis.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            
            <div class="project-gallery">
                <h3>Imagens do Processo / Diagnóstico</h3>
                <div class="gallery-container" style="display: flex; flex-direction: column; gap: 15px;">
                    ${data.imagens.map(img => `<img src="${img}" class="gallery-img" style="max-height: 400px; object-fit: cover;">`).join('')}
                </div>
            </div>
        </div>
    </section>
`;
    }
}