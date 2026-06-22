export const CATALOG_INTRO = {
  label: 'Catálogo GMK',
  title: 'Tudo que sua marca precisa, num só lugar.',
  lead:
    'Estratégia, conteúdo, tráfego e audiovisual no mesmo time. Menos retrabalho, mais coisa saindo do papel.',
}

export const CATALOG_CONTACT = {
  phone: '(24) 98163-4937',
  phoneHref: 'tel:+5524981634937',
  whatsappHref: 'https://wa.me/5524981634937',
  email: 'contato@gmkagency.com',
  emailHref: 'mailto:contato@gmkagency.com',
  instagram: '@gmkdigital',
  instagramHref: 'https://instagram.com/gmkdigital',
  website: 'gmkagency.com',
  websiteHref: 'https://gmkagency.com',
  city: 'Resende, RJ',
  proposalUrl: 'https://gmkagency.com/#contato',
}

export const CATALOG_PRESENTATION = {
  label: 'Apresentação',
  title: 'Marketing e audiovisual no mesmo time.',
  paragraphs: [
    'Estamos em Resende. Você fala com quem cria e com quem publica, sem passar por camada de aprovação.',
    'Cada entrega sai com objetivo claro: do diagnóstico ao relatório, com conteúdo que parece com a sua marca.',
  ],
  highlights: [
    { icon: 'layers', label: 'Integrado', value: 'Marketing + AV' },
    { icon: 'team', label: 'Próximo', value: 'Sem intermediários' },
    { icon: 'chart', label: 'Mensurável', value: 'Foco em conversão' },
  ],
}

export const CATALOG_DIFFERENTIALS = [
  {
    icon: 'layers',
    title: 'Tudo no mesmo plano',
    desc: 'Conteúdo, rede, tráfego e vídeo conversam entre si.',
    result: 'Menos retrabalho, mais consistência.',
  },
  {
    icon: 'team',
    title: 'Contato direto',
    desc: 'Briefing e aprovação com quem está fazendo o trabalho.',
    result: 'Decisão rápida, menos ruído.',
  },
  {
    icon: 'focus',
    title: 'Conteúdo com objetivo',
    desc: 'Cada peça ligada a venda, reserva ou lead, não só estética.',
    result: 'Presença online que traz retorno.',
  },
  {
    icon: 'chart',
    title: 'Número na mesa',
    desc: 'Relatório claro e ajuste de campanha a cada ciclo.',
    result: 'Próximo mês melhor que o anterior.',
  },
]

export const CATALOG_CASES = [
  {
    icon: 'building',
    segment: 'Hotelaria & hospedagem',
    delivery: 'Foto, vídeo e redes para hotel e pousada que precisam lotar o calendário.',
    outcome: 'Conteúdo que mostra a experiência e ajuda a vender mais diárias.',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Área de lazer de hotel com piscina e ambientação premium',
    featured: true,
  },
  {
    icon: 'camera',
    segment: 'Gastronomia & serviços locais',
    delivery: 'Reels e fotos para restaurante que precisa de mesa cheia e pedido no WhatsApp.',
    outcome: 'Material pronto para postar e impulsionar na cidade.',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Prato em restaurante com iluminação profissional',
  },
  {
    icon: 'chart',
    segment: 'E-commerce & moda',
    delivery: 'Criativos para anúncio e calendário de post alinhados à coleção.',
    outcome: 'Campanha com peça testada e funil que não fica pela metade.',
    image:
      'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Vitrine de loja de moda e e-commerce',
  },
]

export const CATALOG_NAV = [
  { label: 'Apresentação', anchor: 'apresentacao' },
  { label: 'Diferenciais', anchor: 'diferenciais' },
  { label: 'Serviços', anchor: 'servicos-marketing' },
  { label: 'Processo', anchor: 'processo' },
  { label: 'Cases', anchor: 'cases' },
  { label: 'Planos', anchor: 'planos' },
  { label: 'Contato', anchor: 'contato' },
]

