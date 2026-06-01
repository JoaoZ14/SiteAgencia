export const CATALOG_INTRO = {
  label: 'Catálogo GMK',
  title: 'Tudo o que sua marca precisa para crescer, em um só lugar.',
  lead:
    'A GMK reúne estratégia, conteúdo, tráfego e produção audiovisual em um único time integrado. Sem fragmentação, sem retrabalho. Só entregas que movem o ponteiro do seu negócio.',
}

export const CATALOG_PILLARS = [
  {
    id: 'marketing',
    title: 'Marketing Digital',
    desc: 'Estratégia, gestão de redes, tráfego pago e conteúdo para transformar sua presença digital em canal de aquisição.',
  },
  {
    id: 'audiovisual',
    title: 'Produção Audiovisual',
    desc: 'Produção de vídeo e fotografia que elevam a percepção da sua marca e entregam material pronto para publicar e anunciar.',
  },
]

export const SERVICE_CATEGORIES = [
  {
    pillar: 'marketing',
    title: 'Marketing Digital',
    items: [
      {
        name: 'Marketing 360',
        desc: 'Gestão completa da presença digital: estratégia, conteúdo, redes e tráfego em um único plano coeso, com acompanhamento próximo e relatório mensal.',
        includes: ['Diagnóstico inicial', 'Plano mensal de ações', 'Reunião de acompanhamento', 'Relatório de performance'],
      },
      {
        name: 'Social Media',
        desc: 'Gestão estratégica das redes sociais para que sua marca publique com consistência, mantenha identidade e construa uma audiência real ao longo do tempo.',
        includes: ['Calendário editorial', 'Posts e stories', 'Legendas e hashtags', 'Monitoramento básico'],
      },
      {
        name: 'Criação de Conteúdo',
        desc: 'Textos, roteiros e copy que explicam o que você vende, geram interesse e ajudam a transformar visitantes em clientes.',
        includes: ['Copy para posts', 'Roteiros de vídeo', 'Textos para anúncios', 'Legendas e CTAs'],
      },
      {
        name: 'Tráfego Pago',
        desc: 'Campanhas em Meta Ads, Google Ads e TikTok Ads orientadas por dados e otimizadas para cliques qualificados, leads e vendas mensuráveis.',
        includes: ['Estrutura de campanhas', 'Segmentação', 'Testes A/B', 'Relatório de resultados'],
      },
      {
        name: 'Estratégia Digital',
        desc: 'Diagnóstico e planejamento para marcas que querem construir ou evoluir sua presença digital com método: do posicionamento ao plano de ação.',
        includes: ['Análise de momento', 'Posicionamento', 'Funil de conteúdo', 'Plano de ação'],
      },
      {
        name: 'Desenvolvimento',
        desc: 'Sites e landing pages rápidos, responsivos e otimizados para transformar visitantes em clientes, com SEO e integração com WhatsApp desde a entrega.',
        includes: ['Layout responsivo', 'Integração com WhatsApp', 'Formulários', 'SEO básico'],
      },
      {
        name: 'Design Gráfico',
        desc: 'Criativos digitais alinhados à identidade da sua marca para que cada publicação, anúncio e campanha reforce o posicionamento que você quer ocupar.',
        includes: ['Posts e carrosséis', 'Stories e capas', 'Criativos para ads', 'Adaptações de formato'],
      },
    ],
  },
  {
    pillar: 'audiovisual',
    title: 'Produção Audiovisual',
    items: [
      {
        name: 'Reels e Shorts',
        desc: 'Vídeos verticais dinâmicos para Instagram, TikTok e YouTube Shorts com roteiro, gravação e edição profissional.',
        includes: ['Roteiro', 'Gravação', 'Edição com legendas', 'Entrega em formatos das plataformas'],
      },
      {
        name: 'Vídeo Institucional',
        desc: 'Apresentação da marca, serviços ou bastidores com narrativa profissional que gera credibilidade e fortalece a percepção de autoridade.',
        includes: ['Briefing e roteiro', 'Captação', 'Edição final', 'Versão para site e redes'],
      },
      {
        name: 'Vídeo para Anúncios',
        desc: 'Criativos em vídeo otimizados para campanhas de tráfego pago, com roteiro de conversão e formatos adaptados para Meta, TikTok e Google.',
        includes: ['Roteiro de conversão', 'Gravação', 'Edição para Meta/TikTok/Google', 'Variações de formato'],
      },
      {
        name: 'Cobertura de Eventos',
        desc: 'Registro audiovisual de eventos, lançamentos e ações presenciais com entrega ágil para publicação imediata nas redes.',
        includes: ['Captação photo + video', 'Edição resumida', 'Entrega para redes', 'Entrega em até 72h'],
      },
      {
        name: 'Fotografia de Produto',
        desc: 'Imagens com iluminação e composição profissionais que elevam a percepção de qualidade do produto e aumentam a confiança na hora da compra.',
        includes: ['Setup de luz', 'Edição básica', 'Fundo neutro ou lifestyle', 'Entrega em alta resolução'],
      },
      {
        name: 'Fotografia de Marca',
        desc: 'Sessões para perfil da empresa, equipe, ambientes e lifestyle que constroem um banco de imagens autêntico e alinhado à identidade visual.',
        includes: ['Direção de cena', 'Seleção de fotos', 'Tratamento de cor', 'Banco de imagens da marca'],
      },
      {
        name: 'Pacote Conteúdo Mensal AV',
        desc: 'Produção mensal recorrente de foto e vídeo para que sua marca publique com frequência, qualidade e identidade visual consistente, sem depender de improvisos.',
        includes: ['Planejamento mensal', 'Mix de reels e fotos', 'Edição e entrega', 'Alinhamento com calendário social'],
      },
    ],
  },
]

