import { StyleSheet } from '@react-pdf/renderer'

export const pdfColors = {
  accent: '#2D5FD4',
  accentLight: '#EEF3FD',
  text: '#141414',
  textMuted: '#5C5C5C',
  textLight: '#888888',
  border: '#E4E4E4',
  white: '#FFFFFF',
  dark: '#0A0A0A',
}

export const pdfStyles = StyleSheet.create({

  /* ── Paginas internas ─────────────────────────────────── */
  page: {
    paddingTop: 44,
    paddingBottom: 56,
    paddingHorizontal: 44,
    fontFamily: 'Helvetica',
    fontSize: 11,
    color: pdfColors.text,
    backgroundColor: pdfColors.white,
  },

  /* ── Capa ─────────────────────────────────────────────── */
  coverPage: {
    paddingTop: 60,
    paddingBottom: 44,
    paddingHorizontal: 48,
    backgroundColor: pdfColors.dark,
    color: pdfColors.white,
    fontFamily: 'Helvetica',
  },
  coverLogo: {
    width: 120,
    marginBottom: 48,
  },
  coverLabel: {
    fontSize: 8,
    letterSpacing: 2.5,
    textTransform: 'uppercase',
    color: '#777777',
    marginBottom: 12,
  },
  coverTitle: {
    fontSize: 36,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: -1,
    lineHeight: 1.1,
    marginBottom: 14,
    maxWidth: 420,
  },
  coverTagline: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: pdfColors.accent,
    letterSpacing: 0.2,
    marginBottom: 12,
    maxWidth: 400,
  },
  coverLead: {
    fontSize: 11,
    lineHeight: 1.7,
    color: '#BBBBBB',
    maxWidth: 400,
    marginBottom: 32,
  },
  coverDivider: {
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
    marginBottom: 24,
  },
  coverPillars: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 36,
  },
  coverPillar: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: '#333333',
    paddingTop: 14,
  },
  coverPillarIndex: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    color: pdfColors.accent,
    letterSpacing: 1,
    marginBottom: 8,
  },
  coverPillarTitle: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    color: pdfColors.white,
    lineHeight: 1.2,
  },
  coverSummary: {
    flexDirection: 'row',
  },
  coverSummaryItem: {
    marginRight: 36,
  },
  coverSummaryNumber: {
    fontSize: 24,
    fontFamily: 'Helvetica-Bold',
    color: pdfColors.white,
    lineHeight: 1,
    marginBottom: 3,
  },
  coverSummaryLabel: {
    fontSize: 8,
    color: '#666666',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  coverFooter: {
    position: 'absolute',
    bottom: 36,
    left: 48,
    right: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#222222',
    paddingTop: 10,
  },
  coverFooterText: {
    fontSize: 8,
    color: '#555555',
  },

  /* ── Cabecalho das paginas internas ──────────────────── */
  pageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: pdfColors.border,
  },
  pageHeaderBrand: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    color: pdfColors.accent,
  },
  pageHeaderSection: {
    fontSize: 8,
    color: pdfColors.textLight,
  },

  /* ── Titulos de secao ─────────────────────────────────── */
  sectionTitle: {
    fontSize: 17,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: -0.3,
    color: pdfColors.text,
    marginBottom: 6,
  },
  sectionTitleSmall: {
    fontSize: 13,
    marginTop: 0,
  },
  sectionSubtitle: {
    fontSize: 9.5,
    color: pdfColors.textMuted,
    lineHeight: 1.6,
    marginBottom: 18,
    maxWidth: 460,
  },
  sectionDivider: {
    borderTopWidth: 1,
    borderTopColor: pdfColors.border,
    marginTop: 22,
    marginBottom: 20,
  },

  /* ── Grid de servicos (2 colunas) ────────────────────── */
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  serviceBlock: {
    width: '48%',
    marginBottom: 4,
    paddingBottom: 14,
    paddingRight: 8,
    borderBottomWidth: 1,
    borderBottomColor: pdfColors.border,
  },
  serviceNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    gap: 7,
  },
  serviceAccentBar: {
    width: 2,
    height: 12,
    backgroundColor: pdfColors.accent,
    borderRadius: 1,
  },
  serviceName: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: pdfColors.text,
  },
  serviceDesc: {
    fontSize: 9.5,
    color: pdfColors.textMuted,
    lineHeight: 1.55,
    marginBottom: 8,
  },
  includesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  includeTag: {
    fontSize: 8,
    color: pdfColors.accent,
    backgroundColor: pdfColors.accentLight,
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 2,
  },

  /* ── Grid de pacotes (2 colunas) ─────────────────────── */
  packagesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  packageCard: {
    width: '47%',
    borderWidth: 1,
    borderColor: pdfColors.border,
    padding: 16,
    marginBottom: 4,
  },
  packageCardHighlight: {
    borderColor: pdfColors.accent,
    backgroundColor: pdfColors.accentLight,
  },
  packageBadge: {
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    color: pdfColors.white,
    backgroundColor: pdfColors.accent,
    paddingVertical: 2,
    paddingHorizontal: 6,
    marginBottom: 10,
    alignSelf: 'flex-start',
    borderRadius: 2,
  },
  packageFocus: {
    fontSize: 7.5,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: pdfColors.accent,
    marginBottom: 5,
  },
  packageName: {
    fontSize: 13,
    fontFamily: 'Helvetica-Bold',
    color: pdfColors.text,
    marginBottom: 6,
  },
  packageTagline: {
    fontSize: 9.5,
    color: pdfColors.textMuted,
    lineHeight: 1.55,
    marginBottom: 10,
  },
  packageDivider: {
    borderTopWidth: 1,
    borderTopColor: pdfColors.border,
    marginBottom: 9,
  },
  packageFeatureRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 5,
  },
  packageFeatureDot: {
    fontSize: 10,
    color: pdfColors.accent,
    fontFamily: 'Helvetica-Bold',
    marginRight: 6,
    lineHeight: 1.35,
  },
  packageFeature: {
    fontSize: 9,
    color: pdfColors.text,
    lineHeight: 1.45,
    flex: 1,
  },
  packageFooter: {
    borderTopWidth: 1,
    borderTopColor: pdfColors.border,
    marginTop: 10,
    paddingTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  packageNote: {
    fontSize: 7.5,
    color: pdfColors.textLight,
    fontStyle: 'italic',
    flex: 1,
    paddingRight: 8,
    lineHeight: 1.4,
  },
  packagePrice: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: pdfColors.accent,
  },

  /* ── Grid de complementos (2 colunas no mobile) ──────── */
  addonsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  addonItem: {
    width: '47%',
    paddingBottom: 10,
    borderLeftWidth: 2,
    borderLeftColor: pdfColors.border,
    paddingLeft: 10,
    marginBottom: 8,
  },
  addonName: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: pdfColors.text,
    marginBottom: 4,
  },
  addonDesc: {
    fontSize: 8.5,
    color: pdfColors.textMuted,
    lineHeight: 1.5,
  },

  /* ── Processo (2x2 no mobile) ────────────────────────── */
  processRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 6,
    marginBottom: 20,
  },
  processStep: {
    width: '47%',
    borderTopWidth: 2,
    borderTopColor: pdfColors.accent,
    paddingTop: 10,
    marginBottom: 4,
  },
  processNum: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    color: pdfColors.accent,
    marginBottom: 5,
    letterSpacing: 0.5,
  },
  processTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: pdfColors.text,
    marginBottom: 5,
  },
  processDesc: {
    fontSize: 8.5,
    color: pdfColors.textMuted,
    lineHeight: 1.5,
  },

  /* ── CTA final ───────────────────────────────────────── */
  ctaBox: {
    backgroundColor: pdfColors.dark,
    borderRadius: 2,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  ctaLeft: {
    flex: 1,
    padding: 20,
    paddingRight: 16,
  },
  ctaRight: {
    width: 170,
    backgroundColor: '#111111',
    padding: 20,
    justifyContent: 'center',
  },
  ctaTitle: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    color: pdfColors.white,
    marginBottom: 8,
    lineHeight: 1.3,
  },
  ctaText: {
    fontSize: 9.5,
    color: '#AAAAAA',
    lineHeight: 1.65,
  },
  ctaContactLabel: {
    fontSize: 7.5,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: pdfColors.accent,
    marginBottom: 10,
  },
  ctaContact: {
    fontSize: 9.5,
    color: '#DDDDDD',
    lineHeight: 1.9,
  },

  /* ── Rodape das paginas ──────────────────────────────── */
  pageFooter: {
    position: 'absolute',
    bottom: 24,
    left: 44,
    right: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: pdfColors.border,
    paddingTop: 7,
  },
  pageFooterText: {
    fontSize: 8,
    color: pdfColors.textLight,
  },
})
