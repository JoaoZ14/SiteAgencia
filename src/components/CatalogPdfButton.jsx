import { useState } from 'react'
import { RiFileDownloadLine, RiLoader4Line } from 'react-icons/ri'
import './CatalogPdfButton.css'

export default function CatalogPdfButton({ className = '' }) {
  const [loading, setLoading] = useState(false)

  const handleDownload = async () => {
    if (loading) return
    setLoading(true)
    try {
      const { downloadCatalogPdf } = await import('../utils/downloadCatalogPdf')
      await downloadCatalogPdf()
    } catch (err) {
      console.error('Erro ao gerar PDF:', err)
      alert('Não foi possível gerar o PDF. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      type="button"
      className={`catalog-pdf-btn${className ? ` ${className}` : ''}`}
      onClick={handleDownload}
      disabled={loading}
    >
      {loading ? (
        <RiLoader4Line className="catalog-pdf-btn-spin" aria-hidden="true" />
      ) : (
        <RiFileDownloadLine aria-hidden="true" />
      )}
      {loading ? 'Gerando PDF…' : 'Baixar catálogo em PDF'}
    </button>
  )
}
