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
  PROCESS_STEPS,
} from '../data/catalog'
import { pdfStyles as s } from './catalogPdfStyles'

const LOGO_PATH = '/Design sem nome (7).png'

function PageFooter({ page, total }) {
  return (
    <View style={s.pageFooter} fixed>
      <Text style={s.pageFooterText}>GMK Digital · Go Make Known</Text>
      <Text style={s.pageFooterText}>contato@gmkagency.com · Resende, RJ</Text>
      <Text style={s.pageFooterText}>{page} / {total}</Text>
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

export default function CatalogPdfDocument({ logoSrc }) {
  return (
    <Document
      title="Catálogo GMK Digital"
      author="GMK Digital"
      subject="Marketing digital e produção audiovisual"
    >
      {/* Capa */}
      <Page size="A4" style={s.coverPage}>
        {logoSrc && <Image src={logoSrc} style={s.coverLogo} />}
        <Text style={s.coverLabel}>{CATALOG_INTRO.label}</Text>
        <Text style={s.coverTitle}>{CATALOG_INTRO.title}</Text>
        <Text style={s.coverLead}>{CATALOG_INTRO.lead}</Text>

        <View style={s.coverPillars}>
          {CATALOG_PILLARS.map((p) => (
            <View key={p.id} style={s.coverPillar}>
              <Text style={s.coverPillarTitle}>{p.title}</Text>
              <Text style={s.coverPillarDesc}>{p.desc}</Text>
            </View>
          ))}
        </View>

        <View style={s.coverFooter}>
          <Text style={s.coverFooterText}>gmkagency.com</Text>
          <Text style={s.coverFooterText}>Marketing Digital · Produção Audiovisual</Text>
        </View>
      </Page>

      {/* Serviços — Marketing Digital */}
      <Page size="A4" style={s.page}>
        <PageHeader section="Serviços" />
        <Text style={s.sectionTitle}>Nossos Serviços</Text>
        <Text style={s.sectionSubtitle}>
          Soluções em marketing digital e produção audiovisual para marcas que querem
          presença profissional e resultado mensurável.
        </Text>

        <Text style={s.categoryTitle}>{SERVICE_CATEGORIES[0].title}</Text>
        {SERVICE_CATEGORIES[0].items.map((item) => (
          <View key={item.name} style={s.serviceBlock} wrap={false}>
            <Text style={s.serviceName}>{item.name}</Text>
            <Text style={s.serviceDesc}>{item.desc}</Text>
            <View style={s.includesRow}>
              {item.includes.map((inc) => (
                <Text key={inc} style={s.includeTag}>{inc}</Text>
              ))}
            </View>
          </View>
        ))}
        <PageFooter page={2} total={4} />
      </Page>

      {/* Serviços — Audiovisual */}
      <Page size="A4" style={s.page}>
        <PageHeader section="Serviços" />
        <Text style={s.categoryTitle}>{SERVICE_CATEGORIES[1].title}</Text>
        {SERVICE_CATEGORIES[1].items.map((item) => (
          <View key={item.name} style={s.serviceBlock} wrap={false}>
            <Text style={s.serviceName}>{item.name}</Text>
            <Text style={s.serviceDesc}>{item.desc}</Text>
            <View style={s.includesRow}>
              {item.includes.map((inc) => (
                <Text key={inc} style={s.includeTag}>{inc}</Text>
              ))}
            </View>
          </View>
        ))}
        <PageFooter page={3} total={4} />
      </Page>

      {/* Pacotes + Complementos + Processo + CTA */}
      <Page size="A4" style={s.page}>
        <PageHeader section="Pacotes e Proposta" />
        <Text style={s.sectionTitle}>Planos Mensais</Text>
        <Text style={s.sectionSubtitle}>
          Pacotes pensados para diferentes momentos da marca. Valores sob consulta,
          montados de acordo com escopo e nicho.
        </Text>

        <View style={s.packagesGrid}>
          {PACKAGES.map((pkg) => (
            <View
              key={pkg.name}
              style={[s.packageCard, pkg.highlight && s.packageCardHighlight]}
              wrap={false}
            >
              <Text style={s.packageFocus}>{pkg.focus}</Text>
              <Text style={s.packageName}>{pkg.name}</Text>
              <Text style={s.packageTagline}>{pkg.tagline}</Text>
              {pkg.features.map((f) => (
                <Text key={f} style={s.packageFeature}>• {f}</Text>
              ))}
              <Text style={s.packageNote}>{pkg.note}</Text>
              <Text style={s.packagePrice}>Sob consulta</Text>
            </View>
          ))}
        </View>

        <Text style={[s.sectionTitle, { marginTop: 20, fontSize: 13 }]}>
          Serviços Avulsos
        </Text>
        <View style={s.addonsGrid}>
          {ADDONS.map((addon) => (
            <View key={addon.name} style={s.addonItem}>
              <Text style={s.addonName}>{addon.name}</Text>
              <Text style={s.addonDesc}>{addon.desc}</Text>
            </View>
          ))}
        </View>

        <Text style={[s.sectionTitle, { marginTop: 16, fontSize: 13 }]}>
          Como Funciona
        </Text>
        <View style={s.processRow}>
          {PROCESS_STEPS.map((step) => (
            <View key={step.step} style={s.processStep}>
              <Text style={s.processNum}>{step.step}</Text>
              <Text style={s.processTitle}>{step.title}</Text>
              <Text style={s.processDesc}>{step.desc}</Text>
            </View>
          ))}
        </View>

        <View style={s.ctaBox} wrap={false}>
          <Text style={s.ctaTitle}>Quer uma proposta personalizada?</Text>
          <Text style={s.ctaText}>
            Conte o que sua marca precisa. Montamos um plano sob medida para
            marketing digital, audiovisual ou os dois juntos.
          </Text>
          <Text style={s.ctaContact}>
            WhatsApp: (00) 90000-0000{'\n'}
            E-mail: contato@gmkagency.com{'\n'}
            Instagram: @gmkdigital · Resende, RJ
          </Text>
        </View>

        <PageFooter page={4} total={4} />
      </Page>
    </Document>
  )
}

export { LOGO_PATH }
