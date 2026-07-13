import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  RiMessage3Line,
  RiCloseLine,
  RiSendPlaneLine,
  RiLoader4Line,
  RiWhatsappLine,
} from 'react-icons/ri'
import './Chatbot.css'

const SYSTEM_PROMPT = `Você é o assistente da GMK, software house em Resende, RJ.

Serviços: desenvolvimento web, aplicativos mobile, sistemas empresariais, plataformas SaaS, automação, integrações, inteligência artificial e consultoria técnica. Especialidade em hotelaria (reservas, cardápio digital, room service), mas atende qualquer segmento.
Contato: WhatsApp (24) 98163-4937 | contato@gmkagency.com

Objetivo: conduzir o visitante até uma conversa no WhatsApp. O chat qualifica o projeto, não resolve tudo.

Como agir:
1. Pergunte o negócio e qual problema ou processo quer resolver com software.
2. Sugira 1-2 soluções adequadas ao contexto.
3. Convide para o WhatsApp para falar com um especialista.

Tom: profissional, direto, técnico sem jargão excessivo. Frases curtas. Máximo 2 frases por resposta. Uma pergunta por vez. Português do Brasil.

Preço: nunca invente valores. Diga que depende do escopo e ofereça conversa no WhatsApp.
Nunca invente cases, resultados ou garantias.
Pessoa indecisa: não force. Deixe a porta aberta.

Ao direcionar para o WhatsApp, inclua ao final um resumo entre [BRIEF] e [/BRIEF] na perspectiva do cliente. Não mencione as tags ao usuário.`

const QUICK_REPLIES = [
  'Preciso de um sistema sob medida',
  'Quero desenvolver um app',
  'Tenho um hotel e preciso de software',
  'Quero automatizar processos',
  'Quanto custa um projeto?',
]

const WA_NUMBER = '5524981634937'

function hasApiKey() {
  const key = import.meta.env.VITE_GEMINI_API_KEY
  return !!key && key !== 'sua_chave_aqui'
}

async function createModel() {
  const { GoogleGenerativeAI } = await import('@google/generative-ai')
  const client = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)
  return client.getGenerativeModel({
    model: 'gemini-3-flash-preview',
    systemInstruction: SYSTEM_PROMPT,
    generationConfig: { temperature: 0.7 },
  })
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
    ? `Olá, GMK! Vim pelo site. ${userLines}`
    : 'Olá, GMK! Vim pelo site e gostaria de falar sobre um projeto de software.'
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

const MAX_HISTORY = 6

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [apiReady, setApiReady] = useState(false)
  const [showQuickReplies, setShowQuickReplies] = useState(true)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)
  const messagesRef = useRef(messages)

  useEffect(() => { messagesRef.current = messages }, [messages])

  useEffect(() => {
    setApiReady(hasApiKey())
  }, [])

  useEffect(() => {
    if (open && messages.length === 0) {
        setTimeout(() => {
        setMessages([
          {
            role: 'bot',
            text: 'Olá! Qual software ou sistema você precisa desenvolver?',
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

      if (!apiReady) {
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              role: 'bot',
              text: 'Para falar com nossa equipe diretamente, entre em contato pelo WhatsApp (24) 98163-4937. Respondemos rápido!',
              time: new Date(),
            },
          ])
          setLoading(false)
        }, 700)
        return
      }

      try {
        const recent = messagesRef.current.slice(-MAX_HISTORY)
        const firstUserIdx = recent.findIndex((m) => m.role === 'user')
        const history = (firstUserIdx >= 0 ? recent.slice(firstUserIdx) : [])
          .map((m) => ({
            role: m.role === 'bot' ? 'model' : 'user',
            parts: [{ text: m.text }],
          }))

        const model = await createModel()
        const session = model.startChat({ history })
        const result = await session.sendMessage(trimmed)
        const response = await result.response.text()
        setMessages((prev) => [...prev, { role: 'bot', text: response, time: new Date() }])
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            role: 'bot',
            text: 'Ocorreu um erro. Entre em contato pelo WhatsApp (24) 98163-4937.',
            time: new Date(),
          },
        ])
      } finally {
        setLoading(false)
      }
    },
    [loading, apiReady]
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
            aria-label="Chat GMK"
          >
            {/* Header */}
            <div className="cb-header">
              <div className="cb-header-dot" />
              <div className="cb-avatar" aria-hidden="true">G</div>
              <div className="cb-header-info">
                <strong>GMK</strong>
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
              href="https://wa.me/5524981634937?text=Olá,%20vim%20pelo%20site%20da%20GMK!"
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
                maxLength={300}
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
          {open ? 'Fechar' : 'Tire suas dúvidas'}
        </span>
      </motion.button>
    </>
  )
}
