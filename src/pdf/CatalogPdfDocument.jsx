import {
  Document,
  Page,
  Text,
  View,
  Image,
  Link,
} from '@react-pdf/renderer'
import {
  CATALOG_PILLARS,
  CATALOG_PRESENTATION,
  CATALOG_DIFFERENTIALS,
  CATALOG_CASES,
  CATALOG_NAV,
  CATALOG_CONTACT,
  SERVICE_CATEGORIES,
  PACKAGES,
  ADDONS,
  PROCESS_STEPS,
} from '../data/catalog'
import { pdfStyles as s } from './catalogPdfStyles'
import {
  PdfIcon,
  PdfIconBox,
  PdfCheck,
  getServiceIcon,
} from './pdfIcons'

const LOGO_PATH = '/Design sem nome (7).png'
const TOTAL_PAGES = 11

function PageFooter({ page }) {
  return (
    <View style={s.pageFooter} fixed>
      <Link src={CATALOG_CONTACT.websiteHref} style={s.link}>
        <Text style={s.pageFooterText}>GMK Digital · Go Make Known</Text>
      </Link>
      <Text style={s.pageFooterText}>
        {CATALOG_CONTACT.email} · {CATALOG_CONTACT.city}
      </Text>
      <Text style={s.pageFooterText}>
        {page} / {TOTAL_PAGES}
      </Text>
    </View>
  )
}

function PageHeader({ section }) {
  return (
    <View style={s.pageHeader}>
      <Link src={CATALOG_CONTACT.websiteHref}>
        <Text style={s.pageHeaderBrand}>GMK Digital</Text>
      </Link>
      <Text style={s.pageHeaderSection}>{section}</Text>
    </View>
  )
}

function SectionIntro({ label, title, subtitle }) {
  return (
    <View>
      <Text style={s.sectionLabel}>{label}</Text>
      <Text style={s.sectionTitle}>{title}</Text>
      {subtitle ? <Text style={s.sectionSubtitle}>{subtitle}</Text> : null}
    </View>
  )
}

