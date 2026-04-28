
function openModal(projetoId) {
    const data = projetos[projetoId];
    const modal = document.getElementById('projectModal');
    const body = document.getElementById('modalBody');

    body.innerHTML = `
        <div class="modal-grid">
            <div class="modal-images">
                ${data.imagens.map(img => `<img src="img/${img}" class="img-case">`).join('')}
            </div>
            <div class="modal-text">
                <h2>${data.titulo}</h2>
                <p class="modal-sub">${data.subtitulo}</p>
                <div class="modal-tags">
                    ${data.habilidades.map(h => `<span class="tag-h">${h}</span>`).join('')}
                </div>
                <div class="modal-description">
                    ${data.textoLongo}
                </div>
            </div>
        </div>
    `;

    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // Trava o scroll do fundo
}

function closeModal() {
    document.getElementById('projectModal').style.display = "none";
    document.body.style.overflow = "auto";
}

// Fechar se clicar fora do modal
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) closeModal();
}

const dadosProjetos = {
    'coca-cola': {
        titulo: 'Diagnóstico & Comunicação: Coca-Cola',
        subtitulo: 'Projeto de Extensão - Faculdade das Américas',
        descricao: `Neste projeto, realizei um diagnóstico profundo da marca Coca-Cola, focando em logística reversa e poluição plástica. 
                    Desenvolvi o design de banners publicitários focados em responsabilidade social e soluções para problemas de imagem ambiental.`,
        skills: ['Análise SWOT', 'Canva Pro', 'Comunicação Integrada', 'Design Sustentável'],
        fotos: ['foto_coca_1.jpg', 'foto_coca_2.jpg'] // Coloque os nomes das fotos aqui
    },
    'carnaval': {
        titulo: 'Marchinha Social',
        subtitulo: 'Trabalho de Jovem Aprendiz',
        descricao: 'Campanha contra o trabalho infantil durante o carnaval...',
        skills: ['Social Media', 'Consciência Social'],
        fotos: ['carnaval_pdf_img.jpg']
    }
};

function abrirProjeto(id) {
    const projeto = dadosProjetos[id];
    const container = document.getElementById('conteudo-dinamico-projeto');
    
    container.innerHTML = `
        <div class="projeto-detalhe-header">
            <h2>${projeto.titulo}</h2>
            <p class="tagline">${projeto.subtitulo}</p>
        </div>
        <div class="projeto-detalhe-grid">
            <div class="projeto-galeria">
                ${projeto.fotos.map(f => `<img src="${f}" class="img-detalhe">`).join('')}
            </div>
            <div class="projeto-info">
                <h3>Sobre o Projeto</h3>
                <p>${projeto.descricao}</p>
                <div class="skills-detalhe">
                    ${projeto.skills.map(s => `<span class="tag-full">${s}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('modal-projeto').classList.add('active');
}

function fecharProjeto() {
    document.getElementById('modal-projeto').classList.remove('active');
}