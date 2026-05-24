import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GoogleGenerativeAI } from '@google/generative-ai'
import {
  RiMessage3Line,
  RiCloseLine,
  RiSendPlaneLine,
  RiLoader4Line,
  RiWhatsappLine,
} from 'react-icons/ri'
import './Chatbot.css'

const SYSTEM_PROMPT = `Você é o assistente de atendimento da GMK Digital, uma agência de marketing digital.

## Sobre a GMK Digital
- Agência fundada em 2026, focada em criar presença digital de qualidade.
- Serviços: produção de vídeo, fotografia profissional, gestão de redes sociais, criação de conteúdo, tráfego pago (Meta Ads, Google Ads, TikTok Ads), desenvolvimento de sites, landing pages, bots e aplicações sob medida, design gráfico e estratégia digital.
- Atende todos os nichos: saúde, moda, gastronomia, e-commerce, imobiliário, educação, beleza, fitness, advocacia, arquitetura, agronegócio, serviços locais e muito mais.
- Por ser nova, cada cliente recebe atenção individualizada — sem fila, sem terceirização.
- WhatsApp: (00) 90000-0000 | E-mail: contato@gmkdigital.com.br | Instagram: @gmkdigital

## Seu objetivo principal
Conduzir o visitante até uma conversa real no WhatsApp. Não resolva tudo no chat — o chat é para qualificar e aquecer o lead.

## Como conduzir a conversa

**Passo 1 — Entender o contexto**
Antes de falar sobre serviços ou preços, pergunte:
- Qual é o negócio/nicho da pessoa?
- O que ela quer melhorar? (visibilidade, vendas, presença nas redes, etc.)
- Já tem alguma presença digital ou está começando do zero?

**Passo 2 — Conectar o problema ao serviço certo**
Com base no que ela disse, apresente 1 ou 2 serviços que fazem sentido para aquela situação específica. Seja direto: "Para o que você descreveu, o que mais ajudaria seria..."

**Passo 3 — Direcionar para o WhatsApp**
Após entender a necessidade, convide para uma conversa mais completa:
"Posso te passar mais detalhes pelo WhatsApp? A gente faz uma consultoria rápida sem compromisso."

## Tom e linguagem
- Escreva como uma pessoa real, não como um robô ou vendedor agressivo.
- Linguagem informal mas profissional. "você" em minúsculo, frases curtas.
- Seja empático: reconheça o problema antes de oferecer a solução.
- Nunca use bullet points longos ou listas extensas nas respostas.
- **RESPOSTAS CURTAS:** máximo 2 frases por mensagem. Uma pergunta por vez. Não acumule perguntas nem informações numa única resposta. Menos é mais — deixe a conversa fluir naturalmente.

## Resumo para WhatsApp
Sempre que direcionar o visitante para o WhatsApp, inclua ao final da sua mensagem um resumo profissional entre as tags [BRIEF] e [/BRIEF]. Esse texto será enviado automaticamente como mensagem pré-preenchida no WhatsApp para a equipe da GMK. Escreva na perspectiva do cliente, de forma clara e organizada:

Exemplo:
[BRIEF]Olá, GMK Digital! Vim pelo site. Tenho um negócio no setor de agronegócio e ainda não tenho presença digital — estou começando do zero. Gostaria de conversar sobre como vocês podem me ajudar.[/BRIEF]

Não mencione a existência dessas tags na mensagem visível. O resumo deve ser fiel ao que o visitante disse, mas escrito de forma limpa e profissional.

## Como lidar com situações comuns

**Pergunta sobre preço:**
Não invente valores. Diga que dependem do escopo, e que a melhor forma de ter uma ideia real é numa conversa rápida pelo WhatsApp. Ofereça isso.

**Pessoa indecisa ou só "olhando":**
Não force. Pergunte o que ela está avaliando, mostre que entende a dúvida e deixe a porta aberta: "Sem pressão — qualquer dúvida pode me chamar aqui ou no WhatsApp."

**Pergunta sobre portfólio ou cases:**
Seja honesto: a agência é nova e está construindo seu portfólio. Isso é uma vantagem — atenção total, preços justos, equipe dedicada. Reforce isso com naturalidade.

**Pessoa já decidida a contratar:**
Vá direto ao WhatsApp para dar sequência.

**Crítica ou reclamação:**
Acolha, não se defenda. "Entendo sua preocupação, vamos resolver isso."

## O que nunca fazer
- Inventar cases, números ou resultados que não existem.
- Prometer prazos ou garantias sem ter certeza.
- Ser insistente ou repetitivo.
- Usar linguagem corporativa ou clichês de marketing ("alavancar resultados", "soluções inovadoras", etc.).
- Responder em outro idioma que não seja português do Brasil.`

