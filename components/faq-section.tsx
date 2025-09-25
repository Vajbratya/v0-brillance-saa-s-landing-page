"use client"

import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "O que é a API de Laudos IA e para quem é destinada?",
    answer:
      "Nossa API de Laudos IA é uma solução robusta para hospitais, clínicas e sistemas de saúde que precisam automatizar a geração de laudos radiológicos. Perfeita para instituições que buscam integrar inteligência artificial em seus fluxos de trabalho médicos.",
  },
  {
    question: "Como funciona a geração automática de laudos radiológicos?",
    answer:
      "Nossa API processa automaticamente imagens médicas, analisa achados radiológicos e gera laudos estruturados. Você pode configurar modelos específicos por especialidade, personalizar templates e integrar com sistemas PACS existentes.",
  },
  {
    question: "Posso integrar a API com meus sistemas hospitalares existentes?",
    answer:
      "Sim! Nossa API se integra perfeitamente com sistemas PACS, RIS, HIS e outros softwares hospitalares. Suportamos protocolos DICOM, HL7 e APIs REST para integrações personalizadas com seu fluxo de trabalho existente.",
  },
  {
    question: "Que tipo de suporte técnico vocês fornecem?",
    answer:
      "Oferecemos suporte técnico 24/7, gerentes de conta dedicados para clientes hospitalares, documentação completa da API e assistência de integração para implementação rápida em ambiente hospitalar.",
  },
  {
    question: "Os dados médicos estão seguros com nossa API?",
    answer:
      "Absolutamente. Utilizamos criptografia de nível hospitalar, conformidade HIPAA e LGPD, auditorias de segurança regulares e armazenamento em data centers certificados. Todos os dados são processados com máxima segurança e privacidade.",
  },
  {
    question: "Como começar a usar a API de Laudos IA?",
    answer:
      "É simples! Entre em contato com nossa equipe comercial, configure seu ambiente de teste, e nossa equipe técnica ajudará você a implementar a primeira integração em seu sistema hospitalar em 48 horas.",
  },
]

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="w-full flex justify-center items-start">
      <div className="flex-1 px-4 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12">
        {/* Left Column - Header */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5">
          <div className="w-full flex flex-col justify-center text-[#49423D] font-semibold leading-tight md:leading-[44px] font-sans text-4xl tracking-tight">
            Perguntas Frequentes
          </div>
          <div className="w-full text-[#605A57] text-base font-normal leading-7 font-sans">
            Integre nossa API, automatize laudos,
            <br className="hidden md:block" />
            transforme seu fluxo de trabalho médico.
          </div>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index)

              return (
                <div key={index} className="w-full border-b border-[rgba(73,66,61,0.16)] overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-[18px] flex justify-between items-center gap-5 text-left hover:bg-[rgba(73,66,61,0.02)] transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 text-[#49423D] text-base font-medium leading-6 font-sans">
                      {item.question}
                    </div>
                    <div className="flex justify-center items-center">
                      <ChevronDownIcon
                        className={`w-6 h-6 text-[rgba(73,66,61,0.60)] transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-[18px] text-[#605A57] text-sm font-normal leading-6 font-sans">
                      {item.answer}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