export const CATALOG_PILLARS = [
  {
    id: 'marketing',
    title: 'Marketing Digital',
    desc: 'Estratégia, gestão de redes, tráfego pago e conteúdo para transformar sua presença digital em canal de aquisição.',
    icon: 'global',
  },
  {
    id: 'audiovisual',
    title: 'Produção Audiovisual',
    desc: 'Produção de vídeo e fotografia que elevam a percepção da sua marca e entregam material pronto para publicar e anunciar.',
    icon: 'video',
  },
]

export const SERVICE_CATEGORIES = [
  {
    pillar: 'marketing',
    title: 'Marketing Digital',
    subtitle:
      'Estratégia, gestão e performance para sua marca crescer com consistência no ambiente online.',
    items: [
      {
        name: 'Marketing 360',
        benefit: 'Presença digital coesa, do visual ao resultado.',
        desc: 'Gestão completa: estratégia, conteúdo, redes e tráfego em um plano único, com relatório mensal.',
        includes: ['Diagnóstico inicial', 'Plano mensal', 'Relatório de performance'],
      },
      {
        name: 'Social Media',
        benefit: 'Consistência nas redes sem equipe interna.',
        desc: 'Gestão estratégica para publicar com identidade e construir audiência ao longo do tempo.',
        includes: ['Calendário editorial', 'Posts e stories', 'Legendas e hashtags'],
      },
      {
        name: 'Criação de Conteúdo',
        benefit: 'Copy que explica, engaja e converte.',
        desc: 'Textos, roteiros e CTAs que transformam visitantes em conversas e clientes.',
        includes: ['Copy para posts', 'Roteiros de vídeo', 'Textos para anúncios'],
      },
      {
        name: 'Tráfego Pago',
        benefit: 'Leads e vendas mensuráveis com dados.',
        desc: 'Campanhas em Meta, Google e TikTok otimizadas para cliques qualificados e conversão.',
        includes: ['Estrutura de campanhas', 'Testes A/B', 'Relatório de resultados'],
      },
      {
        name: 'Estratégia Digital',
        benefit: 'Crescimento com método e plano claro.',
        desc: 'Diagnóstico e planejamento do posicionamento ao plano de ação executável.',
        includes: ['Análise de momento', 'Posicionamento', 'Plano de ação'],
      },
      {
        name: 'Desenvolvimento',
        benefit: 'Sites que convertem quem chega.',
        desc: 'Landing pages e sites rápidos, responsivos, com SEO e WhatsApp integrados.',
        includes: ['Layout responsivo', 'WhatsApp integrado', 'SEO básico'],
      },
      {
        name: 'Design Gráfico',
        benefit: 'Cada peça reforça seu posicionamento.',
        desc: 'Criativos alinhados à identidade para posts, anúncios e campanhas.',
        includes: ['Posts e carrosséis', 'Criativos para ads', 'Adaptações de formato'],
      },
    ],
  },
  {
    pillar: 'audiovisual',
    title: 'Produção Audiovisual',
    subtitle:
      'Foto e vídeo com direção profissional, prontos para publicar e anunciar.',
    items: [
      {
        name: 'Reels e Shorts',
        benefit: 'Conteúdo vertical que prende atenção.',
        desc: 'Vídeos dinâmicos para Instagram, TikTok e Shorts com roteiro, gravação e edição.',
        includes: ['Roteiro', 'Gravação', 'Edição com legendas'],
      },
      {
        name: 'Vídeo Institucional',
        benefit: 'Credibilidade e autoridade de marca.',
        desc: 'Apresentação profissional da marca, serviços ou bastidores.',
        includes: ['Briefing e roteiro', 'Captação', 'Versão site e redes'],
      },
      {
        name: 'Vídeo para Anúncios',
        benefit: 'Criativos feitos para converter em ads.',
        desc: 'Vídeos otimizados para Meta, TikTok e Google com roteiro de conversão.',
        includes: ['Roteiro de conversão', 'Gravação', 'Variações de formato'],
      },
      {
        name: 'Cobertura de Eventos',
        benefit: 'Presença imediata nas redes após o evento.',
        desc: 'Registro ágil de eventos e lançamentos com entrega para publicação.',
        includes: ['Photo + vídeo', 'Edição resumida', 'Entrega em até 72h'],
      },
      {
        name: 'Fotografia de Produto',
        benefit: 'Mais confiança na hora da compra.',
        desc: 'Imagens profissionais que elevam a percepção de qualidade do produto.',
        includes: ['Setup de luz', 'Edição básica', 'Alta resolução'],
      },
      {
        name: 'Fotografia de Marca',
        benefit: 'Banco de imagens autêntico e alinhado.',
        desc: 'Sessões de equipe, ambientes e lifestyle para comunicação consistente.',
        includes: ['Direção de cena', 'Tratamento de cor', 'Seleção de fotos'],
      },
      {
        name: 'Pacote Conteúdo Mensal AV',
        benefit: 'Publicação frequente sem improviso.',
        desc: 'Produção mensal recorrente de foto e vídeo alinhada ao calendário social.',
        includes: ['Planejamento mensal', 'Mix reels e fotos', 'Edição e entrega'],
      },
    ],
  },
]

