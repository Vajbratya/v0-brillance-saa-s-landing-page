"use client"

import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "O que é a laudos.ai e para quem é destinada?",
    answer:
      "A laudos.ai é uma plataforma abrangente de automação de laudos projetada para empresas que precisam de geração de relatórios personalizados. É perfeita para empresas SaaS, prestadores de serviços e corporações que buscam otimizar seus processos de geração de laudos.",
  },
  {
    question: "Como funciona a geração de laudos personalizados?",
    answer:
      "Nossa plataforma processa automaticamente seus dados, calcula informações baseadas em seus termos específicos e gera laudos. Você pode configurar estruturas complexas de análise, relatórios baseados em uso e ciclos personalizados de geração.",
  },
  {
    question: "Posso integrar a laudos.ai com minhas ferramentas existentes?",
    answer:
      "Sim! A laudos.ai se integra perfeitamente com sistemas CRM populares, software de contabilidade e processadores de dados. Suportamos APIs e webhooks para integrações personalizadas com seu fluxo de trabalho existente.",
  },
  {
    question: "Que tipo de suporte vocês fornecem?",
    answer:
      "Oferecemos suporte ao cliente 24/7, gerentes de conta dedicados para clientes empresariais, documentação abrangente e assistência de integração para ajudá-lo a começar rapidamente.",
  },
  {
    question: "Meus dados estão seguros com a laudos.ai?",
    answer:
      "Absolutamente. Usamos medidas de segurança de nível empresarial, incluindo criptografia ponta a ponta, conformidade SOC 2 e auditorias de segurança regulares. Seus dados são armazenados em data centers seguros e redundantes.",
  },
  {
    question: "Como começar com a laudos.ai?",
    answer:
      "Começar é simples! Inscreva-se para nosso teste gratuito, conecte seus sistemas existentes, e nossa equipe de integração ajudará você a configurar seu primeiro fluxo de trabalho de laudos personalizados em 24 horas.",
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
            Explore seus dados, construa seu dashboard,
            <br className="hidden md:block" />
            una sua equipe.
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
