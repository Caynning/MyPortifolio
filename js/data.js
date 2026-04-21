
const projetos = {

    
    'coca-cola': {
        tipo: "unica", // Peça única como o banner
        titulo: "Do Diagnóstico à Comunicação: Coca-Cola",
        categoria: "Projeto de Extensão Acadêmica",
        cliente: "Faculdade das Américas (FAM)",
        papel: "Responsável pelo Design Visual e Peças Criativas", 
        objetivo: "Desenvolvimento de estratégias de branding sustentável e análise de comunicação integrada.",
        
        // NOVO CAMPO COM O SEU TEXTO:
        estrategiaVisual: `Como designer deste banner acadêmico, meu objetivo foi traduzir visualmente o diagnóstico de comunicação da Coca-Cola. Trabalhei com uma paleta de cores de alto contraste para destacar pilares importantes como sustentabilidade (garrafas retornáveis) e responsabilidade social. O resultado é um material informativo que respeita o "Brand Equity" da marca enquanto apresenta novas propostas estratégicas de forma clara e profissional.`,

        descricao: `Este projeto acadêmico aprofundou-se no desafio da <strong>Coca-Cola</strong> em equilibrar sua liderança de mercado com as exigências ESG. Enquanto o grupo focou no diagnóstico estrutural, minha atuação principal foi transformar os dados em uma narrativa visual através do banner publicitário.`,
        
        analise: {
            publico: "Stakeholders preocupados com sustentabilidade e consumidores da Geração Z.",
            insights: "O diagnóstico revelou que a comunicação precisa ir além do produto, focando no ciclo de vida da embalagem."
        },

        entregáveis: [
            "Pesquisa de campo e levantamento de dados quantitativos",
            "Desenvolvimento de Diagnóstico estruturado (ABNT)",
            "Design de Banner Publicitário (Peça de Conscientização)",
            "Relatório Técnico de Comunicação Integrada",
            "Proposta de melhoria em Logística Reversa"
        ],
        
        bannerPrincipal: "img/BannerCoke.jpeg",
        imagens: ["img/IMGCoke.jpeg", "img/img3Coke.jpeg"], 
        corDestaque: "#4A5D4E" 
    },

    'fotografia': {
        tipo: "unica",
        titulo: "Luz e Sombra: Exercícios de Composição",
        categoria: "Aula de Fotografia",
        cliente: "Centro Universitário FAM",
        papel: "Fotógrafa e Editora Mobile",
        objetivo: "Explorar a narrativa visual através do alto contraste e da ausência de cores.",
        estrategiaVisual: `Neste exercício acadêmico, o desafio foi despir a imagem de cores para focar exclusivamente na composição, texturas e no jogo de luz e sombra. Explorei ângulos que transformam objetos cotidianos em formas artísticas.`,
        descricao: `O projeto consistiu na captura e edição de fotografias em preto e branco para treinar o "olhar publicitário", onde a composição deve guiar o espectador sem a distração das cores.`,
        analise: {
            // Removido o público alvo conforme solicitado
            insights: "A fotografia em P&B força o designer a entender melhor o contraste, algo fundamental para criar peças gráficas equilibradas."
        },
        entregáveis: [
            "Captação de imagens autorais (Outdoor/Indoor)",
            "Edição e tratamento de imagem mobile",
            "Estudo de enquadramento e regra dos terços"
        ],
        bannerPrincipal: "img/foto5.jpeg",
        imagens: ["img/foto1.jpeg", "img/foto3.jpeg", "img/foto4.jpeg", "img/foto2.jpeg"],
        corDestaque: "#222222"
    },
'tabagismo': {
        tipo: "apresentacao",
        titulo: "Tabagismo Juvenil: Identidade e Rebeldia",
        categoria: "Pesquisa e Análise de Dados | Publicidade",
        cliente: "Faculdade das Américas (FAM)",
        papel: "Pesquisadora e Designer de Apresentação",
        objetivo: "Analisar a percepção do ato de fumar como construção de identidade entre jovens de 18 a 25 anos.",
        estrategiaVisual: "Utilização de gráficos limpos e uma paleta 'Dark Modern' (preto e verde) para transmitir seriedade e profundidade ao tema acadêmico.",
        descricao: "Este estudo utilizou métodos quantitativos e qualitativos (via Google Forms) com 62 participantes para validar a hipótese de que o tabagismo é frequentemente visto como uma manifestação de autonomia e rebeldia na transição para a vida adulta.",
        analise: {
            publico: "Jovens adultos, órgãos de saúde e estrategistas de comunicação pública.",
            insights: "O fumo não é visto como crescimento pessoal, mas sim como um 'escape' emocional ou comportamento social de grupo."
        },
        entregáveis: [
            "Elaboração de questionário estruturado",
            "Tratamento de dados estatísticos",
            "Criação de gráficos percentuais",
            "Design de apresentação executiva"
        ],
        // Lembre-se de salvar os slides do PDF como imagens .jpg e colocar na pasta img/
        slides: [
            "img/tabaco_slide1.jpg", 
            "img/tabaco_slide2.jpg", 
            "img/tabaco_slide3.jpg", 
            "img/tabaco_slide4.jpg",
            "img/tabaco_slide5.jpg"
        ],
        corDestaque: "#1DB954" // Um verde vibrante para combinar com o PDF
    },


'lixo': {
        tipo: "apresentacao", 
        titulo: "Módulo VIVA: Sustentabilidade no Dia a Dia",
        categoria: "Jovem Aprendiz | Meio Ambiente",
        cliente: "EchoCharge Brasil",
        papel: "Pesquisadora e Designer de Soluções Sustentáveis",
        objetivo: "Desenvolver um sistema modular para redução de resíduos e economia de recursos.",
        estrategiaVisual: "A apresentação utiliza uma estética limpa, com tons de verde e elementos que remetem à natureza e tecnologia.",
        descricao: "Projeto focado na criação do 'Módulo VIVA', um sistema para captação de água da chuva e energia solar.",
        analise: {
            publico: "Comunidade local e empresas focadas em ESG.",
            insights: "Soluções simples de baixo custo geram maior engajamento social."
        },
        entregáveis: [
            "Estudo de viabilidade de módulos sustentáveis",
            "Criação de manual educativo",
            "Design de apresentação (Canva)"
        ],
        // Aqui você coloca todos os slides do PDF salvos como imagens
        slides: ["img/lixo_slide1.jpg", "img/lixo_slide2.jpg", "img/lixo_slide3.jpg", "img/lixo_slide4.jpg"],
        corDestaque: "#10b981"
    },
    'carnaval': {
        tipo: "apresentacao",
        titulo: "Marchinha Social: Contra o Trabalho Infantil",
        categoria: "Jovem Aprendiz | Impacto Social",
        cliente: "Projeto de Conscientização Social",
        papel: "Criativa e Comunicadora Social",
        objetivo: "Gerar empatia e informar sobre os riscos do trabalho infantil.",
        estrategiaVisual: "Contraste entre cores vibrantes do carnaval e o peso informativo dos artigos do ECA.",
        descricao: "Campanha focada na proteção de crianças e adolescentes analisando o impacto do trabalho infantil.",
        analise: {
            publico: "Foliões e órgãos públicos.",
            insights: "A normalização do trabalho infantil precisa ser combatida com informação."
        },
        entregáveis: ["Análise de riscos", "Infográfico ECA", "Apresentação de conscientização"],
        slides: ["img/carnaval_1.jpg", "img/carnaval_2.jpg", "img/carnaval_3.jpg", "img/carnaval_4.jpg"],
        corDestaque: "#f59e0b"
    },
    'risos': {
        tipo: "apresentacao",
        titulo: "Identidade Pessoal e Soft Skills",
        categoria: "Jovem Aprendiz | Desenvolvimento",
        cliente: "Módulo de Desenvolvimento Humano",
        papel: "Autoconhecimento e Branding Pessoal",
        objetivo: "Mapear pontos fortes para o mercado de trabalho.",
        estrategiaVisual: "Abordagem artística utilizando colagens de palavras (Word Cloud).",
        descricao: "Mergulho no branding pessoal analisando características como resiliência e criatividade.",
        analise: {
            publico: "Recrutadores.",
            insights: "O autoconhecimento é a base para uma comunicação assertiva."
        },
        entregáveis: ["Mapeamento de competências", "Painel semântico"],
        slides: ["img/risos_1.jpg", "img/risos_2.jpg"],
        corDestaque: "#3b82f6"
    }
};