function ServiceItem({ item }) {
  const iconName = getServiceIcon(item.name)
  return (
    <View style={s.serviceCard} wrap={false}>
      <PdfIconBox name={iconName} size={32} iconSize={15} />
      <View style={s.serviceCardBody}>
        <Text style={s.serviceBenefit}>{item.benefit}</Text>
        <Text style={s.serviceName}>{item.name}</Text>
        <Text style={s.serviceDesc}>{item.desc}</Text>
        <View style={s.includesRow}>
          {item.includes.map((inc) => (
            <View key={inc} style={s.includeTag}>
              <PdfCheck size={8} />
              <Text style={s.includeTagText}>{inc}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}

function ServicesPage({ category, items, pageNum, sectionLabel, anchor }) {
  return (
    <Page size="A4" style={s.page} id={anchor}>
      <PageHeader section={sectionLabel} />
      <SectionIntro
        label={category.title}
        title={category.title}
        subtitle={category.subtitle}
      />
      <View style={s.servicesList}>
        {items.map((item) => (
          <ServiceItem key={item.name} item={item} />
        ))}
      </View>
      <PageFooter page={pageNum} />
    </Page>
  )
}

export default function CatalogPdfDocument({ logoSrc }) {
  const marketing = SERVICE_CATEGORIES[0]
  const audiovisual = SERVICE_CATEGORIES[1]

  return (
    <Document
      title="Catálogo GMK Digital"
      author="GMK Digital"
      subject="Marketing digital e produção audiovisual"
    >
      {/* 1 — Capa */}
      <Page size="A4" style={s.coverPage}>
        {logoSrc && <Image src={logoSrc} style={s.coverLogo} />}

        <Text style={s.coverLabel}>Catálogo Comercial · GMK Digital</Text>
        <Text style={s.coverTitle}>Da criação{'\n'}ao resultado.</Text>
        <Text style={s.coverTagline}>
          Transformar presença digital em reconhecimento real.
        </Text>
        <Text style={s.coverLead}>
          Estratégia, conteúdo, tráfego e audiovisual em um único time — sem
          intermediários. Material pensado para marcas que buscam credibilidade
          e conversão.
        </Text>

        <View style={s.coverDivider} />

        <View style={s.coverPillars}>
          {CATALOG_PILLARS.map((p, i) => (
            <View key={p.id} style={s.coverPillar}>
              <View style={s.coverPillarHead}>
                <Text style={s.coverPillarIndex}>0{i + 1}</Text>
                <PdfIcon name={p.icon} size={14} color="#2D5FD4" />
              </View>
              <Text style={s.coverPillarTitle}>{p.title}</Text>
            </View>
          ))}
        </View>

        <Text style={[s.coverFooterText, { marginBottom: 8, color: '#666' }]}>
          Navegue pelo catálogo
        </Text>
        <View style={s.coverNav}>
          {CATALOG_NAV.map((item) => (
            <Link key={item.anchor} src={`#${item.anchor}`} style={s.coverNavItem}>
              <Text style={s.coverNavItemText}>{item.label}</Text>
            </Link>
          ))}
        </View>

        <View style={s.coverFooter}>
          <Link src={CATALOG_CONTACT.websiteHref}>
            <Text style={s.coverFooterLink}>{CATALOG_CONTACT.website}</Text>
          </Link>
          <Text style={s.coverFooterText}>
            Marketing Digital · Produção Audiovisual
          </Text>
        </View>
      </Page>

      {/* 2 — Apresentação */}
      <Page size="A4" style={s.page} id="apresentacao">
        <PageHeader section="Apresentação" />
        <SectionIntro
          label={CATALOG_PRESENTATION.label}
          title={CATALOG_PRESENTATION.title}
        />
        <View style={s.presentationBody}>
          {CATALOG_PRESENTATION.paragraphs.map((p) => (
            <Text key={p.slice(0, 24)} style={s.presentationParagraph}>
              {p}
            </Text>
          ))}
        </View>
        <View style={s.highlightsRow}>
          {CATALOG_PRESENTATION.highlights.map((h) => (
            <View key={h.label} style={s.highlightCard}>
              <View style={s.highlightCardTop}>
                <PdfIconBox name={h.icon} size={30} iconSize={14} />
              </View>
              <Text style={s.highlightLabel}>{h.label}</Text>
              <Text style={s.highlightValue}>{h.value}</Text>
            </View>
          ))}
        </View>
        <PageFooter page={2} />
      </Page>

      {/* 3 — Diferenciais */}
      <Page size="A4" style={s.page} id="diferenciais">
        <PageHeader section="Por que a GMK" />
        <SectionIntro
          label="Diferenciais"
          title="O que nos torna a escolha certa para sua marca"
          subtitle="Benefícios claros, entrega integrada e foco em resultado — sem promessas vazias."
        />
        <View style={s.diffGrid}>
          {CATALOG_DIFFERENTIALS.map((d) => (
            <View key={d.title} style={s.diffCard} wrap={false}>
              <View style={s.diffCardHead}>
                <PdfIconBox name={d.icon} size={28} iconSize={13} />
                <Text style={s.diffTitle}>{d.title}</Text>
              </View>
              <Text style={s.diffDesc}>{d.desc}</Text>
              <Text style={s.diffResult}>→ {d.result}</Text>
            </View>
          ))}
        </View>
        <PageFooter page={3} />
      </Page>

      {/* 4–5 — Serviços Marketing */}
      <ServicesPage
        anchor="servicos-marketing"
        category={marketing}
        items={marketing.items.slice(0, 4)}
        pageNum={4}
        sectionLabel="Serviços · Marketing (1/2)"
      />
      <ServicesPage
        category={marketing}
        items={marketing.items.slice(4)}
        pageNum={5}
        sectionLabel="Serviços · Marketing (2/2)"
      />

      {/* 6–7 — Serviços AV */}
      <ServicesPage
        anchor="servicos-av"
        category={audiovisual}
        items={audiovisual.items.slice(0, 4)}
        pageNum={6}
        sectionLabel="Serviços · Audiovisual (1/2)"
      />
      <ServicesPage
        category={audiovisual}
        items={audiovisual.items.slice(4)}
        pageNum={7}
        sectionLabel="Serviços · Audiovisual (2/2)"
      />

      {/* 8 — Processo */}
      <Page size="A4" style={s.page} id="processo">
        <PageHeader section="Como trabalhamos" />
        <SectionIntro
          label="Processo"
          title="Do briefing ao resultado, em 4 etapas"
          subtitle="Método claro para você saber exatamente o que esperar em cada fase do projeto."
        />
        <View style={s.processRow}>
          {PROCESS_STEPS.map((step) => (
            <View key={step.step} style={s.processStep} wrap={false}>
              <View style={s.processHead}>
                <Text style={s.processNum}>{step.step}</Text>
                <PdfIconBox name={step.icon} size={24} iconSize={12} />
              </View>
              <Text style={s.processTitle}>{step.title}</Text>
              <Text style={s.processDesc}>{step.desc}</Text>
            </View>
          ))}
        </View>
        <PageFooter page={8} />
      </Page>

      {/* 9 — Cases */}
      <Page size="A4" style={s.page} id="cases">
        <PageHeader section="Resultados por segmento" />
        <SectionIntro
          label="Cases"
          title="Onde geramos valor"
          subtitle="Formatos de entrega e resultados por segmento — sem expor dados confidenciais de clientes."
        />
        <View style={s.casesGrid}>
          {CATALOG_CASES.map((c) => (
            <View key={c.segment} style={s.caseCard} wrap={false}>
              <PdfIconBox name={c.icon} size={36} iconSize={16} />
              <View style={s.caseBody}>
                <Text style={s.caseSegment}>{c.segment}</Text>
                <Text style={s.caseDelivery}>{c.delivery}</Text>
                <Text style={s.caseOutcome}>→ {c.outcome}</Text>
              </View>
            </View>
          ))}
        </View>
        <PageFooter page={9} />
      </Page>

      {/* 10 — Planos */}
      <Page size="A4" style={s.page} id="planos">
        <PageHeader section="Planos mensais" />
        <SectionIntro
          label="Planos"
          title="Pacotes para cada momento da sua marca"
          subtitle="Valores sob consulta. Montamos a proposta de acordo com escopo, nicho e objetivos."
        />
        <View style={s.packagesGrid}>
          {PACKAGES.map((pkg) => (
            <View
              key={pkg.name}
              style={[s.packageCard, pkg.highlight && s.packageCardHighlight]}
              wrap={false}
            >
              {pkg.highlight && (
                <Text style={s.packageBadge}>Mais contratado</Text>
              )}
              <Text style={s.packageFocus}>{pkg.focus}</Text>
              <Text style={s.packageName}>{pkg.name}</Text>
              <Text style={s.packageTagline}>{pkg.tagline}</Text>
              <View style={s.packageDivider} />
              {pkg.features.map((f) => (
                <View key={f} style={s.packageFeatureRow}>
                  <PdfCheck size={9} />
                  <Text style={s.packageFeature}>{f}</Text>
                </View>
              ))}
              <View style={s.packageFooter}>
                <Text style={s.packageNote}>{pkg.note}</Text>
                <Text style={s.packagePrice}>Sob consulta</Text>
              </View>
            </View>
          ))}
        </View>
        <PageFooter page={10} />
      </Page>

      {/* 11 — Contato */}
      <Page size="A4" style={s.page} id="contato">
        <PageHeader section="Contato" />
        <SectionIntro
          label="Próximo passo"
          title="Solicite uma proposta personalizada"
          subtitle="Conte o que sua marca precisa. Respondemos com escopo, prazos e investimento alinhados ao seu momento."
        />

        <View style={s.ctaBox} wrap={false}>
          <Text style={s.ctaTitle}>
            Vamos transformar sua presença digital em reconhecimento real.
          </Text>
          <Text style={s.ctaText}>
            Marketing digital, audiovisual ou os dois integrados — montamos o
            plano ideal para o seu negócio.
          </Text>
          <Link src={CATALOG_CONTACT.proposalUrl} style={s.ctaButton}>
            <Text style={s.ctaButtonText}>Solicitar proposta no site</Text>
            <PdfIcon name="arrowRight" size={12} color="#FFFFFF" />
          </Link>
        </View>

        <View style={s.contactGrid}>
          <View style={s.contactItem}>
            <PdfIconBox name="phone" size={26} iconSize={13} />
            <View>
              <Link src={CATALOG_CONTACT.phoneHref} style={s.link}>
                <Text style={s.contactLink}>{CATALOG_CONTACT.phone}</Text>
              </Link>
              <Link src={CATALOG_CONTACT.whatsappHref} style={s.link}>
                <Text style={[s.contactText, { fontSize: 8, marginTop: 2 }]}>
                  WhatsApp
                </Text>
              </Link>
            </View>
          </View>
          <View style={s.contactItem}>
            <PdfIconBox name="mail" size={26} iconSize={13} />
            <Link src={CATALOG_CONTACT.emailHref} style={s.link}>
              <Text style={s.contactLink}>{CATALOG_CONTACT.email}</Text>
            </Link>
          </View>
          <View style={s.contactItem}>
            <PdfIconBox name="link" size={26} iconSize={13} />
            <Link src={CATALOG_CONTACT.instagramHref} style={s.link}>
              <Text style={s.contactLink}>{CATALOG_CONTACT.instagram}</Text>
            </Link>
          </View>
          <View style={s.contactItem}>
            <PdfIconBox name="global" size={26} iconSize={13} />
            <Link src={CATALOG_CONTACT.websiteHref} style={s.link}>
              <Text style={s.contactLink}>{CATALOG_CONTACT.website}</Text>
            </Link>
          </View>
        </View>

        <View style={s.sectionDivider} />

        <Text style={[s.sectionLabel, { marginBottom: 10 }]}>Complementos</Text>
        <Text style={[s.sectionSubtitle, { marginBottom: 12 }]}>
          Contrate pontualmente, sem plano mensal.
        </Text>
        <View style={s.addonsGrid}>
          {ADDONS.map((addon) => (
            <View key={addon.name} style={s.addonItem}>
              <PdfCheck size={8} />
              <View>
                <Text style={s.addonName}>{addon.name}</Text>
                <Text style={s.addonDesc}>{addon.desc}</Text>
              </View>
            </View>
          ))}
        </View>

        <PageFooter page={11} />
      </Page>
    </Document>
  )
}

export { LOGO_PATH }
