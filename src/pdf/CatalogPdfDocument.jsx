import {
  Document,
  Page,
  Text,
  View,
  Image,
} from '@react-pdf/renderer'
import {
  CATALOG_INTRO,
  CATALOG_PILLARS,
  SERVICE_CATEGORIES,
  PACKAGES,
  ADDONS,
} from '../data/catalog'
import { pdfStyles as s } from './catalogPdfStyles'

const LOGO_PATH = '/Design sem nome (7).png'

const TOTAL_PAGES = 5

function PageFooter({ page }) {
  return (
    <View style={s.pageFooter} fixed>
      <Text style={s.pageFooterText}>GMK Digital · Go Make Known</Text>
      <Text style={s.pageFooterText}>contato@gmkagency.com · Resende, RJ</Text>
      <Text style={s.pageFooterText}>{page} / {TOTAL_PAGES}</Text>
    </View>
  )
}

function PageHeader({ section }) {
  return (
    <View style={s.pageHeader}>
      <Text style={s.pageHeaderBrand}>GMK Digital</Text>
      <Text style={s.pageHeaderSection}>{section}</Text>
    </View>
  )
}

function ServiceItem({ item }) {
  return (
    <View style={s.serviceBlock} wrap={false}>
      <View style={s.serviceNameRow}>
        <View style={s.serviceAccentBar} />
        <Text style={s.serviceName}>{item.name}</Text>
      </View>
      <Text style={s.serviceDesc}>{item.desc}</Text>
      <View style={s.includesRow}>
        {item.includes.map((inc) => (
          <Text key={inc} style={s.includeTag}>{inc}</Text>
        ))}
      </View>
    </View>
  )
}

export default function CatalogPdfDocument({ logoSrc }) {
  return (
    <Document
      title="Catálogo GMK Digital"
      author="GMK Digital"
      subject="Marketing digital e produção audiovisual"
    >

      {/* Pagina 1 — Capa */}
      <Page size="A4" style={s.coverPage}>
        {logoSrc && <Image src={logoSrc} style={s.coverLogo} />}

        <Text style={s.coverLabel}>Catálogo de Serviços · GMK Digital</Text>
        <Text style={s.coverTitle}>Da criação{'\n'}ao resultado.</Text>
        <Text style={s.coverTagline}>Transformar presença digital em reconhecimento real.</Text>
        <Text style={s.coverLead}>
          Conteúdo, estratégia e execução no mesmo time. Sem intermediários,
          sem processos lentos. Só entrega com intenção.
        </Text>

        <View style={s.coverDivider} />

        <View style={s.coverPillars}>
          {CATALOG_PILLARS.map((p, i) => (
            <View key={p.id} style={s.coverPillar}>
              <Text style={s.coverPillarIndex}>0{i + 1}</Text>
              <Text style={s.coverPillarTitle}>{p.title}</Text>
            </View>
          ))}
        </View>

        <View style={s.coverFooter}>
          <Text style={s.coverFooterText}>gmkagency.com</Text>
          <Text style={s.coverFooterText}>Marketing Digital · Produção Audiovisual</Text>
        </View>
      </Page>

      {/* Pagina 2 — Servicos: Marketing Digital */}
      <Page size="A4" style={s.page}>
        <PageHeader section="Serviços: Marketing Digital" />

        <Text style={s.sectionTitle}>Marketing Digital</Text>
        <Text style={s.sectionSubtitle}>
          Estratégia, gestão e performance para sua marca crescer com consistência no ambiente online.
        </Text>

        <View style={s.servicesGrid}>
          {SERVICE_CATEGORIES[0].items.map((item) => (
            <ServiceItem key={item.name} item={item} />
          ))}
        </View>

        <PageFooter page={2} />
      </Page>

      {/* Pagina 3 — Servicos: Producao Audiovisual */}
      <Page size="A4" style={s.page}>
        <PageHeader section="Serviços: Produção Audiovisual" />

        <Text style={s.sectionTitle}>Produção Audiovisual</Text>
        <Text style={s.sectionSubtitle}>
          Foto e vídeo com direção, roteiro e edição profissional, entregues prontos para publicar e anunciar.
        </Text>

        <View style={s.servicesGrid}>
          {SERVICE_CATEGORIES[1].items.map((item) => (
            <ServiceItem key={item.name} item={item} />
          ))}
        </View>

        <PageFooter page={3} />
      </Page>

      {/* Pagina 4 — Planos Mensais */}
      <Page size="A4" style={s.page}>
        <PageHeader section="Planos Mensais" />

        <Text style={s.sectionTitle}>Planos Mensais</Text>
        <Text style={s.sectionSubtitle}>
          Escolha o plano mais adequado ao seu momento. Todos os valores são sob consulta
          e a proposta é montada de acordo com o escopo e nicho do negócio.
        </Text>

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
                  <Text style={s.packageFeatureDot}>·</Text>
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

        <PageFooter page={4} />
      </Page>

      {/* Pagina 5 — Complementos + Processo + CTA */}
      <Page size="A4" style={s.page}>
        <PageHeader section="Complementos e Como Funciona" />

        <Text style={s.sectionTitle}>Serviços Avulsos</Text>
        <Text style={s.sectionSubtitle}>
          Contrate pontualmente, sem precisar de um plano mensal.
        </Text>

        <View style={s.addonsGrid}>
          {ADDONS.map((addon) => (
            <View key={addon.name} style={s.addonItem}>
              <Text style={s.addonName}>{addon.name}</Text>
              <Text style={s.addonDesc}>{addon.desc}</Text>
            </View>
          ))}
        </View>

        <View style={s.sectionDivider} />

        <View style={s.ctaBox} wrap={false}>
          <View style={s.ctaLeft}>
            <Text style={s.ctaTitle}>Quer uma proposta personalizada?</Text>
            <Text style={s.ctaText}>
              Conte o que sua marca precisa. Montamos um plano sob medida,
              marketing digital, audiovisual ou os dois integrados.
            </Text>
          </View>
          <View style={s.ctaRight}>
            <Text style={s.ctaContactLabel}>Fale com a equipe</Text>
            <Text style={s.ctaContact}>(00) 90000-0000</Text>
            <Text style={s.ctaContact}>contato@gmkagency.com</Text>
            <Text style={s.ctaContact}>@gmkdigital</Text>
            <Text style={s.ctaContact}>Resende, RJ</Text>
          </View>
        </View>

        <PageFooter page={5} />
      </Page>

    </Document>
  )
}

export { LOGO_PATH }