export const PACKAGES = [
  {
    name: 'Essencial Visual',
    focus: 'Audiovisual',
    tagline: 'Conteúdo profissional com qualidade visual de agência.',
    features: [
      '4 reels editados por mês',
      '1 sessão fotográfica (até 20 fotos)',
      'Roteiro e direção de conteúdo',
    ],
    note: 'Negócios locais e marcas em início de posicionamento.',
  },
  {
    name: 'Social Pro',
    focus: 'Marketing Digital',
    tagline: 'Consistência nas redes sem montar equipe interna.',
    features: [
      '10 posts + 4 reels por mês',
      'Calendário editorial',
      'Legendas, hashtags e relatório',
    ],
    note: 'O plano mais contratado para crescimento orgânico.',
    highlight: true,
  },
  {
    name: 'Performance',
    focus: 'Marketing Digital',
    tagline: 'Tráfego pago com criativos e otimização contínua.',
    features: [
      'Gestão Meta Ads e/ou Google Ads',
      '4 criativos novos por mês',
      'Landing page e relatório de ROI',
    ],
    note: 'Para quem prioriza leads e vendas mensuráveis.',
  },
  {
    name: 'Marketing 360',
    focus: 'Integrado',
    tagline: 'Marketing e audiovisual em um único plano escalável.',
    features: [
      'Gestão completa de redes',
      'Posts, reels e sessão foto mensal',
      'Tráfego pago + relatório unificado',
    ],
    note: 'Presença digital robusta sem múltiplos fornecedores.',
  },
]

export const ADDONS = [
  { name: 'Landing page adicional', desc: 'Página de destino para campanha ou lançamento.' },
  { name: 'Sessão foto avulsa', desc: 'Produção pontual para campanha ou catálogo.' },
  { name: 'Reels avulsos', desc: 'Pacote de reels sob demanda.' },
  { name: 'Consultoria estratégica', desc: 'Diagnóstico e plano de ação dedicados.' },
  { name: 'Google Meu Negócio', desc: 'Otimização do perfil local para buscas na região.' },
  { name: 'Identidade visual de entrada', desc: 'Logo, paleta e templates para redes.' },
]

export const PROCESS_STEPS = [
  {
    step: '01',
    icon: 'fileText',
    title: 'Briefing',
    desc: 'Entendemos o negócio, o público e o que você quer resolver antes de mandar proposta.',
  },
  {
    step: '02',
    icon: 'layers',
    title: 'Proposta',
    desc: 'Escopo, serviço e valor alinhados ao que você pode investir agora.',
  },
  {
    step: '03',
    icon: 'rocket',
    title: 'Produção',
    desc: 'Execução com contato direto, prazo cumprido e ok seu antes de publicar.',
  },
  {
    step: '04',
    icon: 'chart',
    title: 'Resultado',
    desc: 'Acompanhamento, relatório e ajuste a cada ciclo.',
  },
]
