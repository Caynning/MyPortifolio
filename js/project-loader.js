window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const data = projetos[id];

    if (data) {
        document.title = `${data.titulo} | Letícia Soares`;
        const container = document.getElementById('project-content');

        container.innerHTML = `
            <section class="project-hero">
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
                            <p class="label-view">Peça Final: Banner Publicitário</p>
                            <img src="${data.bannerPrincipal}" alt="Banner Principal" class="main-banner-img">
                            
                            <div class="content-block" style="background: rgba(166, 68, 68, 0.05); padding: 25px; border-radius: 20px; border-left: 6px solid #A64444; margin-top: 25px;">
                                <h4 style="color: #A64444; margin-bottom: 10px; font-family: 'Gaegu', cursive; font-size: 1.5rem;">Minha Atuação</h4>
                                <p style="font-size: 0.95rem; line-height: 1.6;">
                                    Como integrante do time criativo, fui a <strong>responsável direta pela concepção visual, layout e edição do banner final</strong>. 
                                    Utilizei os insights extraídos da Matriz SWOT para criar uma peça que comunica sustentabilidade e modernidade.
                                </p>
                            </div>

                            <div class="target-box-mini">
                                <h4>Público-Alvo</h4>
                                <p>${data.analise.publico}</p>
                            </div>
                        </div>
                    </div>

                    <div class="strategy-side">
                        
                        <div class="content-block">
                            <h3>O Desafio Estratégico</h3>
                            <p>${data.descricao}</p>
                        </div>

                        <div class="content-block">
                            <h3>Análise SWOT (Matriz FOFA)</h3>
                            <div class="swot-list">
                                ${data.analise.swot.map(item => `
                                    <div class="swot-card">${item}</div>
                                `).join('')}
                            </div>
                        </div>

                        <div class="content-block">
                            <h3>Entregas Técnicas (ABNT)</h3>
                            <ul class="check-list">
                                ${data.entregáveis.map(item => `
                                    <li>${item}</li>
                                `).join('')}
                            </ul>
                        </div>

                        <div class="content-block">
                            <h3>Imagens do Processo / Diagnóstico</h3>
                            <div class="process-gallery">
                                ${data.imagens.map(img => `
                                    <img src="${img}" class="img-processo" alt="Imagem do processo">
                                `).join('')}
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        `;
    }
}