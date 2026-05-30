export const CATALOG_INTRO = {
  label: 'Catálogo GMK',
  title: 'Marketing digital e produção audiovisual',
  lead:
    'A GMK une estratégia, conteúdo, tráfego e produção audiovisual em um só time. Do reel ao anúncio, da foto ao site: tudo pensado para sua marca ser vista e gerar resultado.',
}

export const CATALOG_PILLARS = [
  {
    id: 'marketing',
    title: 'Marketing Digital',
    desc: 'Presença, performance e conversão no ambiente online.',
  },
  {
    id: 'audiovisual',
    title: 'Produção Audiovisual',
    desc: 'Vídeo e foto com padrão profissional para redes, campanhas e marca.',
  },
]

export const SERVICE_CATEGORIES = [
  {
    pillar: 'marketing',
    title: 'Marketing Digital',
    items: [
      {
        name: 'Marketing 360',
        desc: 'Plano integrado com conteúdo, redes, tráfego e presença digital alinhados à estratégia da marca.',
        includes: ['Diagnóstico inicial', 'Plano mensal de ações', 'Reunião de acompanhamento', 'Relatório de performance'],
      },
      {
        name: 'Social Media',
        desc: 'Gestão completa das redes sociais com calendário, criação e publicação.',
        includes: ['Calendário editorial', 'Posts e stories', 'Legendas e hashtags', 'Monitoramento básico'],
      },
      {
        name: 'Criação de Conteúdo',
        desc: 'Textos, roteiros e copy para redes, anúncios, sites e campanhas.',
        includes: ['Copy para posts', 'Roteiros de vídeo', 'Textos para anúncios', 'Legendas e CTAs'],
      },
      {
        name: 'Tráfego Pago',
        desc: 'Campanhas em Meta Ads, Google Ads e TikTok Ads com otimização contínua.',
        includes: ['Estrutura de campanhas', 'Segmentação', 'Testes A/B', 'Relatório de resultados'],
      },
      {
        name: 'Estratégia Digital',
        desc: 'Consultoria e planejamento para marcas que estão começando ou reorganizando presença online.',
        includes: ['Análise de momento', 'Posicionamento', 'Funil de conteúdo', 'Plano de ação'],
      },
      {
        name: 'Desenvolvimento',
        desc: 'Sites, landing pages e bots sob medida para captar e converter leads.',
        includes: ['Layout responsivo', 'Integração com WhatsApp', 'Formulários', 'SEO básico'],
      },
      {
        name: 'Design Gráfico',
        desc: 'Peças digitais para feed, stories, anúncios e materiais de campanha.',
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
        desc: 'Vídeos verticais dinâmicos para Instagram, TikTok e YouTube Shorts.',
        includes: ['Roteiro', 'Gravação', 'Edição com legendas', 'Entrega em formatos das plataformas'],
      },
      {
        name: 'Vídeo Institucional',
        desc: 'Apresentação da marca, serviços ou bastidores com narrativa profissional.',
        includes: ['Briefing e roteiro', 'Captação', 'Edição final', 'Versão para site e redes'],
      },
      {
        name: 'Vídeo para Anúncios',
        desc: 'Criativos em vídeo otimizados para campanhas de tráfego pago.',
        includes: ['Roteiro de conversão', 'Gravação', 'Edição para Meta/TikTok/Google', 'Variações de formato'],
      },
      {
        name: 'Cobertura de Eventos',
        desc: 'Registro audiovisual de eventos, lançamentos e ações presenciais.',
        includes: ['Captação photo + video', 'Edição resumida', 'Entrega para redes', 'Seleção de melhores takes'],
      },
      {
        name: 'Fotografia de Produto',
        desc: 'Imagens que valorizam o produto para e-commerce, catálogo e anúncios.',
        includes: ['Setup de luz', 'Edição básica', 'Fundo neutro ou lifestyle', 'Entrega em alta resolução'],
      },
      {
        name: 'Fotografia de Marca',
        desc: 'Sessões para perfil da empresa, equipe, ambientes e lifestyle de marca.',
        includes: ['Direção de cena', 'Seleção de fotos', 'Tratamento de cor', 'Banco de imagens da marca'],
      },
      {
        name: 'Pacote Conteúdo Mensal AV',
        desc: 'Produção recorrente de foto e vídeo para manter o feed sempre atualizado.',
        includes: ['Planejamento mensal', 'Mix de reels e fotos', 'Edição e entrega', 'Alinhamento com calendário social'],
      },
    ],
  },
]

export const PACKAGES = [
  {
    name: 'Essencial Visual',
    focus: 'Audiovisual',
    tagline: 'Para marcas que precisam aparecer com qualidade nas redes.',
    features: [
      '4 reels editados por mês',
      '1 sessão fotográfica (até 20 fotos)',
      'Roteiro e direção de conteúdo',
      'Entrega otimizada para Instagram e TikTok',
    ],
    note: 'Ideal para negócios locais e marcas pessoais.',
  },
  {
    name: 'Social Pro',
    focus: 'Marketing Digital',
    tagline: 'Presença constante e organizada nas redes sociais.',
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
    tagline: 'Tráfego pago com criativos e página de conversão.',
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
    tagline: 'Audiovisual + social + tráfego em um plano completo.',
    features: [
      'Gestão completa de redes sociais',
      'Posts, reels, stories e sessão foto mensal',
      'Tráfego pago com criativos em foto, vídeo e copy',
      'Reunião estratégica e relatório unificado',
    ],
    note: 'Nossa solução mais completa para crescimento de marca.',
  },
]

export const ADDONS = [
  { name: 'Landing page extra', desc: 'Página adicional para campanha ou produto.' },
  { name: 'Sessão foto avulsa', desc: 'Produção pontual de imagens para campanha ou catálogo.' },
  { name: 'Reels avulsos', desc: 'Pacote de reels sob demanda, fora do plano mensal.' },
  { name: 'Consultoria estratégica', desc: 'Sessão dedicada de diagnóstico e plano de ação.' },
  { name: 'Gestão de Google Meu Negócio', desc: 'Otimização e posts no perfil local.' },
  { name: 'Identidade visual básica', desc: 'Logo, paleta e templates para redes.' },
]

export const PROCESS_STEPS = [
  { step: '01', title: 'Briefing', desc: 'Entendemos seu negócio, objetivos e momento atual.' },
  { step: '02', title: 'Proposta', desc: 'Montamos serviços ou pacote sob medida para sua realidade.' },
  { step: '03', title: 'Produção', desc: 'Executamos conteúdo, campanhas e entregas com proximidade.' },
  { step: '04', title: 'Resultado', desc: 'Acompanhamos performance e ajustamos o que for preciso.' },
]
