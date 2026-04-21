
const projetos = {

    
    'coca-cola': {
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
        titulo: "Luz e Sombra: Exercícios de Composição",
        categoria: "Aula de Fotografia",
        cliente: "Centro Universitário FAM",
        papel: "Fotógrafa e Editora Mobile",
        objetivo: "Explorar a narrativa visual através do alto contraste e da ausência de cores.",
        
        estrategiaVisual: `Neste exercício acadêmico, o desafio foi despir a imagem de cores para focar exclusivamente na composição, texturas e no jogo de luz e sombra. Utilizando apenas dispositivos móveis, explorei ângulos que transformam objetos cotidianos em formas artísticas, mantendo uma estética Noir e minimalista que ressalta a profundidade de cada cena.`,

        descricao: `O projeto consistiu na captura e edição de fotografias em preto e branco. O objetivo principal foi treinar o "olhar publicitário", onde a composição deve guiar o espectador sem a distração das cores, utilizando recursos técnicos limitados (smartphone) para extrair o máximo de expressividade.`,
        
        analise: {
            publico: "Apreciadores de artes visuais e curadoria de conteúdo mobile.",
            insights: "A fotografia em P&B força o designer a entender melhor o contraste, algo fundamental para criar peças gráficas equilibradas."
        },

        entregáveis: [
            "Captação de imagens autorais (Outdoor/Indoor)",
            "Edição e tratamento de imagem mobile",
            "Estudo de enquadramento e regra dos terços",
            "Curadoria de portfólio fotográfico"
        ],
        
        bannerPrincipal: "img/foto4.jpeg", // Escolha a sua foto favorita para ser a capa
        imagens: [
            "img/foto1.jpeg",
            "img/foto3.jpeg",
            "img/foto4.jpeg",
            "img/foto2.jpeg"
        ],
        corDestaque: "#222222" // Um cinza quase preto para combinar com o tema P&B
    },

    // ... dentro de const projetos = {

    'lixo': {
        titulo: "Módulo VIVA: Sustentabilidade no Dia a Dia",
        categoria: "Jovem Aprendiz | Meio Ambiente",
        cliente: "EchoCharge Brasil",
        papel: "Pesquisadora e Designer de Soluções",
        objetivo: "Desenvolver um sistema modular para redução de resíduos.",
        estrategiaVisual: "A apresentação foi construída para ser didática e visualmente leve. Usei ícones minimalistas e uma hierarquia de informações que guia o espectador através do problema, da solução técnica e dos benefícios finais.",
        descricao: "Este deck de slides apresenta o 'Módulo VIVA', um projeto inovador de captação de água e energia solar. O foco foi transformar conceitos técnicos de engenharia sustentável em uma linguagem visual clara para o público final.",
        analise: {
            publico: "Empresas com foco em ESG e comunidades locais.",
            insights: "A visualização de dados ajudou a provar que soluções sustentáveis podem ser de baixo custo."
        },
        entregáveis: [
            "Apresentação estruturada de projeto (Deck de Slides)",
            "Manual educativo de consumo consciente",
            "Identidade visual do Módulo VIVA"
        ],
        bannerPrincipal: "img/lixo_slide1.jpg", // O primeiro slide
        // Aqui você coloca os slides em ordem:
        imagens: [
            "img/lixo_slide1.jpg", 
            "img/lixo_slide2.jpg", 
            "img/lixo_slide3.jpg",
            "img/lixo_slide4.jpg"
        ],
        corDestaque: "#10b981",
        tipoProjeto: "apresentacao" // Adicionamos uma tag para identificar o estilo
    },

    'carnaval': {
        titulo: "Marchinha Social: Contra o Trabalho Infantil",
        categoria: "Jovem Aprendiz | Impacto Social",
        cliente: "Projeto de Conscientização Social",
        papel: "Criativa e Comunicadora",
        objetivo: "Sensibilizar sobre os riscos do trabalho infantil no carnaval.",
        estrategiaVisual: "Para este material, utilizei um design de alto impacto emocional. O contraste entre cores festivas e dados sérios do ECA cria uma tensão visual necessária para o tema, garantindo que a mensagem não seja ignorada.",
        descricao: "Uma apresentação de conscientização que une legislação (ECA/ONU) com análise social. Os slides foram pensados para serem lidos de forma rápida, com frases de impacto e imagens que reforçam o direito ao brincar.",
        analise: {
            publico: "Sociedade civil e foliões.",
            insights: "O design ajudou a humanizar os dados frios da lei."
        },
        entregáveis: [
            "Campanha de conscientização em slides",
            "Infográfico de riscos e direitos",
            "Relatório de impacto social"
        ],
        bannerPrincipal: "img/carnaval_slide1.jpg",
        imagens: [
            "img/carnaval_slide1.jpg",
            "img/carnaval_slide2.jpg",
            "img/carnaval_slide3.jpg"
        ],
        corDestaque: "#f59e0b",
        tipoProjeto: "apresentacao"
    },

    'risos': {
        titulo: "Identidade Pessoal e Soft Skills",
        categoria: "Jovem Aprendiz | Desenvolvimento",
        cliente: "Módulo de Desenvolvimento Humano",
        papel: "Autoconhecimento e Branding Pessoal",
        objetivo: "Mapear competências comportamentais para o mercado.",
        estrategiaVisual: "O layout utiliza colagens e tipografias variadas para refletir a multiplicidade da personalidade. É uma peça de branding pessoal que foge do corporativo tradicional para mostrar autenticidade.",
        descricao: "Este conjunto de slides é um exercício de branding pessoal. Através de uma narrativa visual lúdica, apresento minhas 'soft skills' e minha visão de mundo, unindo criatividade e resiliência.",
        analise: {
            publico: "Recrutadores e parceiros criativos.",
            insights: "Mostrar quem você é de verdade cria conexões mais fortes que um currículo comum."
        },
        entregáveis: [
            "Painel Semântico de Identidade",
            "Mapeamento de Soft Skills",
            "Deck de Branding Pessoal"
        ],
        bannerPrincipal: "img/risos_slide1.jpg",
        imagens: [
            "img/risos_slide1.jpg",
            "img/risos_slide2.jpg"
        ],
        corDestaque: "#3b82f6",
        tipoProjeto: "apresentacao"
    }
};