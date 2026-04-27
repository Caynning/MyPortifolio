const projetos = {
/*
    'coca-cola': {
        tipo: "unica",
        titulo: "Do Diagnóstico à Comunicação: Coca-Cola",
        categoria: "Projeto de Extensão Acadêmica",
        cliente: "Faculdade das Américas (FAM)",
        papel: "Responsável pelo Design Visual e Peças Criativas", 
        objetivo: "Desenvolvimento de estratégias de branding sustentável e análise de comunicação integrada.",
        estrategiaVisual: `Como designer deste banner acadêmico, meu objetivo foi traduzir visualmente o diagnóstico de comunicação da Coca-Cola. Trabalhei com uma paleta de cores de alto contraste para destacar pilares importantes como sustentabilidade (garrafas retornáveis) e responsabilidade social. O resultado é um material informativo que respeita o "Brand Equity" da marca enquanto apresenta novas propostas estratégicas de forma clara e profissional.`,
        descricao: `Este projeto acadêmico aprofundou-se no desafio da <strong>Coca-Cola</strong> em equilibrar sua liderança de mercado com as exigências ESG. Enquanto o grupo focou no diagnóstico estrutural, minha atuação principal foi transformar os dados em uma narrativa visual através do banner publicitário.`,
        analise: {
            //publico: "Stakeholders preocupados com sustentabilidade e consumidores da Geração Z.",
            insights: "O diagnóstico revelou que a comunicação precisa ir além do produto, focando no ciclo de vida da embalagem."
        },
        entregáveis: [
            "Pesquisa de campo e levantamento de dados quantitativos",
            "Desenvolvimento de Diagnóstico estruturado (ABNT)",
            "Design de Banner Publicitário (Peça de Conscientização)",
            "Relatório Técnico de Comunicação Integrada",
            "Proposta de melhoria em Logística Reversa"
        ],
        bannerPrincipal: "img/BannerCoke.png",
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
    
        objetivo: "Analisar a percepção do ato de fumar como construção de identidade entre jovens de 18 a 25 anos.",
        papel: "Responsável pela Análise de Dados e Design de Apresentação",
        estrategiaVisual: "Fui responsável pela análise dos dados e por toda a identidade visual da apresentação, utilizando uma estética 'Dark Modern' com alto contraste...",
        descricao: "Este estudo validou a hipótese de que o tabagismo é frequentemente visto como uma manifestação de autonomia. Minha contribuição central foi a materialização desses dados em uma apresentação executiva visualmente coesa e profissional.",
        analise: {
            publico: "Jovens adultos, órgãos de saúde e estrategistas de comunicação pública.",
            insights: "O fumo não é visto como crescimento pessoal, mas sim como um 'escape' emocional ou comportamento social de grupo."
        },
        entregáveis: [
            "Criação de identidade visual e paleta de cores",
            "Tratamento visual de dados estatísticos",
            "Design de gráficos percentuais personalizados",
            "Diagramação de apresentação executiva"
        ],
        slides: [
            "img/taba/taba1.jpeg",
            "img/taba/taba2.jpeg",
            "img/taba/taba3.jpeg",
            "img/taba/taba4.jpeg",
            "img/taba/taba5.jpeg",
            "img/taba/taba6.jpeg",
            "img/taba/taba7.jpeg",
            "img/taba/taba8.jpeg",
            "img/taba/taba9.jpeg"
        ],
        corDestaque: "#1DB954"
    },

    'lixo': {
        tipo: "apresentacao", 
        titulo: "Módulo VIVA: Sustentabilidade no Dia a Dia",
        categoria: "Jovem Aprendiz | Meio Ambiente",
        cliente: "EchoCharge Brasil (Empresa Fictícia)",
        papel: "Lead Visual Designer do Projeto",
        objetivo: "Desenvolver um sistema modular para redução de resíduos e economia de recursos.",
        estrategiaVisual: "Como designer, projetei a apresentação utilizando tons de verde e elementos orgânicos para reforçar o conceito de sustentabilidade. Foquei na hierarquia visual para tornar os manuais educativos e as explicações técnicas do 'Módulo VIVA' acessíveis e visualmente atraentes.",
        descricao: "Projeto focado na criação do 'Módulo VIVA'. Atuei na criação visual do manual educativo e na estruturação dos slides, garantindo que a tecnologia sustentável fosse percebida de forma simples e intuitiva.",
        analise: {
            publico: "Comunidade local e empresas focadas em ESG.",
            insights: "Soluções simples de baixo custo geram maior engajamento social."
        },
        entregáveis: [
            "Concepção visual do sistema modular",
            "Design e diagramação de manual educativo",
            "Criação de apresentação visual (Canva) e iconografia"
        ],
        slides: ["img/viva/viva(1).jpeg", "img/viva/viva(2).jpeg", "img/viva/viva(3).jpeg", "img/viva/viva(4).jpeg", "img/viva/viva(5).jpeg", "img/viva/viva(6).jpeg", "img/viva/viva(7).jpeg", "img/viva/viva(8).jpeg", "img/viva/viva(9).jpeg"],
        corDestaque: "#10b981"
    },

    'carnaval': {
            tipo: "apresentacao",
            titulo: "Marchinha Social: Contra o Trabalho Infantil",
            categoria: "Jovem Aprendiz | Impacto Social",
            cliente: "Projeto de Conscientização Social",
            papel: "Diretora de Arte e Criativa",
            objetivo: "Gerar empatia e informar sobre os riscos do trabalho infantil.",
            estrategiaVisual: "Criei o conceito visual explorando o contraste direto: usei cores vibrantes típicas do carnaval em oposição a imagens e textos sóbrios baseados no ECA. O design foi pensado para chamar a atenção pela estética festiva e converter essa atenção em conscientização social séria.",
            descricao: "Campanha focada na proteção de crianças e adolescentes. Minha função foi desenvolver toda a parte visual, transformando artigos de lei em infográficos compreensíveis e slides impactantes.",
            analise: {
                publico: "Foliões e órgãos públicos.",
                insights: "A normalização do trabalho infantil precisa ser combatida com informação visual clara."
            },
            entregáveis: [
                "Criação de conceito visual e paleta cromática",
                "Design de Infográficos baseados no ECA",
                "Desenvolvimento de apresentação de conscientização"
            ],
            slides: [
                "img/carnaval/carnaval1.jpeg",
                "img/carnaval/carnaval2.jpeg",
                "img/carnaval/carnaval3.jpeg",
                "img/carnaval/carnaval4.jpeg",
                "img/carnaval/carnaval5.jpeg",
                "img/carnaval/carnaval6.jpeg",
                "img/carnaval/carnaval7.jpeg"
            ],
            corDestaque: "#f59e0b"
        },

'risos': {
        tipo: "unica",
        titulo: "Branding Pessoal: Quem é a Letícia?",
        categoria: "Identidade & Soft Skills", // Removido "Jovem Aprendiz"
        cliente: "Módulo de Desenvolvimento Pessoal",
        papel: "Designer Visual e Criativa",
        objetivo: "Mapear competências comportamentais para a construção de uma marca pessoal autêntica.",
        estrategiaVisual: `O desafio foi criar uma representação visual da minha identidade profissional...`,
        descricao: `Este projeto de autoconhecimento foi o ponto de partida para o meu branding pessoal...`,
        // Removido o campo analise (público-alvo) daqui
        entregáveis: [
            "Criação de Identidade Visual Pessoal",
            "Mapeamento de Soft Skills e competências",
            "Design de Nuvem de Palavras (Visual Thinking)",
            "Composição de Crachá de Características Profissionais"
        ],
        bannerPrincipal: "img/cracha.jpeg",
        // Removido o array imagens (galeria) daqui
        corDestaque: "#3b82f6"
    },


    'batata-frita': {
        titulo: "Batata Frita: Vídeo Promocional",
        cliente: "Empresa Fictícia (Projeto Autoral)",
        categoria: "Audiovisual", 
        tipo: "video", // Importante ser 'video'
        videoUrl: "videos/batata-promo.mp4", // O caminho do seu arquivo
        corDestaque: "#A67B5B", // Um vermelho batata frita
        papel: "Direção Criativa, Roteiro e Edição",
        descricao: "Criação de um vídeo promocional em formato de vertical e curto voltado ao Marketing de desejo com cortes rápidos e edição fluída",
        estrategiaVisual: "Escolhi realizar uma campanha sobre batata frita. Utilizei cores quentes (vermelho e amarelo) para estimular o apetite e apliquei técnicas de edição do CapCut para sincronizar os elementos visuais com a trilha sonora. O uso de imagens de ingredientes reais e uma fonte limpa reforça a transparência e a qualidade artesanal da marca.",
        entregáveis: [
            "Vídeo vertical 9:16",
            "Criação de identidade visual da marca fictícia",
            "Copywriting para legenda de redes sociais"
        ]
    },
    
};*/