export const PACKAGES = [
  {
    name: 'Essencial Visual',
    focus: 'Audiovisual',
    tagline: 'Para marcas que querem conteúdo profissional sem abrir mão da qualidade visual.',
    features: [
      '4 reels editados por mês',
      '1 sessão fotográfica (até 20 fotos)',
      'Roteiro e direção de conteúdo',
      'Entrega otimizada para Instagram e TikTok',
    ],
    note: 'Indicado para negócios locais, profissionais autônomos e marcas em início de posicionamento.',
  },
  {
    name: 'Social Pro',
    focus: 'Marketing Digital',
    tagline: 'Para marcas que querem consistência nas redes sem precisar contratar um time interno.',
    features: [
      '10 posts por mês',
      '4 reels por mês',
      'Calendário editorial',
      'Legendas, hashtags e relatório mensal',
    ],
    note: 'Para quem quer consistência sem montar equipe interna.',
    highlight: true,
  },
  {
    name: 'Performance',
    focus: 'Marketing Digital',
    tagline: 'Campanhas pagas com criativos, página de destino e otimização contínua para gerar leads e vendas mensuráveis.',
    features: [
      'Gestão de Meta Ads e/ou Google Ads',
      '4 criativos novos por mês',
      'Landing page ou página de captura',
      'Otimização semanal e relatório de ROI',
    ],
    note: 'Para quem quer leads e vendas mensuráveis.',
  },
  {
    name: 'Marketing 360',
    focus: 'Integrado',
    tagline: 'Para marcas que querem crescer de forma integrada: conteúdo, redes, tráfego e audiovisual em um único plano.',
    features: [
      'Gestão completa de redes sociais',
      'Posts, reels, stories e sessão foto mensal',
      'Tráfego pago com criativos em foto, vídeo e copy',
      'Reunião estratégica e relatório unificado',
    ],
    note: 'Indicado para empresas que buscam presença digital robusta e escalável, sem gerir múltiplos fornecedores.',
  },
]

export const ADDONS = [
  { name: 'Landing page adicional', desc: 'Página de destino adicional para uma campanha, lançamento ou produto específico.' },
  { name: 'Sessão foto avulsa', desc: 'Produção pontual de imagens para campanha, catálogo ou lançamento.' },
  { name: 'Reels avulsos', desc: 'Pacote de reels sob demanda, fora do plano mensal.' },
  { name: 'Consultoria estratégica', desc: 'Sessão dedicada de diagnóstico e plano de ação para o seu momento atual.' },
  { name: 'Gestão do Google Meu Negócio', desc: 'Otimização e publicação regular no perfil local para aumentar visibilidade em buscas na sua região.' },
  { name: 'Identidade visual de entrada', desc: 'Logo, paleta de cores e templates para redes: o ponto de partida para sua marca comunicar com consistência.' },
]

export const PROCESS_STEPS = [
  { step: '01', title: 'Briefing', desc: 'Entendemos seu negócio, seu público e onde você quer chegar antes de propor qualquer coisa.' },
  { step: '02', title: 'Proposta', desc: 'Montamos uma proposta personalizada: serviços, escopo e investimento alinhados ao seu momento real.' },
  { step: '03', title: 'Produção', desc: 'Executamos com você no loop: comunicação direta, prazos cumpridos e entregas que você aprova antes de ir ao ar.' },
  { step: '04', title: 'Resultado', desc: 'Monitoramos os resultados, apresentamos relatórios claros e otimizamos continuamente para que cada ciclo seja melhor que o anterior.' },
]
