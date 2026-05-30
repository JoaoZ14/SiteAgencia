import { pdf } from '@react-pdf/renderer'
import CatalogPdfDocument, { LOGO_PATH } from '../pdf/CatalogPdfDocument'

export async function downloadCatalogPdf() {
  const logoSrc = `${window.location.origin}${encodeURI(LOGO_PATH)}`
  const blob = await pdf(
    <CatalogPdfDocument logoSrc={logoSrc} />
  ).toBlob()

  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'GMK-Digital-Catalogo.pdf'
  link.click()
  URL.revokeObjectURL(url)
}
