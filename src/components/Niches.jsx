import './Niches.css'

const NICHES = [
  'Saúde & Bem-estar',
  'Moda & Estilo',
  'Gastronomia',
  'E-commerce',
  'Imobiliário',
  'Educação',
  'Tecnologia',
  'Beleza & Estética',
  'Fitness & Esporte',
  'Advocacia',
  'Arquitetura & Design',
  'Finanças',
  'Serviços Locais',
  'Indústria',
  'Agronegócio',
]

export default function Niches() {
  const doubled = [...NICHES, ...NICHES]

  return (
    <section className="niches" aria-label="Nichos atendidos">
      <div className="niches-label">
        <span>Nichos atendidos</span>
      </div>
      <div className="niches-track-wrapper">
        <div className="niches-track">
          {doubled.map((niche, i) => (
            <span className="niche-item" key={i}>
              {niche}
              <span className="niche-sep" aria-hidden="true">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