const QUICK_REPLIES = [
  'Quero melhorar minhas redes sociais',
  'Preciso de fotos e vídeos profissionais',
  'Quero anunciar e atrair mais clientes',
  'Estou começando do zero',
  'Quanto custa?',
]

const WA_NUMBER = '5500900000000'

function getClient() {
  const key = import.meta.env.VITE_GEMINI_API_KEY
  if (!key || key === 'sua_chave_aqui') return null
  return new GoogleGenerativeAI(key)
}

function formatTime(date) {
  return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
}

const BRIEF_RE = /\[BRIEF\]([\s\S]*?)\[\/BRIEF\]/i

function extractBrief(text) {
  const match = text.match(BRIEF_RE)
  return match ? match[1].trim() : null
}

function buildWaText(botText, messages) {
  const brief = extractBrief(botText)
  if (brief) return brief
  const userLines = messages
    .filter((m) => m.role === 'user')
    .map((m) => m.text)
    .join('. ')
  return userLines
    ? `Olá, GMK Digital! Vim pelo site. ${userLines}`
    : 'Olá, GMK Digital! Vim pelo site e gostaria de saber mais.'
}

function BotText({ text, messages }) {
  const mentionsWA = /whatsapp|wa\.me/i.test(text)

  const clean = text
    .replace(BRIEF_RE, '')
    .replace(/\[.*?\]\(https?:\/\/.*?\)/g, '')
    .replace(/https?:\/\/wa\.me\/\S*/g, '')
    .trim()

  const paragraphs = clean.split('\n').filter((p) => p.trim())
  const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(buildWaText(text, messages))}`

  return (
    <>
      {paragraphs.map((p, i) => (
        <p key={i} style={{ margin: i > 0 ? '8px 0 0' : 0 }}>{p}</p>
      ))}
      {mentionsWA && (
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="cb-wa-btn"
        >
          <RiWhatsappLine />
          Continuar no WhatsApp
        </a>
      )}
    </>
  )
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [chatSession, setChatSession] = useState(null)
  const [apiReady, setApiReady] = useState(false)
  const [showQuickReplies, setShowQuickReplies] = useState(true)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    const client = getClient()
    if (!client) return
    try {
      const model = client.getGenerativeModel({
        model: 'gemini-3-flash-preview',
        systemInstruction: SYSTEM_PROMPT,
      })
      const session = model.startChat({ history: [] })
      setChatSession(session)
      setApiReady(true)
    } catch {
      setApiReady(false)
    }
  }, [])

  useEffect(() => {
    if (open && messages.length === 0) {
        setTimeout(() => {
        setMessages([
          {
            role: 'bot',
            text: 'Oi! O que você está buscando pra sua marca?',
            time: new Date(),
          },
        ])
      }, 280)
    }
  }, [open, messages.length])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 350)
  }, [open])

  useEffect(() => {
    const isMobile = window.innerWidth <= 480
    if (isMobile) {
      document.body.style.overflow = open ? 'hidden' : ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  const send = useCallback(
    async (text) => {
      const trimmed = text.trim()
      if (!trimmed || loading) return

      setInput('')
      setShowQuickReplies(false)
      setMessages((prev) => [...prev, { role: 'user', text: trimmed, time: new Date() }])
      setLoading(true)

      if (!apiReady || !chatSession) {
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              role: 'bot',
              text: 'Para falar com nossa equipe diretamente, entre em contato pelo WhatsApp (00) 90000-0000. A gente responde rápido!',
              time: new Date(),
            },
          ])
          setLoading(false)
        }, 700)
        return
      }

      try {
        const result = await chatSession.sendMessage(trimmed)
        const response = await result.response.text()
        setMessages((prev) => [...prev, { role: 'bot', text: response, time: new Date() }])
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            role: 'bot',
            text: 'Ocorreu um erro. Fale com a gente pelo WhatsApp (00) 90000-0000.',
            time: new Date(),
          },
        ])
      } finally {
        setLoading(false)
      }
    },
    [loading, apiReady, chatSession]
  )

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send(input)
    }
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="cb-window"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-label="Chat GMK Digital"
          >
            {/* Header */}
            <div className="cb-header">
              <div className="cb-header-dot" />
              <div className="cb-avatar" aria-hidden="true">G</div>
              <div className="cb-header-info">
                <strong>GMK Digital</strong>
                <span>
                  <em className="cb-status-dot" />
                  {apiReady ? 'Assistente online' : 'Envie uma mensagem'}
                </span>
              </div>
              <button className="cb-close" onClick={() => setOpen(false)} aria-label="Fechar">
                <RiCloseLine />
              </button>
            </div>

            {/* Messages */}
            <div className="cb-messages" role="log" aria-live="polite">
              <AnimatePresence initial={false}>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    className={`cb-msg cb-msg--${msg.role}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="cb-bubble">
                      {msg.role === 'bot'
                        ? <BotText text={msg.text} messages={messages} />
                        : msg.text}
                    </div>
                    <time className="cb-time">{formatTime(msg.time)}</time>
                  </motion.div>
                ))}
              </AnimatePresence>

              {loading && (
                <motion.div
                  className="cb-msg cb-msg--bot"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="cb-bubble cb-typing">
                    <span /><span /><span />
                  </div>
                </motion.div>
              )}

              {/* Quick replies */}
              {showQuickReplies && messages.length === 1 && !loading && (
                <motion.div
                  className="cb-quick-replies"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                >
                  {QUICK_REPLIES.map((qr) => (
                    <button
                      key={qr}
                      className="cb-chip"
                      onClick={() => send(qr)}
                    >
                      {qr}
                    </button>
                  ))}
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* WhatsApp shortcut */}
            <a
              href="https://wa.me/5500900000000?text=Olá,%20vim%20pelo%20site%20da%20GMK%20Digital!"
              className="cb-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiWhatsappLine />
              Falar direto no WhatsApp
            </a>

            {/* Input */}
            <div className="cb-input-row">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Digite sua mensagem..."
                disabled={loading}
                maxLength={500}
                aria-label="Mensagem"
              />
              <button
                className="cb-send"
                onClick={() => send(input)}
                disabled={loading || !input.trim()}
                aria-label="Enviar"
              >
                {loading ? (
                  <RiLoader4Line className="cb-spin" />
                ) : (
                  <RiSendPlaneLine />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle */}
      <motion.button
        className="cb-toggle"
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.93 }}
        aria-label={open ? 'Fechar chat' : 'Abrir chat'}
        aria-expanded={open}
      >
        <AnimatePresence mode="wait">
          <motion.span
            className="cb-toggle-icon"
            key={open ? 'close' : 'open'}
            initial={{ opacity: 0, rotate: open ? -90 : 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            {open ? <RiCloseLine /> : <RiMessage3Line />}
          </motion.span>
        </AnimatePresence>
        <span className="cb-toggle-label">
          {open ? 'Fechar' : 'Fale conosco'}
        </span>
      </motion.button>
    </>
  )
}
