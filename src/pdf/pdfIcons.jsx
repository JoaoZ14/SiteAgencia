import { Svg, Path, View } from '@react-pdf/renderer'
import { pdfColors } from './catalogPdfStyles'

/** Ícones no estilo Remix Icon para @react-pdf/renderer (viewBox 24×24) */
const PATHS = {
  global:
    'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.029-7.768A13.9 13.9 0 0 1 12 18c-3.17 0-5.941-1.314-7.768-3.232A9.977 9.977 0 0 0 12 20c2.286 0 4.384-.769 6.071-2.06A13.9 13.9 0 0 1 12.971 14.232zM12 4c-4.97 0-9.033 3.806-9.371 8.694A14.033 14.033 0 0 1 12.07 9.27 14.023 14.023 0 0 1 20.38 12.69 8.983 8.983 0 0 0 12 4z',
  video:
    'M3 3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.994.994 0 0 1 3 20.007V3.993zM5 5v14h14V5H5zm8.622 3.911l4.431 2.638a.5.5 0 0 1 0 .882l-4.43 2.638a.5.5 0 0 1-.771-.441V9.352a.5.5 0 0 1 .77-.441z',
  check: 'M9.999 16.17 4.83 12l-1.414 1.414L10 19l12-12-1.414-1.414z',
  phone:
    'M9.366 10.682a16.247 16.247 0 0 0 3.952 3.952l1.09-1.09a1 1 0 0 1 1.018-.24 11.448 11.448 0 0 0 3.583.458 1 1 0 0 1 .997.997V20a1 1 0 0 1-1 1C9.611 21 3 14.389 3 6a1 1 0 0 1 1-1h2.482a1 1 0 0 1 .997.997 11.448 11.448 0 0 0 .458 3.583 1 1 0 0 1-.24 1.018l-1.09 1.09z',
  mail:
    'M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.583L5.648 6.238 4.353 7.762l7.72 6.555a1 1 0 0 0 1.29 0l7.72-6.555-1.295-1.524-6.412 5.345z',
  arrowRight: 'M16.171 11l-5.364-5.364 1.414-1.414L20 12.001l-8.179 7.779-1.414-1.414L16.171 13H4v-2z',
  eye:
    'M12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-10c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z',
  compass:
    'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm3.237-9.409-2.13-6.227-6.227 2.13 2.13 6.227 6.227-2.13z',
  team:
    'M4 22a8 8 0 1 1 16 0h-2a6 6 0 0 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z',
  chart:
    'M3 3h2v18H3V3zm16 6h2v12h-2V9zM11 13h2v8h-2v-8zm6-4h2v12h-2V9z',
  camera:
    'M9.828 7h4.344l1.414-1.414A1 1 0 0 1 16.243 5h1.514a1 1 0 0 1 .949.684L19.908 9H21a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h1.092l1.202-3.316A1 1 0 0 1 6.243 5h1.514a1 1 0 0 1 .949.684L9.828 7zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  rocket:
    'M12 14.5l7.42 2.376-1.005-7.416L12 2 5.585 9.46 4.58 16.876 12 14.5zm0 2.829l-8-2.572V19l8 3 8-3v-4.243l-8 2.572z',
  fileText:
    'M14 2H6a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7l-5-5zm1 7V3.5L19.5 9H15zM8 13h8v2H8v-2zm0 4h5v2H8v-2z',
  code:
    'M16.95 8.464l2.829-2.829a1 1 0 0 0 0-1.414l-4.95-4.95a1 1 0 0 0-1.414 0L10.88 2.88 9.464 4.295l3.182 3.182L7.05 13.07l-3.182-3.182L2.354 11.304l4.95 4.95a1 1 0 0 0 1.414 0l2.829-2.829-3.182-3.182 5.596-5.596 3.182 3.182z',
  pencil:
    'M15.728 9.686l-1.414-1.414L5 17.586V21h3.414l9.314-9.314zm2.12-7.778a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-9.9 9.9-4.243 1.414 1.414-4.243 9.9-9.9z',
  focus:
    'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-9h2v4h-2v-4zm-1 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2z',
  link:
    'M18.364 15.536l1.414 1.414a5 5 0 1 1-7.071 7.071l-1.414-1.414 1.414-1.414 1.414 1.414a3 3 0 0 0 4.243-4.243l-1.414-1.414 1.414-1.414zm-2.828-2.828l-1.414 1.414-1.414-1.414 1.414-1.414-1.414-1.414a3 3 0 0 0-4.243 4.243l1.414 1.414-1.414 1.414-1.414-1.414a5 5 0 1 1 7.071-7.071l1.414 1.414-1.414 1.414 1.414 1.414z',
  layers:
    'M12 2l9.5 5.5v11L12 24 2.5 18.5v-11L12 2zm0 2.236L4.5 8.653v8.694L12 21.764l7.5-4.417V8.653L12 4.236zM12 11l5.5 3.236v2.528L12 20l-5.5-3.236v-2.528L12 11z',
  star:
    'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
  building:
    'M4 22h16v-2H4v2zM6 19h2v-6H6v6zm4 0h2v-6h-2v6zm4 0h2v-6h-2v6zm4 0h2v-6h-2v6zM4 4h16v10H4V4zm2 2v6h12V6H6z',
}

const SERVICE_ICON_MAP = {
  'Marketing 360': 'global',
  'Social Media': 'global',
  'Criação de Conteúdo': 'fileText',
  'Tráfego Pago': 'chart',
  'Estratégia Digital': 'compass',
  Desenvolvimento: 'code',
  'Design Gráfico': 'pencil',
  'Reels e Shorts': 'video',
  'Vídeo Institucional': 'video',
  'Vídeo para Anúncios': 'video',
  'Cobertura de Eventos': 'camera',
  'Fotografia de Produto': 'camera',
  'Fotografia de Marca': 'camera',
  'Pacote Conteúdo Mensal AV': 'layers',
}

export function PdfIcon({ name, size = 14, color = pdfColors.accent }) {
  const d = PATHS[name]
  if (!d) return null
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d={d} fill={color} />
    </Svg>
  )
}

export function PdfIconBox({ name, size = 28, iconSize = 14 }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: pdfColors.accentLight,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <PdfIcon name={name} size={iconSize} color={pdfColors.accent} />
    </View>
  )
}

export function PdfCheck({ size = 10, color = pdfColors.accent }) {
  return <PdfIcon name="check" size={size} color={color} />
}

export function getServiceIcon(serviceName) {
  return SERVICE_ICON_MAP[serviceName] || 'focus'
}

/** Ícone decorativo em círculo (capa / cards) */
export function PdfIconCircle({ name, size = 32 }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: pdfColors.accentLight,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <PdfIcon name={name} size={size * 0.45} color={pdfColors.accent} />
    </View>
  )
}
